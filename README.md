# MeCab on JavaScript (MeCabJS)
MeCabをJavaScriptでネイティブに再現しようとした結果です。

**＞＞[ページはこちらから](https://ys-j.github.io/MeCabJS/)＜＜**

推奨環境は Firefox/Chrome/Edge 最新版。IEからの利用は考慮していません。
- Fetch API
- Web Workers API
- IndexedDB API

辞書は NAIST-jdic (NAIST Japanese Dictionary) を一部改変したものを使用していますので、修正BSDライセンスが適用されます。[こちら](naist-jdic.copying.txt)をご覧ください。

また、圧縮済み辞書の展開に[zlib.js](https://github.com/imaya/zlib.js)（MITライセンス）を使用しています。
