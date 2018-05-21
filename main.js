const DIC_NAME = 'naist-jdic';
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
const UNKNOWN_DEFINITION_NAME = 'UNKNOWN_DEFINITION';
const UNKNOWN_DEFINITION = JSON.parse(localStorage.getItem(UNKNOWN_DEFINITION_NAME) || null) || [
	{ name: 'DEFAULT', invoke: false, regexp: '' }, // 0
	{ name: 'SPACE', invoke: true, regexp: '\\s+' }, // 1
	{ name: 'KANJI', invoke: false, regexp: '[⺀-⻳⼀-⿕々〇㐀-䶵一-龥豈-鶴侮-頻]{1,2}' }, // 2
	{ name: 'SYMBOL', invoke: true, regexp: '[!-/:-@[-`{-~¡-¿À-ȶḀ-ỹ！-／：-＠［-｀｛-･￠-\uffef\u2000-\u206f₠-⅏←-⥿⨀-\\u2bff\\u3000-\\u303f㈀-㏿︰-﹫]+' }, // 3
	{ name: 'NUMERIC', invoke: true, regexp: '[0-9０-９⁰-\u209f⅐-\u218f]+' }, // 4
	{ name: 'ALPHA', invoke: true, regexp: '[A-Za-zＡ-Ｚａ-ｚ]+' }, // 5
	{ name: 'HIRAGANA', invoke: false, regexp: '[ぁ-ゟー]{1,4}' }, // 6
	{ name: 'KATAKANA', invoke: true, regexp: '[ァ-ヿㇰ-ㇿｦ-ﾝﾞﾟ]+' }, // 7
	{ name: 'KANJINUMERIC', invoke: true, regexp: '[〇一二三四五六七八九十百千万億兆京]+' }, // 8
	{ name: 'GREEK', invoke: true, regexp: '[ʹ-ϻ]+' }, // 9
	{ name: 'CYRILLIC', invoke: true, regexp: '[Ѐ-ӹԀ-ԏ]+' }, // 10
];
const KANA_TYPE_NAME = 'KANA_TYPE';
const KANA_TYPE = JSON.parse(localStorage.getItem(KANA_TYPE_NAME) || null) || {
	orth: 'ひらがな',
	pron: 'ひらがな',
};
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

const MESSAGE = {
	COPIED: 'をクリップボードにコピーしました',
	COPY_FAILED: 'のコピーに失敗しました',
	DELETING_DIC: '辞書を削除しています',
	DONE_DELETING: '辞書を削除しました',
	DONE_LOADING: '辞書の読み込みが完了しました',
	DONE_PARSING: '解析が終了しました',
	DOWNLOADING: '辞書をダウンロードしています',
	ERROR: 'エラーが発生しました',
	LOADING_DIC: '辞書を読み込んでいます：残り',
	NOT_FOUND_DIC: '辞書が見つかりません',
	NOT_DOUND_MTX: '品詞連接情報が見つかりません',
	NOT_FOUND_WORD: '単語が見つかりません',
	PARSING: '解析中です',
	WAITING_DB: 'データベースの受付を待機しています：残り',
};

class Path extends Array {
	constructor(length) {
		super();
		this.length = length || 0;
		this.cost = 0;
	}
	format() {
		let cost = this.cost;
		let newPath = Path.from(this.slice(1, this.length-1));
		newPath.cost = cost;
		return newPath;
	}
	static from(arraylike) {
		let length = arraylike.length;
		let path = new Path(length)
		for (let i = 0; i < length; i++) path[i] = arraylike[i];
		return path;
	}
}

let mtx = [];

