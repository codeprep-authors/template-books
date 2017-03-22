# 大項目の装飾をしよう

このチャプターでは「大項目」となるリスト項目の装飾を行います。

## 準備

クラス名「menu」を持つ要素を装飾する準備をしてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 5px;
  text-align: center;
}

.box {
  border: 1px solid #000;
  height: 478px;
  width: 318px;
}

${.menu} {

}
```

### hint

CSSにおいて要素の編集を行う際、
IDは「#ID名 { ... }」クラスは「.クラス名 { ... }」タグは「タグ名{ ... }」というように記述します。  
IDやクラスの場合、HTMLでは「#」や「.」がつかないため最初は混乱しそうになりますが、CSSではこれらの記号を名前の前につけることを忘れないように注意して下さい。

### files

- [index.html](chapter3/section1/index.html)

## リスト項目の点を消す

クラス名「menu」を持つ要素のリストの点を消してみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 5px;
  text-align: center;
}

.box {
  border: 1px solid #000;
  height: 478px;
  width: 318px;
}

.menu {
  ${list-style-type}: ${none};
}
```

### hint

リスト項目の点を消すには、list-style-type属性を使用し、その値としてnoneを設定します。

### files

- [index.html](chapter3/section2/index.html)

## 余白

クラス名「menu」を持つ要素の余白を「0」にしてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 5px;
  text-align: center;
}

.box {
  border: 1px solid #000;
  height: 478px;
  width: 318px;
}

.menu {
  list-style-type: none;
  ${margin}: ${0};
}
```

### hint

ある要素と他の要素との間隔を指定する場合は margin という属性を使用します。

### files

- [index.html](chapter3/section3/index.html)

## 隙間

クラス名「menu」を持つ要素の隙間を「0」にしてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 5px;
  text-align: center;
}

.box {
  border: 1px solid #000;
  height: 478px;
  width: 318px;
}

.menu {
  list-style-type: none;
  margin: 0;
  ${padding}: ${0};
}
```

### hint

ある要素とその内側の要素との隙間を指定する場合は padding という属性を使用します。

### files

- [index.html](chapter3/section4/index.html)

## 準備

クラス名「menu」を持つ要素の直下にあるli要素を装飾するために空欄を埋めてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 5px;
  text-align: center;
}

.box {
  border: 1px solid #000;
  height: 478px;
  width: 318px;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

${.menu} > ${li} {

}
```

### hint

li要素は クラス名「menu」を持つ要素に対し、一階層だけ下になっています。  
この時、li要素は クラス名「menu」を持つ要素の「直下にある」と言います。  

ある要素の直下にある要素のスタイルの表現をCSSで行う際、
「 要素名 >` その要素の直下の要素名 」 というように表記します。

### files

- [index.html](chapter3/section5/index.html)

## 背景色

クラス名「menu」を持つ要素の直下にあるli要素の背景色を「#9B9」にしてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 5px;
  text-align: center;
}

.box {
  border: 1px solid #000;
  height: 478px;
  width: 318px;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  ${background-color}: ${#9B9};
}
```

### hint

背景色を設定するには、background-color属性を使用します。

### files

- [index.html](chapter3/section6/index.html)

## 線

クラス名「menu」を持つ要素の直下にあるli要素の「下側」に、「太さ 1px, 色 #393」で「通常の線」を引いてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 5px;
  text-align: center;
}

.box {
  border: 1px solid #000;
  height: 478px;
  width: 318px;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  background-color: #9B9;
  ${border-bottom}: ${1px} ${solid} ${#393};
}
```

### hint

下に線を引く際は、border-bottomという属性を使用します。  
また、値の部分には 指定したい線の色や太さ、破線の形式等の値を、空白を挟む形で以下のように記述することで指定することができます。  

border-bottom: 太さ 線の種類 色;

なお、代表的な線の種類として、solid(通常の枠線)、dotted(破線)があります。

### files

- [index.html](chapter3/section7/index.html)

## 文字の大きさ

クラス名「menu」を持つ要素の直下にあるli要素の文字の大きさを「13px」にしてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 5px;
  text-align: center;
}

.box {
  border: 1px solid #000;
  height: 478px;
  width: 318px;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  background-color: #9B9;
  border-bottom: 1px solid #393;
  ${font-size}: ${13px};
}
```

### hint

文字の大きさを指定する場合は font-size という属性を使用します。

### files

- [index.html](chapter3/section8/index.html)

## 文字の一行の高さ

クラス名「menu」を持つ要素の直下にあるli要素の文字が一行でとる高さを「30px」にしてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 5px;
  text-align: center;
}

.box {
  border: 1px solid #000;
  height: 478px;
  width: 318px;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  background-color: #9B9;
  border-bottom: 1px solid #393;
  font-size: 13px;
  ${line-height}: ${30px};
}
```

### hint

文字の一行の高さを設定するには、line-height属性を使用します。

### files

- [index.html](chapter3/section9/index.html)

## 準備

クラス名「menu」を持つ要素の直下にあるli要素のうち、一番最初の要素のみを装飾するために空欄を埋めてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 5px;
  text-align: center;
}

.box {
  border: 1px solid #000;
  height: 478px;
  width: 318px;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  background-color: #9B9;
  border-bottom: 1px solid #393;
  font-size: 13px;
  line-height: 30px;
}

${.menu} > ${li}:${first-child} {

}
```

### hint

ある要素の直下にある要素のうち、一番最初のもののみを修正する場合は、:first-childという属性を以下のように使用します。  

ある要素 >` 要素:first-child { ... }

### files

- [index.html](chapter3/section10/index.html)

## 線

クラス名「menu」を持つ要素の直下にあるli要素の「上側」に、「太さ 1px, 色 #393」で「通常の線」を引いてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 5px;
  text-align: center;
}

.box {
  border: 1px solid #000;
  height: 478px;
  width: 318px;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  background-color: #9B9;
  border-bottom: 1px solid #393;
  font-size: 13px;
  line-height: 30px;
}

.menu > li:first-child {
  ${border-top}: ${1px} ${solid} ${#393};
}
```

### hint

上に線を引く際は、border-topという属性を使用します。  
また、値の部分には 指定したい線の色や太さ、破線の形式等の値を、空白を挟む形で以下のように記述することで指定することができます。  

border-top: 太さ 線の種類 色;

なお、代表的な線の種類として、solid(通常の枠線)、dotted(破線)があります。

### files

- [index.html](chapter3/section11/index.html)

