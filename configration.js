const CONTEXT_TYPE = {
	10: {
		offset: 11,
		length: 3,
		0: {
			name: 'アウオ段',
			offset: 0,
			forms: ['*', 'ガル接続', 'ガル接続/無い', '仮定形', '仮定形/無い', '仮定縮約1', '仮定縮約1/無い', '仮定縮約2', '仮定縮約2/無い', '基本形', '基本形/無い', '体言接続', '体言接続/無い', '文語基本形', '文語基本形/無い', '未然ウ接続', '未然ウ接続/無い', '未然ヌ接続', '未然ヌ接続/無い', '命令e', '命令e/無い', '連用ゴザイ接続', '連用ゴザイ接続/無い', '連用タ接続', '連用タ接続/無い', '連用テ接続', '連用テ接続/無い']
		},
		1: {
			name: 'イ段',
			offset: 27,
			forms: ['ガル接続', '仮定形', '仮定縮約1', '仮定縮約2', '基本形', '体言接続', '文語基本形', '未然ウ接続', '未然ヌ接続', '命令e', '連用ゴザイ接続', '連用タ接続', '連用テ接続'],
		},
		2: {
			name: '不変化型',
			offset: 40,
			forms: ['基本形'],
		}
	},
	11: {
		offset: 52,
		length: 2,
		0: {
			name: 'アウオ段',
			offset: 0,
			forms: ['ガル接続', 'ガル接続/たらしい', 'ガル接続/臭い', '仮定形', '仮定形/たらしい', '仮定形/臭い', '仮定縮約1', '仮定縮約1/たらしい', '仮定縮約1/臭い', '仮定縮約2', '仮定縮約2/たらしい', '仮定縮約2/臭い', '基本形', '基本形/たらしい', '基本形/臭い', '体言接続', '体言接続/たらしい', '体言接続/臭い', '文語基本形', '文語基本形/たらしい', '文語基本形/臭い', '未然ウ接続', '未然ウ接続/たらしい', '未然ウ接続/臭い', '未然ヌ接続', '未然ヌ接続/たらしい', '未然ヌ接続/臭い', '命令e', '命令e/たらしい', '命令e/臭い', '連用ゴザイ接続', '連用ゴザイ接続/たらしい', '連用ゴザイ接続/臭い', '連用タ接続', '連用タ接続/たらしい', '連用タ接続/臭い', '連用テ接続', '連用テ接続/たらしい', '連用テ接続/臭い']
		},
		1: {
			name: 'イ段',
			offset: 38,
			forms: ['ガル接続', 'ガル接続/たらしい', '仮定形', '仮定形/たらしい', '仮定縮約1', '仮定縮約1/たらしい', '仮定縮約2', '仮定縮約2/たらしい', '基本形', '基本形/たらしい', '体言接続', '体言接続/たらしい', '文語基本形', '文語基本形/たらしい', '未然ウ接続', '未然ウ接続/たらしい', '未然ヌ接続', '未然ヌ接続/たらしい', '命令e', '命令e/たらしい', '連用ゴザイ接続', '連用ゴザイ接続/たらしい', '連用タ接続', '連用タ接続/たらしい', '連用テ接続', '連用テ接続/たらしい']
		},
	},
	12: {
		offset: 117,
		length: 2,
		0: {
			name: 'アウオ段',
			offset: 0,
			forms: ['ガル接続', 'ガル接続/難い', 'ガル接続/良い', '仮定形', '仮定形/難い', '仮定形/良い', '仮定縮約1', '仮定縮約1/難い', '仮定縮約1/良い', '仮定縮約2', '仮定縮約2/難い', '仮定縮約2/良い', '基本形/難い', '基本形/良い', '体言接続', '体言接続/難い', '体言接続/良い', '文語基本形', '文語基本形/難い', '文語基本形/良い', '未然ウ接続', '未然ウ接続/難い', '未然ウ接続/良い', '未然ヌ接続', '未然ヌ接続/難い', '未然ヌ接続/良い', '命令e', '命令e/難い', '命令e/良い', '連用ゴザイ接続', '連用ゴザイ接続/難い', '連用ゴザイ接続/良い', '連用タ接続', '連用タ接続/難い', '連用タ接続/良い', '連用テ接続', '連用テ接続/難い', '連用テ接続/良い']
		},
		1: {
			name: 'イ段',
			offset: 39,
			forms: ['ガル接続/欲しい', '仮定形/欲しい', '仮定縮約1/欲しい', '仮定縮約2/欲しい', '基本形/欲しい', '体言接続/欲しい', '文語基本形/欲しい', '未然ウ接続/欲しい', '未然ヌ接続/欲しい', '命令e/欲しい', '連用ゴザイ接続/欲しい', '連用タ接続/欲しい', '連用テ接続/欲しい']
		},
	},
	13: {
		offset: 169,
		length: 16,
		...['から', 'が', 'つ', 'で', 'と', 'に', 'にて', 'の', 'へ', 'より', 'を', 'ん', 'デ', 'ノ', 'ヘ', 'ヲ', '之']
	},
	14: {
		offset: 186,
		length: 2,
		...['っと', 'と']
	},
	15: {
		offset: 188,
		length: 89,
		...['じゃ', 'っちゅう', 'って', 'っていう', 'ってな', 'て', 'ていう', 'といいます', 'という', 'といった', 'といふ', 'とかいいます', 'とかいう', 'とかいふ', 'として', 'としましたら', 'としまして', 'とともに', 'と共に', 'にあたって', 'にあたり', 'にあたりまして', 'にあたります', 'にあたる', 'において', 'におきまして', 'における', 'にかけ', 'にかけて', 'にかけまして', 'にたいして', 'にたいしまして', 'にたいします', 'にたいする', 'について', 'につき', 'につきまして', 'につけ', 'につれ', 'につれて', 'にとって', 'にとり', 'にとりまして', 'にまつわります', 'にまつわる', 'によって', 'により', 'によりまして', 'によります', 'による', 'にわたって', 'にわたり', 'にわたりまして', 'にわたります', 'にわたる', 'に関し', 'に関して', 'に関しまして', 'に関します', 'に関する', 'に際し', 'に際して', 'に際しまして', 'に従い', 'に従いまして', 'に従います', 'に従う', 'に従って', 'に対し', 'に対して', 'に対しまして', 'に対します', 'に対する', 'に当たって', 'に当たり', 'に当たりまして', 'に当たります', 'に当たる', 'をめぐって', 'をめぐりまして', 'をめぐります', 'をめぐる', 'をもちまして', 'をもって', 'を以て', 'を通して', 'を通しまして', 'を通じ', 'を通じて', 'を通じまして']
	},
	16: {
		offset: 278,
		length: 8,
		...['こそ', 'さえ', 'しか', 'すら', 'ぞ', 'っきゃ', 'は', 'も', 'や']
	},
	17: {
		offset: 287,
		length: 31,
		...['かぁ', 'かい', 'かしら', 'け', 'さ', 'ぜ', 'ぞ', 'だって', 'っけ', 'てん', 'で', 'な', 'なー', 'なぁー', 'なァ', 'ね', 'ねー', 'ねん', 'の', 'のう', 'べ', 'もん', 'や', 'やら', 'よ', 'よー', 'よう', 'わ', 'わい', 'ん', 'ヨー', 'ワ']
	},
	18: {
		offset: 319,
		length: 27,
		...['および', 'から', 'からには', 'が', 'けども', 'けれど', 'けれども', 'さかい', 'し', 'たって', 'つつ', 'て', 'で', 'と', 'とも', 'ど', 'どころか', 'ども', 'ながら', 'なり', 'ので', 'のに', 'ば', 'ものの', 'や', 'やいなや', 'や否や', 'んで']
	},
	19: {
		offset: 347,
		length: 5,
		...['かな', 'けむ', 'に', 'にゃ', 'ん']
	},
	20: {
		offset: 352,
		length: 2,
		...['と', 'に']
	},
	21: {
		offset: 354,
		length: 28,
		...['かも', 'くらい', 'ぐらい', 'しも', 'じゃ', 'じゃあ', 'じゃァ', 'ずつ', 'だけ', 'だって', 'だに', 'でも', 'とも', 'なぞ', 'など', 'なり', 'なんか', 'なんぞ', 'なんて', 'のみ', 'ばかし', 'ばかり', 'ばっか', 'ばっかり', 'ほど', 'まで', 'やら', '程', '迄']
	},
	22: {
		offset: 383,
		length: 1,
		...['か']
	},
	23: {
		offset: 384,
		length: 8,
		...['たり', 'だの', 'だり', 'と', 'とか', 'なり', 'や', 'やら']
	},
	24: {
		offset: 392,
		length: 2,
		...['の', 'ノ']
	},
	25: {
		offset: 394,
		length: 22,
		0: {
			name: '下二・タ行',
			offset: 0,
			forms: ['仮定形/つ', '基本形/つ', '体言接続/つ', '未然形/つ', '命令yo/つ', '連用形/つ']
		},
		1: {
			name: '形容詞・イ段',
			offset: 6,
			forms: ['ガル接続/らしい',  'ガル接続/無い',  '仮定形/らしい',  '仮定形/無い',  '仮定縮約1/らしい',  '仮定縮約1/無い',  '仮定縮約2/らしい',  '仮定縮約2/無い',  '基本形/らしい',  '基本形/無い',  '体言接続/らしい',  '体言接続/無い',  '文語基本形/らしい',  '文語基本形/無い',  '未然ウ接続/らしい',  '未然ウ接続/無い',  '未然ヌ接続/らしい',  '未然ヌ接続/無い',  '命令e/らしい',  '命令e/無い',  '連用ゴザイ接続/らしい',  '連用ゴザイ接続/無い',  '連用タ接続/らしい',  '連用タ接続/無い',  '連用テ接続/らしい',  '連用テ接続/無い']
		},
		2: {
			name: '五段・ラ行アル',
			offset: 32,
			forms: ['仮定形/ある', '仮定縮約１/ある', '基本形/ある', '体言接続特殊/ある', '未然ウ接続/ある', '未然形/ある', '命令e/ある', '連用タ接続/ある', '連用形/ある']
		},
		3: {
			name: '五段・ラ行特殊',
			offset: 41,
			forms: ['仮定形/ござる', '仮定形/御座る', '仮定縮約1/ござる', '仮定縮約1/御座る', '基本形/ござる', '基本形/御座る', '未然ウ接続/ござる', '未然ウ接続/御座る', '未然形/ござる', '未然形/御座る', '未然特殊/ござる', '未然特殊/御座る', '命令e/ござる', '命令e/御座る', '命令i/ござる', '命令i/御座る', '連用タ接続/ござる', '連用タ接続/御座る', '連用形/ござる', '連用形/御座る']
		},
		4: {
			name: '特殊・ジャ',
			offset: 61,
			forms: ['基本形', '未然形', '連用形'],
		},
		5: {
			name: '特殊・タ',
			offset: 64,
			forms: ['仮定形/た', '仮定形/だ', '基本形/た', '基本形/だ', '未然形/た', '未然形/だ']
		},
		6: {
			name: '特殊・タイ',
			offset: 70,
			forms: ['ガル接続', '音便基本形', '仮定形', '仮定縮約1', '仮定縮約2', '基本形', '体言接続', '文語基本形', '未然ウ接続', '未然ヌ接続', '連用ゴザイ接続', '連用タ接続', '連用テ接続']
		},
		7: {
			name: '特殊・ダ',
			offset: 83,
			forms: ['仮定形', '基本形', '体言接続', '未然形', '命令e', '連用タ接続', '連用形']
		},
		8: {
			name: '特殊・デス',
			offset: 90,
			forms: ['基本形/っす', '基本形/です', '基本形/どす', '未然形/っす', '未然形/です', '未然形/どす', '連用形/っす', '連用形/です', '連用形/どす']
		},
		9: {
			name: '特殊・ナイ',
			offset: 99,
			forms: ['ガル接続', '音便基本形', '仮定形', '仮定縮約1', '仮定縮約2', '基本形', '体言接続', '文語基本形', '未然ウ接続', '未然ヌ接続', '命令e', '連用ゴザイ接続', '連用タ接続', '連用テ接続', '連用デ接続',]
		},
		10: {
			name: '特殊・ヌ',
			offset: 114,
			forms: ['仮定形', '基本形', '体言接続', '文語基本形', '連用ニ接続', '連用形']
		},
		11: {
			name: '特殊・マス',
			offset: 120,
			forms: ['仮定形/ます', '仮定形/やす', '基本形/ます', '基本形/やす', '未然ウ接続/ます', '未然ウ接続/やす', '未然形/ます', '未然形/やす', '命令e/ます', '命令e/やす', '命令i/ます', '命令i/やす', '連用形/ます', '連用形/やす']
		},
		12: {
			name: '特殊・ヤ',
			offset: 134,
			forms: ['基本形', '未然形', '連用形']
		},
		13: {
			name: '不変化型',
			offset: 137,
			forms: ['う', 'じ', 'じゃん', 'じゃン', 'ぬ', 'ひん', 'へん', 'まい', 'やん', 'ん']
		},
		14: {
			name: '文語・キ',
			offset: 147,
			forms: ['基本形', '体言接続', '命令e']
		},
		15: {
			name: '文語・ケリ',
			offset: 150,
			forms: ['基本形', '体言接続']
		},
		16: {
			name: '文語・ゴトシ',
			offset: 152,
			forms: ['基本形/ごとし', '基本形/如し', '体言接続/ごとし', '体言接続/如し', '連用形/ごとし', '連用形/如し']
		},
		17: {
			name: '文語・タリ/ナリ',
			offset: 158,
			forms: ['仮定形/たり', '仮定形/なり', '基本形/たり', '基本形/なり', '体言接続/たり', '体言接続/なり', '未然形/たり', '未然形/なり', '命令e/たり', '命令e/なり']
		},
		18: {
			name: '文語・ベシ',
			offset: 168,
			forms: ['仮定形', '基本形', '体言接続', '未然形', '連用形']
		},
		19: {
			name: '文語・マジ',
			offset: 173,
			forms: ['仮定形', '基本形', '体言接続', '連用形']
		},
		20: {
			name: '文語・リ',
			offset: 177,
			forms: ['基本形', '体言接続']
		},
		21: {
			name: '文語・ル',
			offset: 179,
			forms: ['仮定形', '基本形', '体言接続', '未然形', '命令e', '命令yo', '連用形']
		},
	},
	26: {
		offset: 580,
		length: 2,
		...['*', 'および']
	},
	31: {
		offset: 586,
		length: 29,
		0: {
			name: 'カ変',
			offset: 0,
			forms: ['仮定形/くる', '仮定縮約/くる', '基本形/くる', '体言接続特殊1/くる', '体言接続特殊2/くる', '未然ウ接続/くる', '未然形/くる', '命令i/くる', '命令yo/くる', '連用形/くる', '仮定形/来る', '仮定縮約1/来る', '基本形/来る', '体言接続特殊1/来る', '体言接続特殊2/来る', '未然ウ接続/来る', '未然形/来る', '命令i/来る', '命令yo/来る', '連用形/来る']
		},
		1: {
			name: 'サ変',
			offset: 20,
			forms: ['仮定形/－する', '仮定縮約/－する', '基本形/－する', '文語基本形/－する', '未然ウ接続/－する', '未然レル接続/－する', '未然形/－する', '命令ro/－する', '命令yo/－する', '仮定形/－ずる', '仮定縮約/－ずる', '基本形/－ずる', '文語基本形/－ずる', '未然ウ接続/－ずる', '未然形/－ずる', '命令yo/－ずる', '仮定形/する', '仮定縮約/する', '基本形/する', '体言接続特殊1/する', '体言接続特殊2/する', '文語基本形/する', '未然ウ接続/する', '未然ヌ接続/する', '未然レル接続/する', '未然形/する', '命令i/する', '命令ro/する', '命令yo/する', '連用形/する']
		},
		2: {
			name: 'ラ変',
			offset: 50,
			forms: ['仮定形', '基本形', '体言接続', '未然形', '命令e', '連用形']
		},
		3: {
			name: '一段',
			offset: 56,
			forms: ['*', '仮定形', '仮定縮約', '基本形', '基本形-促音便', '体言接続特殊', '未然ウ接続', '未然形', '命令ro', '命令yo', '連用形', '仮定形/くれる', '仮定縮約/くれる', '基本形/くれる', '未然ウ接続/くれる', '未然形/くれる', '未然特殊/くれる', '命令e/くれる', '命令ro/くれる', '命令yo/くれる', '連用形/くれる', '仮定形/得る', '基本形/得る']
		},
		4: {
			name: '下二・カ行',
			offset: 79,
			forms: ['仮定形', '基本形', '体言接続', '未然形', '命令yo', '連用形']
		},
		5: {
			name: '下二・ガ行',
			offset: 85,
			forms: ['仮定形', '基本形', '体言接続', '未然形', '命令yo', '連用形']
		},
		6: {
			name: '下二・ダ行',
			offset: 91,
			forms: ['仮定形', '基本形', '体言接続', '未然形', '命令yo', '連用形']
		},
		7: {
			name: '下二・ハ行',
			offset: 97,
			forms: ['仮定形', '基本形', '体言接続', '未然形', '命令yo', '連用形']
		},
		8: {
			name: '下二・マ行',
			offset: 103,
			forms: ['仮定形', '基本形', '体言接続', '未然形', '命令yo', '連用形']
		},
		9: {
			name: '下二・得',
			offset: 109,
			forms: ['仮定形', '基本形', '体言接続', '未然ウ接続', '未然形', '命令yo', '連用形']
		},
		10: {
			name: '五段・カ行イ音便',
			offset: 116,
			forms: ['*', '仮定形', '仮定形/行く', '仮定縮約', '仮定縮約/行く', '基本形', '基本形/行く', '未然ウ接続', '未然ウ接続/行く', '未然形', '未然形/行く', '命令e', '命令e/行く', '連用タ接続', '連用タ接続/行く', '連用形', '連用形/行く']
		},
		11: {
			name: '五段・カ行促音便',
			offset: 133,
			forms: ['仮定形', '仮定形/行く', '仮定縮約', '仮定縮約/行く', '基本形', '基本形/行く', '未然ウ接続', '未然ウ接続/行く', '未然形', '未然形/行く', '命令e', '命令e/行く', '連用タ接続', '連用タ接続/行く', '連用形', '連用形/行く']
		},
		12: {
			name: '五段・カ行促音便ユク',
			offset: 149,
			forms: ['仮定形', '仮定形/行く', '仮定縮約', '仮定縮約/行く', '基本形', '基本形/行く', '未然ウ接続', '未然ウ接続/行く', '未然形', '未然形/行く', '命令e', '命令e/行く', '連用形', '連用形/行く']
		},
		13: {
			name: '五段・ガ行',
			offset: 163,
			forms: ['*', '仮定形', '仮定縮約', '基本形', '未然ウ接続', '未然形', '命令e', '連用タ接続', '連用形']
		},
		14: {
			name: '五段・サ行',
			offset: 172,
			forms: ['*', '仮定形', '仮定縮約', '基本形', '未然ウ接続', '未然形', '命令e', '連用形']
		},
		15: {
			name: '五段・タ行',
			offset: 180,
			forms: ['*', '仮定形', '仮定縮約', '基本形', '未然ウ接続', '未然形', '命令e', '連用タ接続', '連用形']
		},
		16: {
			name: '五段・ナ行',
			offset: 189,
			forms: ['仮定形', '仮定縮約', '基本形', '未然ウ接続', '未然形', '命令e', '連用タ接続', '連用形']
		},
		17: {
			name: '五段・バ行',
			offset: 197,
			forms: ['*', '仮定形', '仮定縮約', '基本形', '未然ウ接続', '未然形', '命令e', '連用タ接続', '連用形']
		},
		18: {
			name: '五段・マ行',
			offset: 206,
			forms: ['*', '仮定形', '仮定縮約', '基本形', '未然ウ接続', '未然形', '命令e', '連用タ接続', '連用形']
		},
		19: {
			name: '五段・ラ行',
			offset: 215,
			forms: ['*', '*/する', '仮定形', '仮定形/する', '仮定縮約', '仮定縮約/する', '基本形', '基本形/する', '体言接続特殊1', '体言接続特殊1/する', '体言接続特殊2', '体言接続特殊2/する', '未然ウ接続', '未然ウ接続/する', '未然形', '未然形/する', '未然特殊', '未然特殊/する', '命令e', '命令e/する', '連用タ接続', '連用タ接続/する', '連用形', '連用形/する']
		},
		20: {
			name: '五段・ラ行特殊',
			offset: 239,
			forms: ['*', '仮定形', '仮定縮約', '基本形', '未然ウ接続', '未然形', '未然特殊', '命令e', '命令i', '連用タ接続', '連用形']
		},
		21: {
			name: '五段・ワ行ウ音便',
			offset: 249,
			forms: ['*', '仮定形', '仮定形/言う', '基本形', '基本形/言う', '未然ウ接続', '未然ウ接続/言う', '未然形', '未然形/言う', '命令e', '命令e/言う', '連用タ接続', '連用タ接続/言う', '連用形', '連用形/言う']
		},
		22: {
			name: '五段・ワ行促音便',
			offset: 264,
			forms: ['*', '*/言う', '*/行う', '仮定縮約', '仮定縮約/言う', '仮定縮約/行う', '基本形', '基本形/言う', '基本形/行う', '未然ウ接続', '未然ウ接続/言う', '未然ウ接続/行う', '未然形', '未然形/言う', '未然形/行う', '命令e', '命令e/言う', '命令e/行う', '連用タ接続', '連用タ接続/言う', '連用タ接続/行う', '連用形', '連用形/言う', '連用形/行う']
		},
		23: {
			name: '四段・サ行',
			offset: 286,
			forms: ['仮定形', '基本形', '未然形', '命令e', '連用形']
		},
		24: {
			name: '四段・タ行',
			offset: 291,
			forms: ['仮定形', '基本形', '未然形', '命令e', '連用形']
		},
		25: {
			name: '四段・ハ行',
			offset: 296,
			forms: ['仮定形', '基本形', '未然形', '命令e', '連用形']
		},
		26: {
			name: '四段・バ行',
			offset: 301,
			forms: ['仮定形', '基本形', '未然形', '命令e', '連用形']
		},
		27: {
			name: '上二・ダ行',
			offset: 306,
			forms: ['仮定形', '基本形', '現代基本形', '体言接続', '未然形', '命令yo', '連用形']
		},
		28: {
			name: '上二・ハ行',
			offset: 313,
			forms: ['仮定形', '基本形', '体言接続', '未然形', '命令yo', '連用形']
		}
	},
	32: {
		offset: 905,
		length: 3,
		0: {
			name: '一段',
			offset: 0,
			forms: ['仮定形', '仮定縮約', '基本形', '基本形-促音便', '体言接続特殊', '未然ウ接続', '未然形', '命令ro', '命令yo', '連用形']
		},
		1: {
			name: '五段・サ行',
			offset: 10,
			forms: ['仮定形', '仮定縮約', '基本形', '未然ウ接続', '未然形', '命令e', '連用形']
		},
		2: {
			name: '五段・ラ行',
			offset: 17,
			forms: ['仮定形', '仮定縮約', '基本形', '体言接続特殊1', '体言接続特殊2', '未然ウ接続', '未然形', '未然特殊', '命令e', '連用タ接続', '連用形']
		},
	},
	33: {
		offset: 933,
		length: 16,
		0: {
			name: 'カ変',
			offset: 0,
			forms: ['仮定形/くる', '仮定縮約/くる', '基本形/くる', '体言接続特殊1/くる', '体言接続特殊2/くる', '未然ウ接続/くる', '未然形/くる', '命令i/くる', '命令yo/くる', '連用形/くる', '仮定形/来る', '仮定縮約1/来る', '基本形/来る', '体言接続特殊1/来る', '体言接続特殊2/来る', '未然ウ接続/来る', '未然形/来る', '命令i/来る', '命令yo/来る', '連用形/来る']
		},
		1: {
			name: '一段',
			offset: 20,
			forms: ['*', '仮定形', '仮定形/る', '仮定縮約', '仮定縮約', '基本形', '基本形/る', '基本形-促音便', '基本形-促音便/る', '体言接続特殊', '体言接続特殊/る', '未然ウ接続', '未然ウ接続/る', '未然形', '命令ro', '命令ro/る', '命令yo', '命令yo/る', '連用形', '仮定形/くれる', '仮定縮約/くれる', '基本形/くれる', '未然ウ接続/くれる', '未然形/くれる', '未然特殊/くれる', '命令e/くれる', '命令ro/くれる', '命令yo/くれる', '連用形/くれる', '仮定形/得る', '基本形/得る']
		},
		2: {
			name: '五段・カ行イ音便',
			offset: 51,
			forms: ['*', '仮定形', '仮定形/おく', '仮定形/続く', '仮定形/抜く', '仮定縮約', '仮定縮約/おく', '仮定縮約/続く', '仮定縮約/抜く', '基本形', '基本形/おく', '基本形/続く', '基本形/抜く', '未然ウ接続', '未然ウ接続/おく', '未然ウ接続/続く', '未然ウ接続/抜く', '未然形/*', '未然形/おく', '未然形/続く', '未然形/抜く', '命令e', '命令e/おく', '命令e/続く', '命令e/抜く', '連用タ接続', '連用タ接続/おく', '連用タ接続/続く', '連用タ接続/抜く', '連用形', '連用形/おく', '連用形/続く', '連用形/抜く']
		},
		3: {
			name: '五段・カ行促音便',
			offset: 84,
			forms: ['仮定形', '仮定形/いく', '仮定形/く', '仮定形/行く', '仮定縮約', '仮定縮約/いく', '仮定縮約/く', '仮定縮約/行く', '基本形', '基本形/いく', '基本形/く', '基本形/行く', '未然ウ接続', '未然ウ接続/いく', '未然ウ接続/く', '未然ウ接続/行く', '未然形', '未然形/いく', '未然形/く', '未然形/行く', '命令e', '命令e/いく', '命令e/く', '命令e/行く', '連用タ接続', '連用タ接続/いく', '連用タ接続/く', '連用タ接続/行く', '連用形', '連用形/いく', '連用形/く', '連用形/行く']
		},
		4: {
			name: '五段・カ行促音便ユク',
			offset: 116,
			forms: ['仮定形/ゆく','仮定形/行く','仮定縮約/ゆく','仮定縮約/行く','基本形/ゆく','基本形/行く','未然ウ接続/ゆく','未然ウ接続/行く','未然形/ゆく','未然形/行く','命令e/ゆく','命令e/行く','連用形/ゆく','連用形/行く']
		},
		5: {
			name: '五段・ガ行',
			offset: 130,
			forms: ['仮定形', '仮定縮約', '未然ウ接続', '未然形', '命令e', '連用タ接続', '連用形']
		},
		6: {
			name: '五段・サ行',
			offset: 137,
			forms: ['*','*/尽くす','仮定形','仮定形/出す','仮定形/尽くす','仮定形/直す','仮定縮約','仮定縮約/出す','仮定縮約/尽くす','仮定縮約/直す','基本形/出す','基本形/尽くす','基本形/直す','未然ウ接続','未然ウ接続/出す','未然ウ接続/尽くす','未然ウ接続/直す','未然形','未然形/出す','未然形/尽くす','未然形/直す','命令e','命令e/出す','命令e/尽くす','命令e/直す','連用形','連用形/出す','連用形/尽くす','連用形/直す']
		},
		7: {
			name: '五段・タ行',
			offset: 166,
			forms: ['*', '仮定形', '仮定縮約', '未然ウ接続', '未然形', '命令e', '連用タ接続', '連用形']
		},
		8: {
			name: '五段・ナ行',
			offset: 174,
			forms: ['*', '仮定形', '仮定縮約', '未然ウ接続', '未然形', '命令e', '連用タ接続', '連用形']
		},
		9: {
			name: '五段・バ行',
			offset: 182,
			forms: ['仮定形', '仮定縮約', '未然ウ接続', '未然形', '命令e', '連用タ接続', '連用形']
		},
		10: {
			name: '五段・マ行',
			offset: 189,
			forms: ['*','仮定形','仮定形/込む','仮定縮約','仮定縮約/込む','基本形/込む','未然ウ接続','未然ウ接続/込む','未然形','未然形/込む','命令e','命令e/込む','連用タ接続','連用タ接続/込む','連用形','連用形/込む']
		},
		11: {
			name: '五段・ラ行',
			offset: 205,
			forms: ['*', '*/切る', '仮定形', '仮定形/ある', '仮定形/おる', '仮定形/かかる', '仮定形/きる', '仮定形/なる', '仮定形/まいる', '仮定形/まわる', '仮定形/やる', '仮定形/回る', '仮定形/参る', '仮定形/終わる', '仮定形/切る', '仮定縮約', '仮定縮約/ある', '仮定縮約/おる', '仮定縮約/かかる', '仮定縮約/きる', '仮定縮約/なる', '仮定縮約/まいる', '仮定縮約/まわる', '仮定縮約/やる', '仮定縮約/回る', '仮定縮約/参る', '仮定縮約/終わる', '仮定縮約/切る', '基本形', '基本形/ある', '基本形/おる', '基本形/かかる', '基本形/きる', '基本形/なる', '基本形/まいる', '基本形/まわる', '基本形/やる', '基本形/回る', '基本形/参る', '基本形/終わる', '基本形/切る', '体言接続特殊', '体言接続特殊/ある', '体言接続特殊/おる', '体言接続特殊/かかる', '体言接続特殊/きる', '体言接続特殊/なる', '体言接続特殊/まいる', '体言接続特殊/まわる', '体言接続特殊/やる', '体言接続特殊/回る', '体言接続特殊/参る', '体言接続特殊/終わる', '体言接続特殊/切る', '体言接続特殊２', '体言接続特殊２/ある', '体言接続特殊２/おる', '体言接続特殊２/かかる', '体言接続特殊２/きる', '体言接続特殊２/なる', '体言接続特殊２/まいる', '体言接続特殊２/まわる', '体言接続特殊２/やる', '体言接続特殊２/回る', '体言接続特殊２/参る', '体言接続特殊２/終わる', '体言接続特殊２/切る', '未然ウ接続', '未然ウ接続/ある', '未然ウ接続/おる', '未然ウ接続/かかる', '未然ウ接続/きる', '未然ウ接続/なる', '未然ウ接続/まいる', '未然ウ接続/まわる', '未然ウ接続/やる', '未然ウ接続/回る', '未然ウ接続/参る', '未然ウ接続/終わる', '未然ウ接続/切る', '未然形', '未然形/ある', '未然形/おる', '未然形/かかる', '未然形/きる', '未然形/なる', '未然形/まいる', '未然形/まわる', '未然形/やる', '未然形/回る', '未然形/参る', '未然形/終わる', '未然形/切る', '未然特殊', '未然特殊/ある', '未然特殊/おる', '未然特殊/かかる', '未然特殊/きる', '未然特殊/なる', '未然特殊/まいる', '未然特殊/まわる', '未然特殊/やる', '未然特殊/回る', '未然特殊/参る', '未然特殊/終わる', '未然特殊/切る', '命令e', '命令e/ある', '命令e/おる', '命令e/かかる', '命令e/きる', '命令e/なる', '命令e/まいる', '命令e/まわる', '命令e/やる', '命令e/回る', '命令e/参る', '命令e/終わる', '命令e/切る', '連用タ接続', '連用タ接続/ある', '連用タ接続/おる', '連用タ接続/かかる', '連用タ接続/きる', '連用タ接続/なる', '連用タ接続/まいる', '連用タ接続/まわる', '連用タ接続/やる', '連用タ接続/回る', '連用タ接続/参る', '連用タ接続/終わる', '連用タ接続/切る', '連用形', '連用形/ある', '連用形/おる', '連用形/かかる', '連用形/きる', '連用形/なる', '連用形/まいる', '連用形/まわる', '連用形/やる', '連用形/回る', '連用形/参る', '連用形/終わる', '連用形/切る']
		},
		12: {
			name: '五段・ラ行特殊',
			offset: 350,
			forms: ['仮定形/なさる', '仮定形/らっしゃる', '仮定形/下さる', '仮定縮約/なさる', '仮定縮約/らっしゃる', '仮定縮約/下さる', '基本形/なさる', '基本形/らっしゃる', '基本形/下さる', '未然ウ接続/なさる', '未然ウ接続/らっしゃる', '未然ウ接続/下さる', '未然形/なさる', '未然形/らっしゃる', '未然形/下さる', '未然特殊/なさる', '未然特殊/らっしゃる', '未然特殊/下さる', '命令e/なさる', '命令e/らっしゃる', '命令e/下さる', '命令i/なさる', '命令i/らっしゃる', '命令i/下さる', '連用タ接続/なさる', '連用タ接続/らっしゃる', '連用タ接続/下さる', '連用形/なさる', '連用形/らっしゃる', '連用形/下さる']
		},
		13: {
			name: '五段・ワ行ウ音便',
			offset: 380,
			forms: ['*', '仮定形', '未然ウ接続', '未然形', '命令e', '連用タ接続', '連用形']
		},
		14: {
			name: '五段・ワ行促音便',
			offset: 387,
			forms: ['*', '仮定形', '仮定形/しまう', '仮定形/もらう', '仮定形/合う', '基本形', '基本形/しまう', '基本形/もらう', '基本形/合う', '未然ウ接続', '未然ウ接続/しまう', '未然ウ接続/もらう', '未然ウ接続/合う', '未然形', '未然形/しまう', '未然形/もらう', '未然形/合う', '命令e', '命令e/しまう', '命令e/もらう', '命令e/合う', '連用タ接続', '連用タ接続/しまう', '連用タ接続/もらう', '連用タ接続/合う', '連用形', '連用形/しまう', '連用形/もらう', '連用形/合う']
		},
		15: {
			name: '四段・ハ行',
			offset: 416,
			forms: ['仮定形', '基本形', '未然形', '命令e', '連用形']
		}
	}
};
(function () {
	let buttons = document.getElementsByTagName('button');
	let overlay = document.getElementById('overlay');
	let addword = document.forms.addword;
	let unknown = document.forms.unknown;
	
	overlay.hidden = false;

	buttons[2].onclick = e => {
		overlay.hidden = false;
	}
	buttons[6].onclick = e => {
		overlay.hidden = true;
	};
	
	// addword
	addword.pos.innerHTML = POSID.map((v, i) => '<option value=' + i + '>' + v.join(' - ')).join('');
	addword.pos.options[0].selected = true;
	addword.pos.onchange = e => {
		let v = Number(addword.pos.value);
		if (0 <= v && v <= 9) {
			addword.ctype.required = false;
			addword.ctype.innerHTML = '<option value=0 selected>';
			addword.cform.required = false;
			addword.cform.innerHTML = '<option value=1 selected>';
			addword.base.required = false;
		} else if (10 <= v && v <= 12 || v === 25 || 31 <= v && v <= 33) {
			let observer = new MutationObserver(typeChanged)
			observer.observe(addword.ctype, { childList: true });
			addword.ctype.onchange = typeChanged;
			addword.ctype.required = true;
			addword.ctype.innerHTML = Array.from(CONTEXT_TYPE[v]).map((o, i) => '<option value=' + (CONTEXT_TYPE[v].offset + o.offset - v) + '>' + o.name).join('');
			addword.ctype.options[0].selected = true;
			addword.cform.required = true;
			addword.base.required = true;
			function typeChanged() {
				observer.disconnect();
				let option = CONTEXT_TYPE[v][addword.ctype.selectedIndex];
				addword.cform.innerHTML = option.forms.map((t, i) => '<option value=' + i + '>' + t).join('');
				addword.cform.options[0].selected = true;
			}
		} else if (13 <= v && v <= 24 || v === 26) {
			addword.ctype.required = false;
			addword.ctype.innerHTML = '<option value=0 selected>';
			addword.cform.required = true;
			addword.cform.innerHTML = Array.from(CONTEXT_TYPE[v]).map((t, i) => '<option value=' + (CONTEXT_TYPE[v].offset + i - v) + '>' + t).join('');
			addword.cform.options[0].selected = true;
			addword.base.required = false;
		} else if (27 <= v && v <= 30) {
			addword.ctype.required = false;
			addword.ctype.innerHTML = '<option value=0 selected>';
			addword.cform.required = false;
			addword.cform.innerHTML = '<option value=555 selected>';
			addword.base.required = false;
		} else if (34 <= v && v <= 62) {
			addword.ctype.required = false;
			addword.ctype.innerHTML = '<option value=0 selected>';
			addword.cform.required = false;
			addword.cform.innerHTML = '<option value=1320 selected>';
			addword.base.required = false;
		} else if (v === 63) {
			addword.ctype.required = false;
			addword.ctype.innerHTML = '<option value=0 selected>';
			addword.cform.required = true;
			addword.cform.innerHTML = '<option value=1319 selected>具体的<option value=1327>抽象的（もの/こと/とき など）';
			addword.base.required = false;
		} else {
			addword.ctype.required = false;
			addword.ctype.innerHTML = '<option value=0 selected>';
			addword.cform.required = false;
			addword.cform.innerHTML = '<option value=1327 selected>';
			addword.base.required = false;
		}
	};

	addword.onsubmit = e => {
		let word = addword.word.value, cost = Number(addword.cost.value);
		let pos = Number(addword.pos.value), ctype = Number(addword.ctype.value), cform = Number(addword.cform.value);
		let base = addword.base.value, orth = addword.orth.value, pron = addword.pron.value;
		let id = pos + ctype + cform;

		let token = {
			word: word,
			id: id,
			cost: cost,
			pos: pos,
		};
		let ctypeText = addword.ctype.options[addword.ctype.selectedIndex].text;
		let cformText = addword.cform.options[addword.cform.selectedIndex].text;
		if (ctypeText) token.cjg = [ctypeText.split('/')[0], cformText && cformText !== '*' ? cformText : ''];
		if (base && base !== word) token.base = base;
		if (orth && orth !== word) token.orth = orth;
		if (pron && pron !== orth && pron !== word) token.pron = pron;
		token.note = addword.note.value;

		let confirmed = confirm('この単語を追加しますか？\n\n' + (() => {
			let str = '';
			for (let k in token) str += k + ': ' + token[k] + '\n';
			return str;
		})());
		if (confirmed) {
			new Promise((resolve, reject) => {
				indexedDB.open(DIC_NAME).onsuccess = e => {
					let db = e.target.result, dictionary;
					try {
						dictionary = db.transaction(['dictionary'], 'readwrite').objectStore('dictionary');
					} catch(e) {
						reject('辞書が見つかりません');
					}
					let req = dictionary.put(token);
					req.onsuccess = e => resolve('「' + word + '」を辞書に追加しました');
					req.onerror = e => reject('辞書に追加できませんでした');
				};
			}).then(msg => alert(msg), msg => alert(msg));
		}
		return false;
	};

	// unknown
	unknown.kind.innerHTML = UNKNOWN_DEFINITION.map(v => '<option>' + v.name).join('');
	unknown.kind.options[0].disabled = true;
	unknown.kind.onchange = e => {
		let index = unknown.kind.options.selectedIndex;
		unknown.invoke.value = UNKNOWN_DEFINITION[index].invoke.toString();
		unknown.regexp.value = UNKNOWN_DEFINITION[index].regexp;
	};
	unknown.onsubmit = e => {
		let index = unknown.kind.options.selectedIndex;
		if (index) {
			let confirmed = confirm(
				'未知語処理を変更しますか？\n\n'
				+ unknown.kind.value + '\n'
				+ unknown.invoke[Number(unknown.invoke.value === 'true')].nextSibling.textContent + '\n'
				+ unknown.regexp.value
			);
			if (confirmed) {
				UNKNOWN_DEFINITION[index] = {
					name: unknown.kind.options[index].text,
					invoke: unknown.invoke.value === 'true',
					regexp: unknown.regexp.value,
				};
				localStorage.setItem(UNKNOWN_DEFINITION_NAME, JSON.stringify(UNKNOWN_DEFINITION));
				if (confirm('未知語処理を変更しました\n変更を反映するにページを更新しますか？')) location.reload();
			}
		} else {
			alert(unknown.kind.options[index].text + 'は変更できません');
		}
		return false;
	};
})();