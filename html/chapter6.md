# お問い合わせフォームの構造を表現しよう

このチャプターでは、お問い合わせフォームの構造を表現しながら、送信フォームを作るための要素について学びます。

## フォームを作る

次のような`form`タグを作ってみよう。

- 利用するHTTPメソッドは`POST`
- フォームを処理する先のURLは`""(空文字)`

(※)URLには、フォームで送信されたデータを処理するプログラムがあるURLを指定するべきです。このセクションでは便宜上、空文字を設定しています。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>はじめてのHTML</title>
  </head>
  <body>
    <h1>お問い合わせフォーム</h1>
    <p>メールアドレスとお問い合わせ内容を入力し、個人情報の取扱いに同意するにチェックを付けた上で、送信ボタンをクリックしてください。</p>

    <${form} ${method}="POST" ${action}="">
      <!-- ここにお問い合わせフォームが入ります -->
    <${\/form}>
  </body>
</html>
```

### hint

`form`タグの基本的な形式は以下の通りです。

```
<form method="POST" action="">
</form>
```

それぞれの属性の役割は次の通りです。

- method
  - フォームが送信される場合に利用するHTTPメソッドを設定します。`GET`と`POST`が設定可能です。
- action
  - フォームで送信されたデータを処理するプログラムがあるURLを設定します。

### tips

## 入力フィールドを作る

”メールアドレス”用の入力フィールドを作ってみよう。

- name属性は`email`


### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>はじめてのHTML</title>
  </head>
  <body>
    <h1>お問い合わせフォーム</h1>
    <p>メールアドレスとお問い合わせ内容を入力し、個人情報の取扱いに同意するにチェックを付けた上で、送信ボタンをクリックしてください。</p>

    <form method="POST" action="">
      <div>
        メールアドレス：<${input} ${type}="${text}" name="email">
      </div>
    </form>
  </body>
</html>
```

### hint

入力フィールドを作るためには`input`タグを利用して、`type`属性に`text`を指定します。

```
<input type="text" name="email">
```

### tips

`type`属性を指定しなかった場合、`text`がデフォルトタイプとして指定されます。

## 複数行入力フィールドを作る

”問い合わせ内容”用の複数行入力フィールドを作ってみよう。

- name属性は`details`

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>はじめてのHTML</title>
  </head>
  <body>
    <h1>お問い合わせフォーム</h1>
    <p>メールアドレスとお問い合わせ内容を入力し、個人情報の取扱いに同意するにチェックを付けた上で、送信ボタンをクリックしてください。</p>

    <form method="POST" action="">
      <div>
        メールアドレス：<input type="text" name="name">
      </div>
      <div>
        問い合わせ内容：<${textarea} name="details"><${\/textarea}>
      </div>
    </form>
  </body>
</html>
```

### hint

複数行入力フィールドを作るためには`textarea`タグを利用します。

```
<textarea name="details"></textarea>
```

### tips

## チェックボックスを作る

”個人情報の取扱いに同意する”用のチェックボックスを作ってみよう。

- name属性は`acceptPolicy`
- チェックしたときに送信される値は`true`

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>はじめてのHTML</title>
  </head>
  <body>
    <h1>お問い合わせフォーム</h1>
    <p>メールアドレスとお問い合わせ内容を入力し、個人情報の取扱いに同意するにチェックを付けた上で、送信ボタンをクリックしてください。</p>

    <form method="POST" action="">
      <div>
        メールアドレス：<input type="text" name="name">
      </div>
      <div>
        問い合わせ内容：<textarea name="details"></textarea>
      </div>
      <div>
        <${input} ${type}="${checkbox}" name="acceptPolicy" ${value}="true">個人情報の取扱いに同意する
      </div>
    </form>
  </body>
</html>
```

### hint

入力フィールドを作るためには`input`タグを利用して、`type`属性に`checkbox`を指定します。

```
<input type="checkbox" name="acceptPolicy" value="true">
```

`value`属性には、チェックしたときに送信される値を設定します。

### tips

## ラベルを作る

”個人情報の取扱いに同意する”用のチェックボックスは、__テキストの部分をクリックしてもチェックされない__ため、`label`タグで囲ってチェックできるようにしましょう。

ラベルとチェックボックスを関連つける名前には`acceptPolicy`を利用します。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>はじめてのHTML</title>
  </head>
  <body>
    <h1>お問い合わせフォーム</h1>
    <p>メールアドレスとお問い合わせ内容を入力し、個人情報の取扱いに同意するにチェックを付けた上で、送信ボタンをクリックしてください。</p>

    <form method="POST" action="">
      <div>
        メールアドレス：<input type="text" name="name">
      </div>
      <div>
        問い合わせ内容：<textarea name="details"></textarea>
      </div>
      <div>
        <${label} ${for}="acceptPolicy">
          <input type="checkbox" ${id}="acceptPolicy" name="acceptPolicy" value="true">個人情報の取扱いに同意する
        <${\/label}>
      </div>
    </form>
  </body>
</html>
```

### hint

チェックボックスのテキスト部分でチェック可能にするためには、次のように`label`タグで囲います。

```
<label for="acceptPolicy">
  <input type="checkbox" id="acceptPolicy" name="acceptPolicy" value="true">
  個人情報の取扱いに同意する
</label>
```

`for`要素には、`label`タグに関連付けされるフォーム関連要素(inputやtextareaなど)の__ID属性__を指定します。

### tips

上の例は、チェックボックスが`label`タグの子要素に当たるため、`for`要素がなくても期待通りに動作します。

```
<!-- 動作する -->
<label>
  <input type="checkbox" name="acceptPolicy" value="true">
  個人情報の取扱いに同意する
</label>

<!-- 動作しない -->
<label>個人情報の取扱いに同意する</label>
<input type="checkbox" name="acceptPolicy" value="true">
```

## 送信ボタンを作る

ボタンがクリックされた時にフォームを送信するような、送信ボタンを作ってみよう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>はじめてのHTML</title>
    <script src="main.js"></script>
  </head>
  <body>
    <h1>お問い合わせフォーム</h1>
    <p>メールアドレスとお問い合わせ内容を入力し、個人情報の取扱いに同意するにチェックを付けた上で、送信ボタンをクリックしてください。</p>

    <form method="POST" action="">
      <div>
        メールアドレス：<input type="text" name="name">
      </div>
      <div>
        問い合わせ内容：<textarea name="details"></textarea>
      </div>
      <div>
        <label for="acceptPolicy">
          <input type="checkbox" id="acceptPolicy" name="acceptPolicy" value="true">個人情報の取扱いに同意する
        </label>
      </div>
      <div>
        <${button} ${type}="${submit}">送信<${\/button}>
      </div>
    </form>
  </body>
</html>
```

### hint

フォームの送信ボタンを作るためには、`button`タグを利用して`type`属性に`submit`を指定します。

```
<button type="submit">送信</button>
```

### tips

フォームの送信ボタンを作成するもう1つの方法として`input`要素を利用した方法があります。


```
<input type="submit" value="送信">
```

`input`タグを利用したフォームの送信は、__古いIE(Internet Explorer)の不具合を回避するため__に、好んで利用されて来ました。  


現在では古いIEが利用されることはありません。また、次の理由により通常は`button`タグを利用した方がよいでしょう。

- ボタンのラベル文字
  - `button`タグは文字にHTMLが利用できるため、スタイリングが容易。
  - `input`タグは文字のみ。

### files

- chapter6/main.js
