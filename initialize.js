importScripts('gunzip.min.js');

self.onmessage = e => {
	const DIC_NAME = e.data;
	Promise.all([
		// Matrix
		new Promise((resolve, reject) => {
			fetch(DIC_NAME + '.matrix.bin.gz').then(res => res.arrayBuffer()).then(buffer => {
				let u8array = new Zlib.Gunzip(new Uint8Array(buffer)).decompress();
				resolve(new Int16Array(u8array.buffer));
			});
		}),
		// Dictionary
		new Promise((resolve, reject) => {
			fetch(DIC_NAME + '.min.tsv.gz').then(res => res.arrayBuffer()).then(buffer => {
				let u8array = new Zlib.Gunzip(new Uint8Array(buffer)).decompress();
				resolve(new TextDecoder().decode(u8array).split('\n'));
			});
		}),
	]).then(values => {
		let openReq = indexedDB.open(DIC_NAME);
		openReq.onupgradeneeded = e => {
			let db = e.target.result;
			db.createObjectStore('matrix', { keyPath: 'right' });
			db.createObjectStore('dictionary', { autoIncrement: true }).createIndex('index', 'word');
		};
		openReq.onsuccess = e => {
			let db = e.target.result;
			let tx = db.transaction(['matrix', 'dictionary'], 'readwrite');
			let errors = [];
			new Promise((resolve, reject) => {
				let matrix = tx.objectStore('matrix');
				let bin = values[0];
				const SizeX = bin[0] >>> 0, SizeY = bin[1] >>> 0;

				let dictionary = tx.objectStore('dictionary');
				let words = values[1];
				const SizeWords = words.length;

				const SumSize = SizeY + SizeWords;

				let promises = new Array(SumSize);
				self.postMessage({ state: 'waiting', rest: SumSize });
				
				for (let i = 0; i < SizeY; i++) {
					promises[i] = new Promise((resolve, reject) => {
						let start = 2 + i * SizeY;
						let req = matrix.put({
							right: i,
							left: [...bin.subarray(start, start + SizeX)],
						});
						req.onsuccess = e => {
							self.postMessage({ rest: SumSize - i - 1 });
							resolve();
						};
						req.onerror = e => {
							errors.push('matrix' + i);
							self.postMessage({ rest: SumSize - i - 1 });
							resolve();
						};
					});
				}

				for (let j = 0; j < SizeWords; j++) {
					promises[SizeY + j] = new Promise((resolve, reject) => {
						let c = words[j].split('\t');
						let token = {
							word: c[0],
							id: Number(c[1]),
							cost: Number(c[2]),
							pos: Number(c[3]),
						};
						if (c[4]) token.cjg = [ c[4], c[5] ];
						if (c[6]) token.base = c[6];
						if (c[7]) token.orth = c[7];
						if (c[8]) token.pron = c[8];
						let req = dictionary.put(token);
						req.onsuccess = e => {
							self.postMessage({ rest: SizeWords - j - 1 });
							resolve();
						};
						req.onerror = e => {
							errors.push('dic' + j);
							self.postMessage({ rest: SizeWords - j - 1 });
							resolve();
						};
					});
				}
				return Promise.all(promises);
			}).then(() => {
				self.postMessage({ state: 'done', error: errors, rest: 0 });
				self.close();
			});
		};
		openReq.onerror = e => Promise.reject('データベースに接続できません');
	}).catch(e => {
		self.postMessage({ state: 'error', error: e, rest: 0 });
		self.close();
	});
}