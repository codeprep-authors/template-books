# 画像・リンク・リスト構造を表現しよう

このチャプターでは、画像・リンク・リスト構造を作るための要素について学びます。

## 文中に画像を表示する

画像を表示してみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>様々なタグ(1)</title>
  </head>
  <body>
    <h1>雑記</h1>
    <p>
      <${img} ${src}="images/codeprep.png" ${alt}="logo">
    </p>
  </body>
</html>
```

### hint

画像を表示するには、`img`タグを使用します。  

```
<img src="image.png" alt="この画像の説明">
```

それぞれの属性の役割は次の通りです。

- `src`
  - 画像のアドレスを設定する
- `alt`
  - 画像が何らかの理由で読み込まれなかった際に画像の代わりに表示する画像の説明文を設定する

### tips


### files
- images/codeprep.png

```
<img src="~~~.png" alt="top画像">
```

## 画像にリンク機能をつける

画像をクリックしたら、CODEPREPのトップページを新しいタブで開くリンクを作ってみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>様々なタグ(1)</title>
  </head>
  <body>
    <h1>雑記</h1>
    <p>
      <${a} ${href}="https://codeprep.jp/" ${target}="${_blank}" rel="noopener noreferrer">
        <img src="images/codeprep.png" alt="logo">
      <${\/a}>
    </p>
  </body>
</html>
```

### hint

リンクを付けるには、`a`タグを使用します。  

```
<a href="https://codeprep.jp/" target="_blank" rel="noopener noreferrer">

</a>
```

それぞれの属性の役割は次の通りです。

- `href`
  - リンク先をURLまたは、URLフラグメント(#で始まる文字。`#top`など)を設定します。
- `target`
  - リンク先を表示するタブ(ウィンドウ)を指定する。`_blank`を指定した場合、新しいタブ(ウィンドウ)に表示します。

### tips

`rel` 属性は、リンク先のページとの関係を定義するために利用します。

`rel` 属性を渡さない場合、リンク先のページから`window.opener`を通じてリンク元のページへアクセスすることができます。　　
これは、リンク先が外部の全く関係のないページの場合、リンク先からアクセスされることはセキュリティの観点からあまり望ましいこととは言えません。

そのため、`herf` 属性を利用して外部のページにリンクする場合、`rel` 属性を設定しておいた方が良いでしょう。

- noopener
  - リンク先のページから、`window.opener`を通じたアクセスできないようにします。
- noreferrer
  - リンク先のページに対して、HTTPヘッダを通じてリンク元のページの情報を送信しないようにします。

ただし、`noopener`は比較的新しい機能であるため、機能が有効になるブラウザはChromeとOperaのみです。(2017/01 時点)

- [Can I use | noopener](http://caniuse.com/#feat=rel-noopener)

### files
- images/codeprep.png

## 順不同リストを表示する

`ul`タグ、`li`タグを使用して順不同リストをつくってみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>様々なタグ(1)</title>
  </head>
  <body>
    <h1>メニュー</h1>
    <${ul}>
      <${li}>アイスコーヒー<${\/li}>
      <li>カフェラテ</li>
      <li>エスプレッソ</li>
    <${\/ul}>
  </body>
</html>
```

### hint

順不同リストを作るには、`ul`と`li`タグを利用して次のように書きます。

```
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

### tips

`ul`タグは__Unordered List__の略で、配置順に意味を持たないアイテムをまとめるためのタグです。  

子の`li`タグの先頭には`・`記号が付きます。  

## 順序付きリストを表示する

`ol`タグ、`li`タグを使用して順序付きリストをつくってみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>様々なタグ(1)</title>
  </head>
  <body>
    <h1>メニュー</h1>
    <${ol}>
      <${li}>アイスコーヒー<${\/li}>
      <li>カフェラテ</li>
      <li>エスプレッソ</li>
    <${\/ol}>
  </body>
</html>
```

### hint

順序付きリストを作るには、`ol`と`li`タグを利用して次のように書きます。

```
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

### tips

`ol`タグは__Ordered List__の略で、配置順に意味を持つアイテムをまとめるためのタグです。  

子の`li`タグの先頭には"1."や"2."などの数値が付きます。  
