const DIC_NAME = 'naist-jdic';
const COST_CORRECTION = 10000; // min_cost: -8456;
const POSID = [
	['その他', '間投'], // 0
	['フィラー'], // 1
	['感動詞'], // 2
	['記号', 'アルファベット'], // 3
	['記号', '一般'], // 4
	['記号', '括弧開'], // 5
	['記号', '括弧閉'], // 6
	['記号', '句点'], // 7
	['記号', '空白'], // 8
	['記号', '読点'], // 9
	['形容詞', '自立'], // 10
	['形容詞', '接尾'], // 11
	['形容詞', '非自立'], //12
	['助詞', '格助詞', '一般'], // 13
	['助詞', '格助詞', '引用'], // 14
	['助詞', '格助詞', '連語'], // 15
	['助詞', '係助詞'], // 16
	['助詞', '終助詞'], // 17
	['助詞', '接続助詞'], // 18
	['助詞', '特殊'], // 19
	['助詞', '副詞化'], // 20
	['助詞', '副助詞'], // 21
	['助詞', '副助詞／並立助詞／終助詞'], // 22
	['助詞', '並立助詞'], // 23
	['助詞', '連体化'], // 24
	['助動詞'], // 25
	['接続詞'], // 26
	['接頭詞', '形容詞接続'], // 27
	['接頭詞', '数接続'], // 28
	['接頭詞', '動詞接続'], // 29
	['接頭詞', '名詞接続'], // 30
	['動詞', '自立'], // 31
	['動詞', '接尾'], // 32
	['動詞', '非自立'], // 33
	['副詞', '一般'], // 34
	['副詞', '助詞類接続'], // 35
	['名詞', 'サ変接続'], // 36
	['名詞', 'ナイ形容詞語幹'], // 37
	['名詞', '一般'], // 38
	['名詞', '引用文字列'], // 39
	['名詞', '形容動詞語幹'], // 40
	['名詞', '固有名詞', '一般'], // 41
	['名詞', '固有名詞', '人名', '一般'], // 42
	['名詞', '固有名詞', '人名', '姓'], // 43
	['名詞', '固有名詞', '人名', '名'], // 44
	['名詞', '固有名詞', '組織'], // 45
	['名詞', '固有名詞', '地域', '一般'], // 46
	['名詞', '固有名詞', '地域', '国'], // 47
	['名詞', '数'], // 48
	['名詞', '接続詞的'], // 49
	['名詞', '接尾', 'サ変接続'], // 50
	['名詞', '接尾', '一般'], // 51
	['名詞', '接尾', '形容動詞語幹'], // 52
	['名詞', '接尾', '助数詞'], // 53
	['名詞', '接尾', '助動詞語幹'], // 54
	['名詞', '接尾', '人名'], // 55
	['名詞', '接尾', '地域'], // 56
	['名詞', '接尾', '特殊'], // 57
	['名詞', '接尾', '副詞可能'], // 58
	['名詞', '代名詞', '一般'], // 59
	['名詞', '代名詞', '縮約'], // 60
	['名詞', '動詞非自立的'], // 61
	['名詞', '特殊', '助動詞語幹'], // 62
	['名詞', '非自立', '一般'], // 63
	['名詞', '非自立', '形容動詞語幹'], // 64
	['名詞', '非自立', '助動詞語幹'], // 65
	['名詞', '非自立', '副詞可能'], // 66
	['名詞', '副詞可能'], // 67
	['連体詞'], // 68
];
const BOS = {
	word: '\x02',
	id: 0,
	cost: 0,
	start: 0,
	end: 1,
};
const EOS = {
	word: '\x03',
	id: 0,
	cost: 0,
};

class Path extends Array {
	constructor(array) {
		super();
		let len = array.length;
		for (let i = 0; i < len; i++) this[i] = array[i];
		this.length = len;
		this.cost = 0;
	}
	last() {
		return this[this.length - 1];
	}
}