class Lattice {
	constructor(input) {
		this.input = [...input];
	}
	lookup(unkDic) {
		let chars = this.input;
		const CHAR_LENGTH = chars.length;
		return new Promise((resolve, reject) => {
			indexedDB.open(DIC_NAME).onsuccess = e => {
				let db = e.target.result, dic;
				try {
					dic = db.transaction(['dictionary'], 'readonly').objectStore('dictionary').index('index');
				} catch(e) {
					db.close();
					indexedDB.deleteDatabase(DIC_NAME);
					reject(MESSAGE.NOT_FOUND_DIC);
				}
				let targets = [], promises = [];
				for (let i = 0; i < CHAR_LENGTH; i++) {
					for (let j = i; j < CHAR_LENGTH; j++) {
						promises.push(new Promise((resolve, reject) => {
							let targetKey = chars.slice(i, j+1).join('');
							let req = dic.openCursor(Halfwidth2Fullwidth(targetKey));
							req.onsuccess = e => {
								let cursor = e.target.result;
								if (cursor) {
									cursor.value.start = i + 1;
									cursor.value.end = j + 2;
									targets.push(cursor.value);
									cursor.continue();
								} else {
									// Skip DEFAULT (k=0)
									for (let k = 1; k < unkDic.length; k++) {
										if (new RegExp('^' + unkDic[k].regexp + '$').test(targetKey)) {
											targets.push({
												word: targetKey,
												id: unkDic[k].id,
												cost: unkDic[k].cost,
												pos: unkDic[k].pos,
												start: i + 1,
												end: j + 2,
												note: k && '未知語'
													|| targetKey === '\n' && '改行'
													|| targetKey === '\t' && 'タブ'
													|| '空白'
											});
										}
									}
									resolve();
								}
							};
							req.onerror = e => reject(e);
						}));
					}
				}
				Promise.all(promises).then(() => {
					targets.push(Object.assign({}, BOS), Object.assign({}, EOS, {
						start: CHAR_LENGTH + 1,
						end: CHAR_LENGTH + 2,
					}));
					this.words = targets.sort((a, b) => {
						return a.start - b.start || a.end - b.end;
					});
					resolve(this.words);
				}, reject).then(() => db.close());
			};
		});
	}
	tokenize() {
		let words = this.words;
		let len = words.length;
		let mCosts = new Array(len).fill().map(() => new Array(len));
		return new Promise((resolve, reject) => {
			let promises = [];
			indexedDB.open(DIC_NAME).onsuccess = e => {
				let db = e.target.result;
				let matrix = db.transaction(['matrix'], 'readonly').objectStore('matrix');
				for (let y = 0; y < len; y++) {
					let rightId = words[y].id;
					promises.push(new Promise((resolve, reject) => {
						if (mtx[rightId]) {
							resolve();
						} else {
							let req = matrix.get(rightId);
							req.onsuccess = e => {
								let result = e.target.result;
								if (result) {
									mtx[rightId] = e.target.result.left;
									resolve();
								} else {
									reject(MESSAGE.NOT_DOUND_MTX);
								}
							};
							req.onerror = e => reject(e);
						}
					}).then(() => {
						for (let x = 0; x < len; x++) {
							let leftId = words[x].id;
							mCosts[y][x] = words[x].end === words[y].start ? mtx[rightId][leftId] : Infinity;
						}
					}));
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
						for (let y = 0; y < len; y++) {
							if (vertex[y].cost === min) {
								for (let x = 0; x < len; x++) {
									let sum = mCosts[y][x] + words[y].cost + min;
									if (sum < vertex[x].cost) {
										vertex[x].cost = sum;
										vertex[x].next = y;
									}
								}
								vertex[y].visited = true;
							}
						}
					}
					let index = 0, path = new Path();
					path.cost = vertex[index].cost;
					while (index < len) {
						let word = words[index];
						if (word) {
							path.push(word);
							index = vertex[index].next;
						} else {
							reject(MESSAGE.NOT_FOUND_WORD);
							break;
						}
					}
					resolve(path.format());
				}).catch(e => reject(e));
			};
		});
	}
}

