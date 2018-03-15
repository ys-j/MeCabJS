class IDBPromise {
	constructor(dbname) {
		this.name = dbname;
	}
	open() {
		return new Promise((resolve, reject) => {
			let req = indexedDB.open(this.name);
			req.onsuccess = resolve;
			req.onerror = reject;
		})
	}
}


class Token {
	constructor(data) {
		this.name = '';
	}
}

class Lattice {
	constructor(input) {
		let chars = [...input];
		let paths = [];
		for (let i = 0; i < chars.length; i++) {
			for (let j = i; j < chars.length; j++) {
				let matches = lookup(chars.slice(i, j+1));
				for (let k = 0; k < matches.length; k++) {
					paths.push(matches[k]);
				}
			}
		}
		this.chars = chars;
		this.paths = paths;
	}
}

function lookup(chars) {
	let str = chars.join('');
	let rslt = [];
	EXAMPLE.forEach(v => {
		if (v.word === str) rslt.push(v);
	});
	return rslt;
}

let buttons = document.querySelectorAll('#dic > button');
let dicstatus = document.getElementById('dicstatus');

function registerDictionary() {
	buttons[0].disabled = true;
	buttons[1].disabled = true;
	dicstatus.value = '辞書の読み込みを開始しています';
	const WORKER = new Worker('setdic.js');
	WORKER.onmessage = e => {
		if (Number(e.data) === 100) {
			dicstatus.value = '辞書の読み込みが完了しました';
		} else {
			dicstatus.value = '辞書を読み込んでいます (' + e.data + '%)';
		}
	};
	WORKER.onerror = e => {
		dicstatus.value = 'エラーが発生しました';
	};
	WORKER.postMessage(null);
}

function deleteDictionary() {
	buttons[0].disabled = true;
	buttons[1].disabled = true;
	dicstatus.value = '辞書を削除しています';
	let req = indexedDB.deleteDatabase('ipadic');
	req.onsuccess = () => {
		buttons[0].disabled = false;
		buttons[1].disabled = false;
		dicstatus.value = '辞書を削除しました';
	};
}

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

(function () {

})