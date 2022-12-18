let isCorrectPass = false;

document.getElementById('id_return').onclick = () => {

    window.location.replace('../../index.html');

}

while(!isCorrectPass) {
    let pass = window.prompt('”パスワードを入力してください。”');
    if(pass == 'パスワード') {isCorrectPass = true; window.alert('ようこそ！');}
}
