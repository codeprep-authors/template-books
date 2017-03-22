# レイアウトの土台のHTML構造をつくろう

このチャプターでは 「スマホ風メニュー」の土台となるHTML構造をつくります。

## 箱( div要素 )の作成

空欄を「divタグ」で埋めてみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>HTML+CSS</title>
  </head>
  <body>
    <${div}>

    <${\/div}>
  </body>
</html>
```

### hint

レイアウトの土台になる「divタグ」を記述していきましょう。  
今回はこのdivタグを「スマートフォンの画面」と見立ててレイアウトを作成していきます。  

HTMLタグの一つであるdivタグは複数の「要素(\*)」をまとめるための「箱」のようなものです( 本チャプターでは理解を容易にするため、divタグの事を「箱」と呼びます )。  
このdivタグを用いてページ内の要素をグループごとに分けることにより、HTMLの構造がわかりやすくなり、またCSSによるデザインの調整が容易になります。  

\*「要素」とは、タグ、文章、閉じタグ等から構成される一つのまとまりのことです。

## 箱に名前をつける

作成した箱に「box」というクラスを追加してみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>HTML+CSS</title>
  </head>
  <body>
    <div ${class}="${box}">

    </div>
  </body>
</html>
```

### hint

それぞれのHTML要素には、タグと共に、その要素に関する情報を示す「属性」と呼ばれるものを追加することができます。  
例えば名前をつける際には、ID( id )とクラス( class )という属性が使用されます。  

これら二つの属性はどちらも名前をつけるためのものですが、両者を分ける特徴として、id は「同じ名前のものが 1つのWebページに 1つしか存在してはいけない」、class は「同じ名前のものが1つのWebページに複数存在してよい」という違いが存在します。

## タイトルを入れる

h1タグを使用して boxの記事タイトルを表示してみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>HTML+CSS</title>
  </head>
  <body>
    <div class="box">
      <${h1}>Smartphone Menu<${\/h1}>

    </div>
  </body>
</html>
```

### hint

h1タグは見出し用のタグで、`<h1>`見出し`</h1>`のように使用されます。  
hタグは、h1 ~ h6 まで存在し、入れ子の深さに応じて適切な見出し用のタグを使用します。

## ulタグを入れる

クラス名「menu」のul要素を作成しましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>HTML+CSS</title>
  </head>
  <body>
    <div class="box">
      <h1>Smartphone Menu</h1>
      <${ul} ${class}="${menu}">

      <${\/ul}>
    </div>
  </body>
</html>
```

### hint

HTMLタグの一つであるulタグは複数の連続するリスト要素をまとめるためのタグです。  
ここでのul要素は、メニュー一覧を囲むためのものとして使用されます。  

なお、それぞれのHTML要素には、タグと共に、その要素に関する情報を示す「属性」と呼ばれるものを追加することができます。  
例えば名前をつける際には、ID( id )とクラス( class )という属性が使用されます。

## liタグを入れる

クラス名「menu」のul要素の中に、li要素を二つ作成して入れてみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>HTML+CSS</title>
  </head>
  <body>
    <div class="box">
      <h1>Smartphone Menu</h1>
      <ul class="menu">
        <${li}>

        <${\/li}>
        <${li}>

        <${\/li}>
      </ul>
    </div>
  </body>
</html>
```

### hint

HTMLタグの一つであるliタグは一般にulタグの中(直下)に置かれ、リスト項目として使用されます。  
ここで作成するli要素は、「Smartphone Menu」の「大項目」の部分となります。

## チェックボックスをつくる

チェックボックスを2つつくってみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>HTML+CSS</title>
  </head>
  <body>
    <div class="box">
      <h1>Smartphone Menu</h1>
      <ul class="menu">
        <li>
          <${input} ${type}="${checkbox}"> AAAAA
        </li>
        <li>
          <${input} ${type}="${checkbox}"> BBBBB
        </li>
      </ul>
    </div>
  </body>
</html>
```

### hint

「チェックボックス」は、一般に クリックすることで「選択状態」となる選択欄として使用されます。  
今回は 大項目内にある複数の小項目が開いている状態か、閉じている状態かを判別するために使用します。  

チェックボックスは inputタグを使用し、その属性「type」に「checkbox」という値を指定することで作成することができます。  
具体的な例としては以下のようになります。  

`<input type="checkbox">`

## チェックボックスにIDをつける

一つ目のチェックボックスにID名「m1」、二つ目のチェックボックスにID名「m2」をつけてみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>HTML+CSS</title>
  </head>
  <body>
    <div class="box">
      <h1>Smartphone Menu</h1>
      <ul class="menu">
        <li>
          <input type="checkbox" ${id}="${m1}"> AAAAA
        </li>
        <li>
          <input type="checkbox" ${id}="${m2}"> BBBBB
        </li>
      </ul>
    </div>
  </body>
</html>
```

### hint

それぞれのHTML要素には、タグと共に、その要素に関する情報を示す「属性」と呼ばれるものを追加することができます。  
例えば名前をつける際には、ID( id )とクラス( class )という属性が使用されます。  

これら二つの属性はどちらも名前をつけるためのものですが、両者を分ける特徴として、id は「同じ名前のものが 1つのWebページに 1つしか存在してはいけない」、class は「同じ名前のものが1つのWebページに複数存在してよい」という違いが存在します。

## ラベルをつける (1)

一つ目のメニュー項目に対し、ID名「m1」へのlabelタグをつけてみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>HTML+CSS</title>
  </head>
  <body>
    <div class="box">
      <h1>Smartphone Menu</h1>
      <ul class="menu">
        <li>
          <${label} ${for}="${m1}"><${\/label}>
          <input type="checkbox" id="m1"> AAAAA
        </li>
        <li>
          <input type="checkbox" id="m2"> BBBBB
        </li>
      </ul>
    </div>
  </body>
</html>
```

