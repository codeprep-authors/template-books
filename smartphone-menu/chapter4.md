# ラベルの装飾をしよう

このチャプターではそれぞれの大項目の直下にある「ラベル」の説明を行い、さらにその装飾を行います。

## 準備

クラス名「menu」を持つ要素の直下にあるli要素の、さらに直下にある「label要素」を装飾するための準備をしてみましょう。

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
  border-top: 1px solid #393;
}

${.menu} > ${li} > ${label} {

}
```

### hint

ある要素の直下にある要素のスタイルの表現をCSSで行う際、
「 要素名 >` その要素の直下の要素名 」 というように表記します。  

また、このスタイル方法は

要素 >` その要素の直下の要素 >` その要素のさらに直下の要素

というように組み合わせることも可能です。

### files

- [index.html](chapter4/section1/index.html)

## カーソルの種類

label要素のカーソルの種類を「pointer」にしてみましょう。

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
  border-top: 1px solid #393;
}

.menu > li > label {
  ${cursor}: ${pointer};
}
```

### hint

カーソルの種類を変えるには、 cursor という属性を使用します。  

一般に cursor 属性は、「マウスカーソルを乗せてもアイコンが変わらないが、クリックやドラッグをすると何らかの変化が起こるような要素」に対し、ユーザに「これはクリック・選択できる要素です」と知らせるために設定します。

### files

- [index.html](chapter4/section2/index.html)

## 横幅

label要素の横幅を「100%」にしてみましょう。

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
  border-top: 1px solid #393;
}

.menu > li > label {
  cursor: pointer;
  ${width}: ${100%};
}
```

### hint

横幅を指定する際は width 属性を使用します。

### files

- [index.html](chapter4/section3/index.html)

## 高さ

label要素の高さを「30px」にしてみましょう。

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
  border-top: 1px solid #393;
}

.menu > li > label {
  cursor: pointer;
  ${height}: ${30px};
  width: 100%;
}
```

### hint

高さを指定する際は height 属性を使用します。

### files

- [index.html](chapter4/section4/index.html)

## 位置指定 (1)

label要素の位置属性 position を「absolute」にしてみましょう。

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
  border-top: 1px solid #393;
}

.menu > li > label {
  cursor: pointer;
  height: 30px;
  ${position}: ${absolute};
  width: 100%;
}
```

### hint

通常、要素の位置はHTMLの構造に沿って自動的に決定されますが、これを変更することも可能です。  

今回は absolute という属性を使用して 実際に位置を変更してみましょう。  
absolute属性を使用することで、他の要素の配置にとらわれない絶対的な位置を指定することが可能です。

### files

- [index.html](chapter4/section5/index.html)

## 位置指定 (2)

label要素の位置属性 top を「0」にしてみましょう。

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
  border-top: 1px solid #393;
}

.menu > li > label {
  cursor: pointer;
  height: 30px;
  position: absolute;
  ${top}: ${0};
  width: 100%;
}
```

### hint

position: absoluteを指定された要素では、top, bottom, right, left という属性を使用することができます。  
要素に有効な位置を割り当てるには top, bottomのうち一つ、 right, leftのうち一つ、計2つの属性を指定する必要があります。  

今回は top: 0 を指定します。これは、上から数えて0pxの場所、つまり上端 ということを意味しています。

### files

- [index.html](chapter4/section6/index.html)

## 位置指定 (3)

label要素の位置属性 left を「0」にしてみましょう。

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
  border-top: 1px solid #393;
}

.menu > li > label {
  cursor: pointer;
  height: 30px;
  ${left}: ${0};
  position: absolute;
  top: 0;
  width: 100%;
}
```

### hint

position: absoluteを指定された要素では、top, bottom, right, left という属性を使用することができます。  
要素に有効な位置を割り当てるには top, bottomのうち一つ、 right, leftのうち一つ、計2つの属性を指定する必要があります。  

今回は left: 0 を指定します。これは、左から数えて0pxの場所、つまり左端ということを意味しています。

### files

- [index.html](chapter4/section7/index.html)

## 位置指定 (4)

クラス名「menu」を持つ要素の直下にあるli要素の位置属性 position を「relative」にしてみましょう。

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
  ${position}: ${relative};
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
```

### hint

前回のセクションでは、ラベルが 思わぬ場所に移動してしまいました。  
これは labelが 「ページ全体」から相対的な位置を計算してしまったためです(つまり、ページ全体の左上からです)。  

これを修正するためには、クラス名「menu」を持つ要素の直下にあるli要素から計算して何px というように指定できる必要があります。  

これを実現するには、absolute属性を持つ要素の親要素の位置属性 positionに「relative」という値を指定する必要があります。  
今回の場合は、クラス名「menu」を持つ要素の直下にあるli要素の位置属性の値として relativeという値を追加します。

### files

- [index.html](chapter4/section8/index.html)

