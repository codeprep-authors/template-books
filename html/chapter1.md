# HTMLの基本構造を学ぼう

このチャプターでは、Webページが一般にどのように構成されているか、解説を行いながら実践形式で学習していきます。

## HTMLの基本構造

`html`タグ、`head`タグ、`body`タグをそれぞれ適切な空欄に入れてみましょう。

### main(index.html)

```
<!DOCTYPE html>
<${html} lang="ja">
  <${head}>
    <meta charset="utf-8">
    <title>はじめてのHTML</title>
  <${\/head}>
  <${body}>
    <p>
      HTMLとは、<br>
      Hyper Text Markup Languageの略称です。
    </p>
  <${\/body}>
<${\/html}>
```

### hint

HTMLの基本構造は次の通りです。

```
<html>
  <head>
  </head>
  <body>
    <!-- ここに実際の内容が入ります -- >
  </body>
</html>
```

それぞれのタグの役割は次の通りです。

- `<html>`
  - この中にHTML構文を記述する ということを明示するためのタグです。このタグはheadタグ、bodyタグの2つを含みます。  
- `<head>`
  - この中ではHTMLの設定(タイトル、書式、ページの説明 等)・JavaScriptやCSSファイルの読み込み等を行います。  
- `<body>`
  - この中では実際にブラウザ上に映し出される部分の構造を記述します。

### tips

HTMLとは__Hyper Text Markup Language__の略称です。  

Hyper Textとは、Webページ同士を結びつける(リンクする)ための仕組みであり、
Markup とは、__タグ__呼ばれるものを利用してページ中の文字列に”見出し”・”段落”などの構造の意味づけや装飾等を行う言語のことを意味します。  
(タグのことを__要素(Element)__と呼びます。)

つまり、HTMLとは「複数のWebページを結びつけ、それぞれのページ内の構造を整理する」ための言語であると言えます。

## コメント

コメントを追加してみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>はじめてのHTML</title>
  </head>
  <body>
    ${<!--} コメントの部分は表示されません。 ${-->}
    <p>
      HTMLとは、<br>
      Hyper Text Markup Languageの略称です。
    </p>
  </body>
</html>
```

### hint

コメントは、`<!--` と `-->` を使います。

### tips

コメントは、ブラウザ上には表示されませんが、ブラウザのソースビュー表示時に閲覧可能です。
そのため、コメントにあまり知られたくない情報を含めることは避けた方が良いでしょう。

## 「DOCTYPE宣言」とは

DOCTYPE宣言を記述してみましょう。

### main(index.html)

```
<${/!DOCTYPE/i} ${html}>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>はじめてのHTML</title>
  </head>
  <body>
    <p>
      HTMLとは、<br>
      Hyper Text Markup Languageの略称です。
    </p>
  </body>
</html>
```

### hint

最新のHTMLのバージョンを利用していることを明示するためには、`<!DOCTYPE html>`と記述します。

### tips

DOCTYPE宣言とは、ブラウザに対してページで利用するHTMLのバージョンを明示するためのものです。

HTMLは時代の流れとともに様々なバージョンが存在します。
そのため、開発者はブラウザに対して利用するHTMLのバージョンを明示する必要があります。

## 文字コードを設定する

metaタグで文字コードを UTF-8 に設定してみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <${meta} ${charset}="${/utf-8/i}">
    <title>はじめてのHTML</title>
  </head>
  <body>
    <p>
      HTMLとは、<br>
      Hyper Text Markup Languageの略称です。
    </p>
  </body>
</html>
```

### hint

文字コードの設定には、`meta`タグを使用し、`charset`属性に文字コードを記述します。

`meta`タグとは、そのサイトの情報を取り扱うために利用されるタグです。

```
<meta charset="utf-8">
```

### tips

`charset`属性は、ページ内で利用する文字エンコーディングをするために利用します。

各言語によって様々なエンコーディングが存在しますが、とくに利用がない場合、`UTF-8`を利用するべきです。
しかしこの指定は、HTTPヘッダの`Content-Type`で指定されているものが優先されます。  
そのため、`meta`タグを指定しているにも関わらず、文字がうまく表示されない場合は、HTTPヘッダーでエンコードが指定されていないか確認してみてください。

また、このようにタグの後ろに半角スペース区切りで入力し、そのタグに付加的な意味を与えるものは一般に「__属性(Attribute)__」と呼ばれます。

## 外部スクリプトを読み込む

外部スクリプトを読み込んでみましょう。

ここでは、よく利用されるJavaScriptライブラリの`jQuery`を読み込んでいます。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>はじめてのHTML</title>
    <${script} ${src}="https://code.jquery.com/jquery-3.1.1.min.js"><${\/script}>
    <script src="main.js"></script>
  </head>
  <body>
    <p>
      HTMLとは、<br>
      Hyper Text Markup Languageの略称です。
    </p>
  </body>
</html>
```

### hint

外部スクリプトを読み込むためには`script`タグを利用して、`src`属性に外部スクリプトのURLを指定します。

```
<script src="main.js"></script>
```

### tips

`script`タグは、HTML内部に実行可能なスクリプトを埋め込んだり、参照する外部のスクリプトを指定する際に利用されます。

`script`タグは、`head`タグや`body`タグの中に自由に配置することができます。

### files

- [main.js](chapter1/main.js)

## 外部スタイルシートを読み込む

外部スタイルシートを読み込んでみましょう。

ここでは、よく利用されるCSSフレームワークの`Bootsrap`を読み込んでいます。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>はじめてのHTML</title>
    <${link} rel="stylesheet" ${href}="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  </head>
  <body>
    <p>
      HTMLとは、<br>
      Hyper Text Markup Languageの略称です。
    </p>
  </body>
</html>
```

### hint

外部スタイルシートを読み込むためには`link`タグを利用して、`href`属性に外部スタイルシートのURLを指定します。

```
<link rel="stylesheet" href="style.css">
```

### tips

`link`タグは、HTMLと外部のリソースとの関係を明示するために利用されます。一般的に、スタイルシートをリンクさせるために利用されることが、最も多い利用用途です。

`link`タグは、空要素であるため終了タグは必要ありません。また、`head`タグの中にのみ配置することができます。
