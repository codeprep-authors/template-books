# 6文字のカラーコードを使ってみよう

このチャプターでは、6文字からなるカラーコードによる色の表現について学習します。

## 「赤色」の表現

6文字のカラーコードを使用して「赤色」を表現してみましょう。

### main(main.css)

```
body {
  background-color: ${#FF0000};
}
```

### hint

カラーコードは「#012345」というような形で記述します。このカラーコードを分解して見ると以下のようになります。  

「#」：カラーコードの始まり
「01」：R( 赤色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「23」：G( 緑色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「45」：B( 青色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  

CSSで6文字のカラーコードを使用して「赤色」を表現する場合、値として「#FF0000」を使用します。

### files

- [index.html](chapter3/section1/index.html)

## 「緑色」の表現

6文字のカラーコードを使用して「緑色」を表現してみましょう。

### main(main.css)

```
body {
  background-color: ${#00FF00};
}
```

### hint

カラーコードは「#012345」というような形で記述します。このカラーコードを分解して見ると以下のようになります。  

「#」：カラーコードの始まり
「01」：R( 赤色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「23」：G( 緑色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「45」：B( 青色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  

CSSで6文字のカラーコードを使用して「緑色」を表現する場合、値として「#00FF00」を使用します。

### files

- [index.html](chapter3/section2/index.html)

## 「青色」の表現

6文字のカラーコードを使用して「青色」を表現してみましょう。

### main(main.css)

```
body {
  background-color: ${#0000FF};
}
```

### hint

カラーコードは「#012345」というような形で記述します。このカラーコードを分解して見ると以下のようになります。  

「#」：カラーコードの始まり
「01」：R( 赤色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「23」：G( 緑色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「45」：B( 青色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  

CSSで6文字のカラーコードを使用して「青色」を表現する場合、値として「#0000FF」を使用します。

### files

- [index.html](chapter3/section3/index.html)

## 「黒色」の表現

6文字のカラーコードを使用して「黒色」を表現してみましょう。

### main(main.css)

```
body {
  background-color: ${#000000};
}
```

### hint

カラーコードは「#012345」というような形で記述します。このカラーコードを分解して見ると以下のようになります。  

「#」：カラーコードの始まり
「01」：R( 赤色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「23」：G( 緑色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「45」：B( 青色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  

CSSで6文字のカラーコードを使用して「黒色」を表現する場合、値として「#000000」を使用します。

### files

- [index.html](chapter3/section4/index.html)

## 「白色」の表現

6文字のカラーコードを使用して「白色」を表現してみましょう。

### main(main.css)

```
body {
  background-color: #000000;
}

h1 {
  color: ${#FFFFFF};
}
```

### hint

カラーコードは「#001122」というような形で記述します。このカラーコードを分解して見ると以下のようになります。  

「#」：カラーコードの始まり
「00」：R( 赤色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「11」：G( 緑色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「22」：B( 青色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  

CSSで6文字のカラーコードを使用して「白色」を表現する場合、値として「#FFFFFF」を使用します。  

\* CSSで扱う色は、絵の具とは少々異なり、赤と緑と青を全て均等に混ぜ合わせることで「無彩色(黒色、灰色、白色)」になります。三色がFFに近づけば近づく程 色は白に近づいていきます。

### files

- [index.html](chapter3/section5/index.html)

## 「オレンジ色」の表現

6文字のカラーコードを使用して「オレンジ色」を表現してみましょう。

### main(main.css)

```
body {
  background-color: ${#FFA500};
}
```

### hint

カラーコードは「#012345」というような形で記述します。このカラーコードを分解して見ると以下のようになります。  

「#」：カラーコードの始まり
「01」：R( 赤色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「23」：G( 緑色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「45」：B( 青色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  

CSSで6文字のカラーコードを使用して「オレンジ色」を表現する場合、値として「#FFA500」を使用します。

### files

- [index.html](chapter3/section6/index.html)

## 「紫色」の表現

6文字のカラーコードを使用して「紫色」を表現してみましょう。

### main(main.css)

```
body {
  background-color: ${#800080};
}
```

### hint

カラーコードは「#012345」というような形で記述します。このカラーコードを分解して見ると以下のようになります。  

「#」：カラーコードの始まり
「01」：R( 赤色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「23」：G( 緑色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「45」：B( 青色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  

CSSで6文字のカラーコードを使用して「紫色」を表現する場合、値として「#800080」を使用します。

### files

- [index.html](chapter3/section7/index.html)

## 「灰色」の表現

6文字のカラーコードを使用して「灰色」を表現してみましょう。

### main(main.css)

```
body {
  background-color: ${#808080};
}
```

### hint

カラーコードは「#012345」というような形で記述します。このカラーコードを分解して見ると以下のようになります。  

「#」：カラーコードの始まり
「01」：R( 赤色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「23」：G( 緑色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「45」：B( 青色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  

CSSで六文字のカラーコードを使用して「灰色」を表現する場合、値として「#808080」を使用します。

### files

- [index.html](chapter3/section8/index.html)

## 「茶色」の表現

6文字のカラーコードを使用して「茶色」を表現してみましょう。

### main(main.css)

```
body {
  background-color: ${#A52A2A};
}
```

### hint

カラーコードは「#012345」というような形で記述します。このカラーコードを分解して見ると以下のようになります。  

「#」：カラーコードの始まり
「01」：R( 赤色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「23」：G( 緑色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「45」：B( 青色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  

CSSで六文字のカラーコードを使用して「茶色」を表現する場合、値として「#A52A2A」を使用します。

### files

- [index.html](chapter3/section9/index.html)

## 「水色」の表現

6文字のカラーコードを使用して「水色」を表現してみましょう。

### main(main.css)

```
body {
  background-color: ${#00FFFF};
}
```

### hint

カラーコードは「#012345」というような形で記述します。このカラーコードを分解して見ると以下のようになります。  

「#」：カラーコードの始まり
「01」：R( 赤色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「23」：G( 緑色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「45」：B( 青色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  

CSSで六文字のカラーコードを使用して「水色」を表現する場合、値として「#00FFFF」を使用します。

### files

- [index.html](chapter3/section10/index.html)

## 「黄色」の表現

6文字のカラーコードを使用して「黄色」を表現してみましょう。

### main(main.css)

```
body {
  background-color: ${#FFFF00};
}
```

### hint

カラーコードは「#012345」というような形で記述します。このカラーコードを分解して見ると以下のようになります。  

「#」：カラーコードの始まり
「01」：R( 赤色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「23」：G( 緑色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  
「45」：B( 青色 )の強さを16進数で。範囲は 00(0) 〜 FF(255)。  

CSSで六文字のカラーコードを使用して「赤色」を表現する場合、値として「#FFFF00」を使用します。

### files

- [index.html](chapter3/section11/index.html)

## 「暗い青色」の表現

カラーコード「#000066」を値として、暗い青色を表現してみましょう。

### main(main.css)

```
body {
  background-color: ${#000066};
}
```

### hint

カラーコードの場合、英語表記で指定する場合に比べて表現できる色に柔軟性があります。  
今回は通常の青色(#0000FF)より暗い青色を表現してみましょう。

### files

- [index.html](chapter3/section12/index.html)

## 「明るい青色」の表現

カラーコード「#CCCCFF」を値として、明るい青色を表現してみましょう。

### main(main.css)

```
body {
  background-color: ${#CCCCFF};
}
```

### hint

カラーコードの場合、英語表記で指定する場合に比べて表現できる色に柔軟性があります。  
今回は通常の青色(#0000FF)より明るい青色を表現してみましょう。

### files

- [index.html](chapter3/section13/index.html)
