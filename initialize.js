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
			db.createObjectStore('dictionary', { autoIncrement: true }).createIndex('index', 'word');
			db.createObjectStore('matrix', { keyPath: 'right' });
		};
		openReq.onsuccess = e => {
			let db = e.target.result;
			let tx = db.transaction(['dictionary', 'matrix'], 'readwrite');

			self.postMessage({ success: null, rest: Infinity });
			// Matrix
			new Promise((resolve, reject) => {
				let matrix = tx.objectStore('matrix');
				let bin = values[0];
				const SizeX = bin[0] >>> 0, SizeY = bin[1] >>> 0;
				for (let i = 0; i < SizeY; i++) {
					let start = 2 + i * SizeY;
					let putReq = matrix.put({
						right: i,
						left: [...bin.subarray(start, start + SizeX)],
					});
					if (i === SizeY - 1) putReq.onsuccess = () => resolve();
				}
			}).then(() => {
				// Dictionary
				let dictionary = tx.objectStore('dictionary');
				let words = values[1];
				const SizeWords = words.length;
				let promises = new Array(SizeWords);
	
				for (let i = 0; i < SizeWords; i++) {
					let c = words[i].split('\t');
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
		
					promises[i] = new Promise((resolve, reject) => {
						let req = dictionary.put(token);
						req.onsuccess = e => {
							self.postMessage({ success: i, rest: SizeWords-i-1 });
							resolve();
						};
						req.onerror = e => {
							self.postMessage({ error: words[i], rest: SizeWords-i-1 });
							reject(i);
						};
					});
				}

				Promise.all(promises).then(() => {
					self.postMessage({ success: null, rest: 0 });
					self.close();
				}, indexes => {
					self.postMessage({ error: indexes, rest: 0 });
					self.close();
				});
			});
		};
	});
}