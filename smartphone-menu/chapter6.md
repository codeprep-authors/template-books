# 小項目リスト中の各項目の装飾をしよう

このチャプターでは「大項目」に含まれる「小項目リスト」中にある各項目の装飾を行います。

## 準備

クラス名「submenu」を持つ要素の直下にあるli要素を装飾するために空欄を埋めてみましょう。

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
  position: relative;
}

.menu > li:first-child {
  border-top: 1px solid #393;
}

.menu > li > label {
  cursor: pointer;
  height: 30px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.submenu {
  display: none;
  list-style-type: none;
  padding-left: 0;
}

.menu > li > input:checked ~ .submenu {
  display: block;
}

${.submenu} > ${li} {

}
```

### hint

ある要素の直下にある要素のスタイルの表現をCSSで行う際、
「 要素名 >` その要素の直下の要素名 」 というように表記します。

### files

- [index.html](chapter6/section1/index.html)

## 背景色

クラス名「submenu」を持つ要素の直下にあるli要素の背景色を「#EFE」に変えてみましょう。

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
  position: relative;
}

.menu > li:first-child {
  border-top: 1px solid #393;
}

.menu > li > label {
  cursor: pointer;
  height: 30px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.submenu {
  display: none;
  list-style-type: none;
  padding-left: 0;
}

.menu > li > input:checked ~ .submenu {
  display: block;
}

.submenu > li {
  ${background-color}: ${#EFE};
}
```

### hint

背景色を設定するには、background-color属性を使用します。

### files

- [index.html](chapter6/section2/index.html)

## カーソルの種類

クラス名「submenu」を持つ要素の直下にあるli要素のカーソルの種類を「pointer」にしてみましょう。

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
  position: relative;
}

.menu > li:first-child {
  border-top: 1px solid #393;
}

.menu > li > label {
  cursor: pointer;
  height: 30px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.submenu {
  display: none;
  list-style-type: none;
  padding-left: 0;
}

.menu > li > input:checked ~ .submenu {
  display: block;
}

.submenu > li {
  background-color: #EFE;
  ${cursor}: ${pointer};
}
```

### hint

カーソルの種類を変えるには、 cursor という属性を使用します。  

一般に cursor 属性は、「マウスカーソルを乗せてもアイコンが変わらないが、クリックやドラッグをすると何らかの変化が起こるような要素」に対し、ユーザに「これはクリック・選択できる要素です」と知らせるために設定します。

### files

- [index.html](chapter6/section3/index.html)

## 線

クラス名「submenu」を持つ要素の直下にあるli要素の「上側」に、「太さ 1px, 色 #696」で「通常の線」を引いてみましょう。

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
  position: relative;
}

.menu > li:first-child {
  border-top: 1px solid #393;
}

.menu > li > label {
  cursor: pointer;
  height: 30px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.submenu {
  display: none;
  list-style-type: none;
  padding-left: 0;
}

.menu > li > input:checked ~ .submenu {
  display: block;
}

.submenu > li {
  background-color: #EFE;
  ${border-top}: ${1px} ${solid} ${#696};
  cursor: pointer;
}
```

### hint

上に線を引く際は、border-topという属性を使用します。  
また、値の部分には 指定したい線の色や太さ、破線の形式等の値を、空白を挟む形で以下のように記述することで指定することができます。  

border-top: 太さ 線の種類 色;

なお、代表的な線の種類として、solid(通常の枠線)、dotted(破線)があります。

### files

- [index.html](chapter6/section4/index.html)

## 準備

クラス名「submenu」を持つ要素の直下にあるli要素の、さらに直下にあるp要素を装飾するために空欄を埋めてみましょう。

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
  position: relative;
}

.menu > li:first-child {
  border-top: 1px solid #393;
}

.menu > li > label {
  cursor: pointer;
  height: 30px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.submenu {
  display: none;
  list-style-type: none;
  padding-left: 0;
}

.menu > li > input:checked ~ .submenu {
  display: block;
}

.submenu > li {
  background-color: #EFE;
  border-top: 1px solid #696;
  cursor: pointer;
}

${.submenu} > ${li} > ${p} {

}
```

### hint

ある要素の直下にある要素のスタイルの表現をCSSで行う際、
「 要素名 >` その要素の直下の要素名 」 というように表記します。  

また、このスタイル方法は

要素 >` その要素の直下の要素 >` その要素のさらに直下の要素

というように組み合わせることも可能です。

### files

- [index.html](chapter6/section5/index.html)

## 余白

p要素の余白を「0」にしてみましょう。

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
  position: relative;
}

.menu > li:first-child {
  border-top: 1px solid #393;
}

.menu > li > label {
  cursor: pointer;
  height: 30px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.submenu {
  display: none;
  list-style-type: none;
  padding-left: 0;
}

.menu > li > input:checked ~ .submenu {
  display: block;
}

.submenu > li {
  background-color: #EFE;
  border-top: 1px solid #696;
  cursor: pointer;
}

.submenu > li > p {
  ${margin}: ${0};
}
```

### hint

ある要素の余白を指定する際は margin という属性を使用します。

### files

- [index.html](chapter6/section6/index.html)

## 左側の隙間

p要素の左側の隙間を「25px」にしてみましょう。

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
  position: relative;
}

.menu > li:first-child {
  border-top: 1px solid #393;
}

.menu > li > label {
  cursor: pointer;
  height: 30px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.submenu {
  display: none;
  list-style-type: none;
  padding-left: 0;
}

.menu > li > input:checked ~ .submenu {
  display: block;
}

.submenu > li {
  background-color: #EFE;
  border-top: 1px solid #696;
  cursor: pointer;
}

.submenu > li > p {
  margin: 0;
  ${padding-left}: ${25px};
}
```

### hint

ある要素の左側の隙間を指定する際は padding-left という属性を使用します。

### files

- [index.html](chapter6/section7/index.html)

