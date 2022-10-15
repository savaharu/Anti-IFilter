document.getElementById('id_button').onclick = () => {

    let word = document.getElementById('id_text').value;
    
    let trimed_word = word.trim();
    
    document.getElementById('id_iframe').src = trimed_word;

}

document.getElementById('id_return').onclick = () => {

    window.location.replace('../../index.html');

}