### hint

「labelタグ」は `<label for="ID名">``</label>`のように表記されます。  
通常、チェックボックスは ボックスのアイコンをクリックしなければ チェックがつきませんが、labelタグを使用すると 「あるテキストをクリックすることでチェックをつける」「ある要素をクリックすることでチェックをつける」などが可能になります。  
labelタグによる範囲指定は for属性によって指定されたID名のチェックボックスに適用されます。  

通常、labelタグは
`<label>``<inputタグ>` テキスト`</label>` のように inputタグを囲んで使用しますが、今回は CSSでlabelタグを 大項目のエリアいっぱいに広げることによって、大項目のどこをクリックしてもチェックがつくようにします。

## ラベルをつける (2)

二つ目のメニュー項目に対し、ID名「m2」へのlabelタグをつけてみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>HTML+CSS</title>
  </head>
  <body>
    <div class="box">
      <h1>Smartphone Menu</h1>
      <ul class="menu">
        <li>
          <label for="m1"></label>
          <input type="checkbox" id="m1"> AAAAA
        </li>
        <li>
          <${label} ${for}="${m2}"><${\/label}>
          <input type="checkbox" id="m2"> BBBBB
        </li>
      </ul>
    </div>
  </body>
</html>
```

### hint

「labelタグ」は `<label for="ID名">``</label>`のように表記されます。  
通常、チェックボックスは ボックスのアイコンをクリックしなければ チェックがつきませんが、labelタグを使用すると 「あるテキストをクリックすることでチェックをつける」「ある要素をクリックすることでチェックをつける」などが可能になります。  
labelタグによる範囲指定は for属性によって指定されたID名のチェックボックスに適用されます。  

通常、labelタグは
`<label>``<inputタグ>` テキスト`</label>` のように inputタグを囲んで使用しますが、今回は CSSでlabelタグを 大項目のエリアいっぱいに広げることによって、大項目のどこをクリックしてもチェックがつくようにします。

## 小項目をつくる (1)

それぞれの大項目の中に、クラス名「submenu」のulタグを作成しましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>HTML+CSS</title>
  </head>
  <body>
    <div class="box">
      <h1>Smartphone Menu</h1>
      <ul class="menu">
        <li>
          <label for="m1"></label>
          <input type="checkbox" id="m1"> AAAAA
          <${ul} ${class}="${submenu}">

          <${\/ul}>
        </li>
        <li>
          <label for="m2"></label>
          <input type="checkbox" id="m2"> BBBBB
          <${ul} ${class}="${submenu}">

          <${\/ul}>
        </li>
      </ul>
    </div>
  </body>
</html>
```

### hint

クラス名「submenu」のul要素は、大項目であるli要素がクリックされたら開く小項目リスト という想定です。  

なお、それぞれのHTML要素には、タグと共に、その要素に関する情報を示す「属性」と呼ばれるものを追加することができます。  
例えば名前をつける際には、ID( id )とクラス( class )という属性が使用されます。

## 小項目をつくる (2)

クラス名「submenu」の要素の中にli要素を入れてみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>HTML+CSS</title>
  </head>
  <body>
    <div class="box">
      <h1>Smartphone Menu</h1>
      <ul class="menu">
        <li>
          <label for="m1"></label>
          <input type="checkbox" id="m1"> AAAAA
          <ul class="submenu">
            <${li}><${\/li}>
            <${li}><${\/li}>
          </ul>
        </li>
        <li>
          <label for="m2"></label>
          <input type="checkbox" id="m2"> BBBBB
          <ul class="submenu">
            <${li}><${\/li}>
            <${li}><${\/li}>
          </ul>
        </li>
      </ul>
    </div>
  </body>
</html>
```

### hint

ここで作成するli要素は「小項目リストの各項目」のことを指します。

## p要素をつける

li要素の中に p要素を使用して小項目を入れてみましょう。

### main(index.html)

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>HTML+CSS</title>
  </head>
  <body>
    <div class="box">
      <h1>Smartphone Menu</h1>
      <ul class="menu">
        <li>
          <label for="m1"></label>
          <input type="checkbox" id="m1"> AAAAA
          <ul class="submenu">
            <li><${p}>DDDDD<${\/p}></li>
            <li><${p}>EEEEE<${\/p}></li>
          </ul>
        </li>
        <li>
          <label for="m2"></label>
          <input type="checkbox" id="m2"> BBBBB
          <ul class="submenu">
            <li><${p}>FFFFF<${\/p}></li>
            <li><${p}>GGGGG<${\/p}></li>
          </ul>
        </li>
      </ul>
    </div>
  </body>
</html>
```

### hint

pタグは、段落を指定するためのタグで、文章の一段落を、`<p>`～`</p>`のように囲んで使用します。  
「段落」とは一つのまとまった意味をもつ「かたまり」の事を指して、その長さは自由に決めることが出来ます。  
また、pタグは単に文字だけではなく 画像や他のページへのリンク等を囲む事も可能です。

