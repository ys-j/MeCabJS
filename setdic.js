importScripts('gunzip.min.js');

self.onmessage = e => {
	const DIC_NAME = e.data;
	Promise.all([
		fetch(DIC_NAME + '.min.tsv.gz').then(res => res.arrayBuffer()).then(buffer => {
			let u8array = new Zlib.Gunzip(new Uint8Array(buffer)).decompress();
			return new TextDecoder().decode(u8array).split('\n');
		}),
		fetch(DIC_NAME + '.matrix.bin.gz').then(res => res.arrayBuffer()).then(buffer => {
			let u8array = new Zlib.Gunzip(new Uint8Array(buffer)).decompress();
			return new Int16Array(u8array.buffer);
		}),
	]).then(values => {
		let openReq = indexedDB.open(DIC_NAME);
		openReq.onupgradeneeded = e => {
			let db = e.target.result;
			db.createObjectStore('dictionary', { autoIncrement: true }).createIndex('index', 'word');
			db.createObjectStore('matrix', { keyPath: ['left', 'right'] });
		};
		openReq.onsuccess = e => {
			let db = e.target.result;
			let tx = db.transaction(['dictionary', 'matrix'], 'readwrite');
			
			// Dictionary
			let dictionary = tx.objectStore('dictionary');
			let words = values[0];
			const SizeWords = words.length;
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
	
				let putReq = dictionary.put(token);
				if (i === SizeWords-1) {
					putReq.onsuccess = () => {
						self.postMessage(null);
					};
				}
			}
	
			// Matrix
			let matrix = tx.objectStore('matrix');
			let array = values[1];
			const SizeX = array[0] >>> 0, SizeY = array[1] >>> 0;
			for (let i = 0; i < SizeY; i++) {
				for (let j = 0; j < SizeX; j++) {
					let putReq = matrix.put({
						left: j,
						right: i,
						cost: array[2 + i*SizeY + j],
					});
					if (i === SizeY-1 && j === SizeX-1) {
						putReq.onsuccess = () => {
							self.postMessage(null);
						};
					}
				}
			}
		}
	});
};