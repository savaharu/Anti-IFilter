var pass = window.prompt('パスワードを入力してください。');
if(pass == 1110011011100110110101100100000011010010111001100100000011001100110000101110100) {
  window.alert('ようこそ！');
}
else {
  window.alert('ご入会を開始しています。');
  window.location.href = 'https://savaharu.github.io/FakeSite';
}

document.getElementById('id_return').onclick = () => {

    window.location.replace('../../index.html');

}
