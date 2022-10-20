var pass = window.prompt('パスワードを入力してください。');
if(pass === ssk) {
  window.alert('ようこそ！');
}
else {
  window.alert('ご入会を開始しています。');
  window.location.href = 'https://savaharu.github.io/FakeSite';
}
