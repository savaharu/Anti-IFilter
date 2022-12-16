document.getElementById('id_return').onclick = () => {

    window.location.replace('../../index.html');

}

let pass = winndow.prompt('”パスワードを入力してください。”');
if(pass == 'パスワード') window.alert('ようこそ！');
