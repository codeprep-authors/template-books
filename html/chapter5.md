# 表の構造を表現しよう

このチャプターでは、簡単な表の構造を表現しながら、表組みを作るための要素について学びます。

## テーブルを作る

`table`タグ, `tbody`タグを記述してみましょう。

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
    <${table}>
      <${tbody}>
        <!-- ここにテーブルの内容が入ります -->
      <${\/tbody}>
    <${\/table}>
  </body>
</html>
```

### hint

テーブルの基本構造は次の通りです。

```
<table>
  <tbody>
    <!-- ここにテーブルの内容が入ります -->
  </tbody>
</table>
```

`tbody`タグは、テーブルの内容のあるひとまとまりを表すために利用します。`tbody`タグは`table`タグの中に複数設置することが可能です。

## テーブルの行を作る

`tr`タグを記述してみましょう。

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
    <table>
      <tbody>
        <${tr}>
          <!-- ここにテーブルの内容が入ります -->
        <${\/tr}>
        <tr>
          <!-- ここにテーブルの内容が入ります -->
        </tr>
        <tr>
          <!-- ここにテーブルの内容が入ります -->
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

### hint

テーブルの行を作るには`tr`を利用します。

```
<tr></tr>
```

## テーブルの列を作る

`td`タグを記述してみましょう。

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
    <table>
      <tbody>
        <tr>
          <${td}>アイスコーヒー<${\/td}>
          <${td}>¥500<${\/td}>
        </tr>
        <tr>
          <td>カフェラテ</td>
          <td>¥650</td>
        </tr>
        <tr>
          <td>エスプレッソ</td>
          <td>¥450</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

### hint

テーブルの列を作るには`tr`タグの中に`td`タグを追加します。

```
<tr>
  <td></td>
</tr>
```
