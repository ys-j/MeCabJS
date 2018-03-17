# MeCab on JavaScript (MeCabJS)
MeCabをJavaScriptでネイティブに再現しようとした結果です。

**＞＞[ページはこちらから](https://ys0115.github.io/MeCabJS/)＜＜**

Firefox または Chrome 最新版向け。HTML5/ES6 に対応しているブラウザじゃないと無理です。スマホだとスペックが足りないかもしれません。
- Promise
- Fetch API
- Web Workers API
- IndexedDB API

IndexedDB じゃなくてもよかったのですが、なんとなくウェブアプリっぽくしたかったので使ってみました。おかげで初回の設定で数分かかりますが、コンソールを使える方は好きな単語を追加できたりします。

辞書は NAIST-jdic (NAIST Japanese Dictionary) を一部改変したものを使用していますので、修正BSDライセンスが適用されます。詳細は[こちら](naist-jdic.copying.txt)をご覧ください。