(function () {
	/*
		Setting Unknown Word Dictionary
	*/
	let unkDicAll, unkDicNormal;
	fetch(DIC_NAME + '.unknown.bin').then(res => res.arrayBuffer()).then(buf => {
		let array = new Uint16Array(buf);
		unkDicAll = new Array(array.length / 4);
		for (let i = 0; i < unkDicAll.length; i++) {
			unkDicAll[i] = Object.assign({}, UNKNOWN_DEFINITION[array[i*4+0]], {
				id: array[i*4+1],
				cost: array[i*4+2],
				pos: array[i*4+3],
			});
		}
		unkDicNormal = unkDicAll.filter(v => v.invoke);
	});

	/*
		DOM
	*/
	let buttons = document.getElementsByTagName('button');
	// buttons = [save, delate, config, main]
	let status = document.getElementById('status');
	let form = document.forms.main;
	let textarea = form[0];
	let table = document.getElementById('table');
	let output = table.tBodies[0];
	let overlay = document.getElementById('overlay');
	
	// Saving Dictionary
	buttons[0].onclick = () => {
		buttons[0].className = 'active';
		buttons[0].disabled = true;
		buttons[1].disabled = true;
		buttons[2].disabled = true;
		buttons[3].disabled = true;
		status.value = MESSAGE.DOWNLOADING;

		let worker = new Worker('initialize.js');
		worker.onmessage = e => {
			switch (e.data.state) {
				case 'waiting':
					status.value = MESSAGE.WAITING_DB + e.data.rest;
					break;
				case 'processing':
					status.value = MESSAGE.LOADING_DIC + e.data.rest;
					break;
				default:
					worker.terminate();
					buttons[0].className = '';
					buttons[0].disabled = false;
					buttons[1].disabled = false;
					buttons[2].disabled = false;
					buttons[3].disabled = false;
					if (e.data.state === 'done') {
						status.value = MESSAGE.DONE_LOADING;
						if (e.data.error.length) status.value += '（エラー：' + e.data.error.length + '語未登録）';
					} else {
						status.value = MESSAGE.ERROR;
						if (e.data.error) status.value += '（' + e.data.error + '）';
					}
			}
		};
		worker.onerror = e => {
			worker.terminate();
			buttons[0].className = '';
			buttons[0].disabled = false;
			buttons[1].disabled = false;
			buttons[2].disabled = false;
			buttons[3].disabled = false;
			status.value = MESSAGE.ERROR;
		};
		worker.postMessage(DIC_NAME);
	};
	
	// Deleting Dictionary
	buttons[1].onclick = () => {
		buttons[0].disabled = true;
		buttons[1].className = 'active';
		buttons[1].disabled = true;
		buttons[2].disabled = true;
		buttons[3].disabled = true;
		status.value = MESSAGE.DELETING_DIC;
		localStorage.removeItem(UNKNOWN_DEFINITION_NAME);
		let req = indexedDB.deleteDatabase(DIC_NAME);
		req.onsuccess = () => {
			buttons[0].disabled = false;
			buttons[1].className = '';
			buttons[1].disabled = false;
			buttons[2].disabled = false;
			buttons[3].disabled = false;
			status.value = MESSAGE.DONE_DELETING;
		};
	};

	// Configuration
	buttons[2].onclick = e => {
		let script = document.createElement('script');
		script.src = 'configration.js';
		document.body.appendChild(script);
		e.target.onclick = null;
	};
	
	// Tokenization
	form.onsubmit = () => {
		buttons[0].disabled = true;
		buttons[1].disabled = true;
		buttons[2].disabled = true;
		buttons[3].className = 'active';
		buttons[3].disabled = true;
		status.value = MESSAGE.PARSING;
		let outputHTML = '';
		let lattices = [];
		for (let input of textarea.value.split(/(.*?。)\s*/)) {
			if (input) lattices.push(new Lattice(input));
		}
		let promises = lattices.map(lattice => new Promise((resolve, reject) => {
			lattice.lookup(unkDicNormal || [])
				.then(() => lattice.tokenize(), e => reject(e))
				.then(v => resolve(v), () => lattice.lookup(unkDicAll || []))
				.then(() => lattice.tokenize())
				.then(v => resolve(v))
				.catch(e => reject(e));
		}));
		Promise.all(promises).then(values => {
			for (let i = 0; i < values.length; i++) {
				for (let j = 0; j < values[i].length; j++) {
					let word = values[i][j];
					outputHTML += '<tr>'
						+ '<th>' + Fullwidth2Halfwidth(word.word)
						+ '<td>' + POSID[word.pos].join(' - ')
						+ '<td>' + (word.cjg || []).join(' - ')
						+ '<td>' + (word.base || word.cjg && word.word || '')
						+ '<td>' + convertKana((word.orth || word.word), KANA_TYPE.orth),
						+ '<td>' + convertKana((word.pron || word.orth || word.word), KANA_TYPE.pron),
						+ '<td>' + (word.note || '');
				}
			}
			output.innerHTML = outputHTML;
			status.value = MESSAGE.DONE_PARSING;
		}, e => {
			status.value = MESSAGE.ERROR;
			if (e) status.value += '（' + e +  '）';
		}).then(() => {
			buttons[0].disabled = false;
			buttons[1].disabled = false;
			buttons[2].disabled = false;
			buttons[3].className = '';
			buttons[3].disabled = false;
		});
		return false;
	};

	// Enable copy buttons
	let dummy = document.createElement('textarea');
	let ths = table.rows[0].children;
	for (let i = 0; i < ths.length; i++) {
		let a = ths[i].firstElementChild;
		if (a) {
			a.onclick = e => {
				let v = '';
				let cols = output.querySelectorAll('td:nth-of-type(' + i + ')');
				for (let c of cols) {
					v += c.textContent;
				}
				document.body.appendChild(dummy);
				dummy.value = v;
				dummy.select();
				let copied = document.execCommand('copy');
				status.value = a.textContent + (copied ? MESSAGE.COPIED : MESSAGE.COPY_FAILED);
				document.body.removeChild(dummy);
				return false;
			}
		}
	}

	// Warning for not Firefox users
	if (!/firefox/i.test(navigator.userAgent)) {
		let css = '#ua-warning{color:#c00;}';
		document.head.insertAdjacentHTML('beforeend', '<style>' + css + '</style>');
	}
})();

