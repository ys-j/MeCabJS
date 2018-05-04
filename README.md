# MeCab on JavaScript (MeCabJS)
MeCabをJavaScriptでネイティブに再現しようとした結果です。

**＞＞[ページはこちらから](https://ys0115.github.io/MeCabJS/)＜＜**

推奨環境は Windows 10 x64 Firefox 最新版。Chromeではなぜか辞書の読み込みに時間がかかる上、結果的に失敗します。IE/Edgeからの利用は考慮していません。
- Promise
- Fetch API
- Web Workers API
- IndexedDB API

IndexedDBじゃなくてもよかったのですが、ウェブアプリっぽくしたかったので使ってみました。

辞書は NAIST-jdic (NAIST Japanese Dictionary) を一部改変したものを使用していますので、修正BSDライセンスが適用されます。[こちら](naist-jdic.copying.txt)をご覧ください。

また、圧縮済み辞書の展開に[zlib.js](https://github.com/imaya/zlib.js)（MITライセンス）を使用しています。