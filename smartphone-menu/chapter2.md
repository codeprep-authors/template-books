# 全体の装飾

このチャプターではページ全体の中で大きく二つに分けられる要素として、h1要素 及びクラス名「box」を持つ要素の装飾を行います。

## 準備

h1要素を装飾するために空欄を埋めてみましょう。

### main(main.css)

```
@charset "UTF-8";

${h1} {

}
```

### hint

CSSにおいて要素の編集を行う際、
IDは「#ID名 { ... }」クラスは「.クラス名 { ... }」タグは「タグ名{ ... }」というように記述します。  
IDやクラスの場合、HTMLでは「#」や「.」がつかないため最初は混乱しそうになりますが、CSSではこれらの記号を名前の前につけることを忘れないように注意して下さい。

### files

- [index.html](chapter2/section1/index.html)

## 文字の大きさ

h1要素 の文字の大きさを「20px」にしてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  ${font-size}: ${20px};
}
```

### hint

文字の大きさを指定する場合は font-size という属性を使用します。

### files

- [index.html](chapter2/section2/index.html)

## 文字の一行の高さ

h1要素の要素の文字が一行でとる高さを「30px」にしてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  ${line-height}: ${30px};
}
```

### hint

文字の一行の高さを設定するには、line-height属性を使用します。

### files

- [index.html](chapter2/section3/index.html)

## テキストの中央配置

h1要素 の文字を中央に配置してみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  ${text-align}: ${center};
}
```

### hint

テキストを横中央に揃えるには、text-align 属性を使用し、その値としてcenterを設定します。

### files

- [index.html](chapter2/section4/index.html)

## 余白

h1要素 の余白を「5px」にしてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  ${margin}: ${5px};
  text-align: center;
}
```

### hint

ある要素と他の要素との間隔を指定する場合は margin という属性を使用します。

### files

- [index.html](chapter2/section5/index.html)

## 準備

クラス名「box」を持つ要素を装飾するために空欄を埋めてみましょう。

### main(main.css)

```
@charset "UTF-8";

h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 5px;
  text-align: center;
}

${.box} {

}
```

### hint

CSSにおいて要素の編集を行う際、
IDは「#ID名 { ... }」クラスは「.クラス名 { ... }」タグは「タグ名{ ... }」というように記述します。  
IDやクラスの場合、HTMLでは「#」や「.」がつかないため最初は混乱しそうになりますが、CSSではこれらの記号を名前の前につけることを忘れないように注意して下さい。

### files

- [index.html](chapter2/section6/index.html)

## 枠線

クラス名「box」を持つ要素に「太さ 1px, 色 #000」の「通常の枠線」をつけてみましょう。

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
  ${border}: ${1px} ${solid} ${#000};
}
```

### hint

枠線を指定する際は、borderという属性を使用します。  
また、値の部分には 指定したい線の色や太さ、破線の形式等の値を、空白を挟む形で以下のように記述することで指定することができます。  

border: 太さ 線の種類 色;

なお、代表的な線の種類として、solid(通常の枠線)、dotted(破線)があります。

### files

- [index.html](chapter2/section7/index.html)

## 横幅

クラス名「box」を持つ要素の横幅を「318px」にしてみましょう。

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
  ${width}: ${318px};
}
```

### hint

横幅を指定する際は width 属性を使用します。

### files

- [index.html](chapter2/section8/index.html)

## 高さ

クラス名「box」を持つ要素の高さを「478px」にしてみましょう。

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
  ${height}: ${478px};
  width: 318px;
}
```

### hint

高さを指定する際は height 属性を使用します。

### files

- [index.html](chapter2/section9/index.html)