function convertKana(str, type) {
	if (type === 'ひらがな') {
		return Katakana2Hiragana(str);
	} else if (type === 'カタカナ') {
		return Hiragana2Katakana(str);
	} else {
		return str;
	}
}
function Katakana2Hiragana(str) {
	if (!str) return '';
	let result = [];
	for (let s of str) {
		let codepoint = s.codePointAt(0);
		if (0x30a0 < codepoint && codepoint < 0x30f5) {
			result.push(String.fromCharCode(codepoint - 96));
		} else {
			result.push(s);
		}
	}
	return result.join('');
}
function Hiragana2Katakana(str) {
	if (!str) return '';
	let result = [];
	for (let s of str) {
		let codepoint = s.codePointAt(0);
		if (0x3040 < codepoint && codepoint < 0x3095) {
			result.push(String.fromCharCode(codepoint + 96));
		} else {
			result.push(s);
		}
	}
	return result.join('');
}
function Fullwidth2Halfwidth(str) {
	if (!str) return '';
	let result = [];
	for (let s of str) {
		let codepoint = s.codePointAt(0);
		if (0xff00 < codepoint && codepoint < 0xff5f) {
			result.push(String.fromCharCode(codepoint - 65248));
		} else {
			result.push(s);
		}
	}
	return result.join('');
}
function Halfwidth2Fullwidth(str) {
	if (!str) return '';
	let result = [];
	for (let s of str) {
		let codepoint = s.codePointAt(0);
		if (0x0020 < codepoint && codepoint < 0x007f) {
			result.push(String.fromCharCode(codepoint + 65248));
		} else {
			result.push(s);
		}
	}
	return result.join('');
}