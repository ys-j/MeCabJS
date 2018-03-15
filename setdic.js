importScripts('gunzip.min.js');
self.onmessage = e => {
    fetch('dic.min.tsv.gz').then(res => res.arrayBuffer()).then(buffer => {
        let u8array = new Zlib.Gunzip(new Uint8Array(buffer)).decompress();
        let words = new TextDecoder().decode(u8array).split('\r\n');
        let wordsLen = words.length;
        let openReq = indexedDB.open('ipadic');
        openReq.onupgradeneeded = e => {
            let db = e.target.result;
            let store = db.createObjectStore('dictionary', { keyPath: 'word' });
            store.createIndex('word', 'word');
            store.transaction.oncomplete = () => {
                let dictionary = db.transaction('dictionary', 'readwrite').objectStore('dictionary');
                for (let i = 0; i < wordsLen; i++) {
                    if (!words[i]) continue;
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
                    
                    let addReq = dictionary.add(token);
                    addReq.onsuccess = () => {
                        self.postMessage(((i+1)/wordsLen*100).toFixed(1));
                    };
                }
            };
        };
    });
};