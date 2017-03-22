'use strict';

// このJavaScriptは「送信」ボタンがクリックされたときに
// アラートを表示するためのものです。
window.addEventListener('load', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('送信しました。');
  });
});
