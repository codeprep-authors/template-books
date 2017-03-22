# 小項目リストの装飾をしよう

このチャプターでは「大項目」に含まれる「小項目リスト」の装飾を行います。

## 準備

「submenu」というクラス名を持つ要素を装飾するために空欄を埋めてみましょう。

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

${.submenu} {

}
```

### hint

CSSにおいて要素の編集を行う際、
IDは「#ID名 { ... }」クラスは「.クラス名 { ... }」タグは「タグ名{ ... }」というように記述します。  
IDやクラスの場合、HTMLでは「#」や「.」がつかないため最初は混乱しそうになりますが、CSSではこれらの記号を名前の前につけることを忘れないように注意して下さい。

### files

- [index.html](chapter5/section1/index.html)

## リストの点を消す

「submenu」というクラス名を持つ要素のリストの点を消してみましょう。

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
  ${list-style-type}: ${none};
}
```

### hint

リスト項目の点を消すには、list-style-type属性を使用し、その値としてnoneを設定します。

### files

- [index.html](chapter5/section2/index.html)

## 左側の隙間

「submenu」というクラス名を持つ要素の左側の隙間を「0」にしてみましょう。

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
  list-style-type: none;
  ${padding-left}: ${0};
}
```

### hint

ある要素の左側の隙間を指定する際は padding-left という属性を使用します。

### files

- [index.html](chapter5/section3/index.html)

## 要素を隠す

display属性を使用して「submenu」というクラス名を持つ要素を隠してみましょう。

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
  ${display}: ${none};
  list-style-type: none;
  padding-left: 0;
}
```

### hint

要素を隠す方法の一つとして、display属性があります。  
このdisplay属性の値を「none」に指定することで要素は見えなくなります。

### files

- [index.html](chapter5/section4/index.html)

## 準備 (1)

クラス名「menu」を持つ要素の直下にあるli要素の、さらに直下にあるinput要素の状態が「checked」の時のスタイルを指定してみましょう。

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

${.menu} > ${li} > ${input}:${checked} {

}
```

### hint

問題が複雑なので、分解して考えてみましょう。  

(1) クラス名「menu」を持つ要素 … .menu
(2) 直下にある … >`
(3) li要素 … li
(4) その直下にある … >`
(5) input要素 … input
(6) checkedの状態 … checked

以上を組み合わせると、以下のようになります。  

.menu >` li >` input:checked

これは、チェックボックスがチェックされている状態の要素を表します。

### files

- [index.html](chapter5/section5/index.html)

## 準備 (2)

前回のセクションで作成したスタイルに対して、更に「その後ろにある "submenu"という名前のクラス」という条件を追加してみましょう。

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

.menu > li > input:checked ~ ${.submenu} {

}
```

### hint

ある要素の後ろにある要素を選択する場合は、「~」という記号を使用します。  
例えば、以下の例でh2要素の後ろの要素(「p要素その2」と「p要素その3」)を指定する場合、

「div >` h2 ~ p」というように記述します。  

`<div>`
  `<h1>`h1要素`</h1>`
  `<p>`p要素その1`</p>`
  `<h2>`h2要素`</h2>`
  `<p>`p要素その2`</p>`
  `<p>`p要素その3`</p>`
`</div>`

### files

- [index.html](chapter5/section6/index.html)

## 要素を表示する

チェックボックスにチェックがつけられている「submenu」というクラス名の要素のdisplay属性の値を「block」にしてみましょう。

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
  ${display}: ${block};
}
```

### hint

このセクションをクリアすることにより、「submenu」というクラス名の要素がクリックされたら 小項目リストが開くようになります。  

`<span>`,`<a>`,`<img>`等 前後に改行が挟まれず、また一般に文中に登場する要素を inline要素、
`<div>``<p>`等 前後に改行が挟まれる要素を block要素と呼びます。  

inline要素は前述の通り文中に登場することを想定しているため、 高さや他の要素との隙間を指定することができません。  
しかし、このinline要素を CSSを利用して明示的に変更する方法が存在します。  

それが display という属性を用いた方法です。inlineの要素をblock要素に変更する場合、該当の要素のスタイルとして displayにblockという値を適用します。

### files

- [index.html](chapter5/section7/index.html)