class Lattice {
	constructor(input) {
		this.input = [...input];
	}
	lookup() {
		let chars = this.input;
		const CHAR_LENGTH = chars.length;
		return new Promise((resolve, reject) => {
			indexedDB.open(DIC_NAME).onsuccess = e => {
				let db = e.target.result;
				let dic = db.transaction(['dictionary'], 'readonly').objectStore('dictionary').index('index');
				let targets = [], promises = [];
				for (let i = 0; i < CHAR_LENGTH; i++) {
					for (let j = i; j < CHAR_LENGTH; j++) {
						promises.push(new Promise((resolve, reject) => {
							let targetKey = chars.slice(i, j+1).join('');
							dic.openCursor(targetKey).onsuccess = e => {
								let cursor = e.target.result;
								if (cursor) {
									cursor.value.start = i + 1;
									cursor.value.end = j + 2;
									targets.push(cursor.value);
									cursor.continue();
								} else {
									resolve();
								}
							}
						}));
					}
				}
				Promise.all(promises).then(() => {
					targets.push(Object.assign({}, BOS), Object.assign({
						start: CHAR_LENGTH + 1,
						end: CHAR_LENGTH + 2,
					}, EOS));
					this.words = targets.sort((a, b) => {
						return a.start - b.start || a.end - b.end;
					});
					resolve(this.words);
				}, reject);
			};
		});
	}
	dijkstra() {
		let words = this.words;
		let len = words.length;
		let costs = new Array(len).fill().map(() => new Array(len));
		return new Promise((resolve, reject) => {
			let promises = [];
			indexedDB.open(DIC_NAME).onsuccess = e => {
				let db = e.target.result;
				let matrix = db.transaction(['matrix'], 'readonly').objectStore('matrix');
				for (let x = 0; x < len; x++) {
					for (let y = 0; y < len; y++) {
						if (words[x].start === words[y].end) {
							promises.push(new Promise((resolve, reject) => {
								matrix.get([words[x].id, words[y].id]).onsuccess = e => {
									costs[x][y] = e.target.result.cost + words[y].cost + COST_CORRECTION * 2;
									resolve();
								};
							}));
						} else {
							costs[x][y] = Infinity;
						}
					}
				}
				Promise.all(promises).then(() => {
					let vertex = new Array(len).fill().map(() => ({
						cost: Infinity,
						next: -1,
						visited: false,
					}));
					vertex[len-1] = {
						cost: words[len-1].cost, // 0
						next: len,
						visited: false,
					};
					while (true) {
						let min = Infinity;
						for (let i = 0; i < len; i++) {
							if (!vertex[i].visited && vertex[i].cost < min) min = vertex[i].cost;
						}
						if (min === Infinity) break;
						for (let x = 0; x < len; x++) {
							if (vertex[x].cost === min) {
								for (let y = 0; y < len; y++) {
									let sum = costs[x][y] + min;
									if (sum < vertex[y].cost) {
										vertex[y].cost = sum;
										vertex[y].next = x;
									}
								}
								vertex[x].visited = true;
							}
						}
					}
					let index = 0, path = [];
					try {
						while (index < len) {
							path.push(words[index]);
							index = vertex[index].next;
						}
					} catch(e) {
						reject();
					}
					resolve(path.slice(1, path.length-1));
				});
			};
		});
	}
}

(function () {
	let buttons = document.getElementsByTagName('button');
	let dicstatus = document.getElementById('dicstatus');
	let form = document.forms[0];
	let textarea = form[0];
	let output = document.getElementById('output');
	
	// Saving Dictionary
	buttons[0].onclick = () => {
		buttons[0].className = 'active';
		buttons[0].disabled = true;
		buttons[1].disabled = true;
		buttons[2].disabled = true;
		dicstatus.value = '辞書を読み込んでいます';
		const WORKER = new Worker('setdic.js');
		WORKER.onmessage = e => {
			WORKER.onmessage = e => {
				WORKER.terminate();
				buttons[0].className = '';
				buttons[0].disabled = false;
				buttons[1].disabled = false;
				buttons[2].disabled = false;
				dicstatus.value = '辞書の読み込みが完了しました';
			};
		};
		WORKER.onerror = e => {
			WORKER.terminate();
			buttons[0].className = '';
			buttons[0].disabled = false;
			buttons[1].disabled = false;
			buttons[2].disabled = false;
			dicstatus.value = 'エラーが発生しました';
		};
		WORKER.postMessage(DIC_NAME);
	};
	
	// Deleting Dictionary
	buttons[1].onclick = () => {
		buttons[0].disabled = true;
		buttons[1].className = 'active';
		buttons[1].disabled = true;
		buttons[2].disabled = true;
		dicstatus.value = '辞書を削除しています';
		let req = indexedDB.deleteDatabase(DIC_NAME);
		req.onsuccess = () => {
			buttons[0].disabled = false;
			buttons[1].className = '';
			buttons[1].disabled = false;
			buttons[2].disabled = false;
			dicstatus.value = '辞書を削除しました';
		};
	};
	
	// Analyzing
	form.onsubmit = () => {
		buttons[0].disabled = true;
		buttons[1].disabled = true;
		buttons[2].className = 'active';
		buttons[2].disabled = true;
		dicstatus.value = '解析中です';
		let outputText = '';
		let inputs = textarea.value.split(/(.*。)/);
		let lattices = [];
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i]) lattices.push(new Lattice(inputs[i]));
		}
		let promises = lattices.map(lattice => new Promise((resolve, reject) => {
			lattice.lookup()
				.then(() => lattice.dijkstra())
				.then(v => resolve(v));
		}));
		Promise.all(promises).then(values => {
			for (let i = 0; i < values.length; i++) {
				for (let j = 0; j < values[i].length; j++) {
					let word = values[i][j];
					outputText += '<tr>'
						+ '<th>' + word.word
						+ '<td>' + POSID[word.pos].join('-')
						+ '<td>' + (word.cjg || []).join('-')
						+ '<td>' + (word.base || word.word)
						+ '<td>' + (word.orth || word.word)
						+ '<td>' + (word.pron || word.orth || word.word);
				}
			}
			output.innerHTML = outputText;
			dicstatus.value = '解析が終了しました';
		}, () => {
			dicstatus.value = '解析中にエラーが発生しました';
		});
		buttons[0].disabled = false;
		buttons[1].disabled = false;
		buttons[2].className = '';
		buttons[2].disabled = false;
		return false;
	};
})();