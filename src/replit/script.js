document.getElementById('id_button').onclick = () => {

    let word = document.getElementById('id_text').value;
    
    let trimed_word = word.trim();
    
    let url = 'https://script.google.com/a/macros/fukutsu.ed.jp/s/AKfycbxQOE8t7KYVMXQqe3UWs3WiL0xSJFI54Jy5xuaMQRpaFcXSXLwI9xQ5ZS7n5ZyAFVsU-A/exec';
    
    const send_url = trimed_word;
    
    url += '?response=' + send_url;
    
    fetch(url, {
    
        method: "GET",
        mode:"cors"
    
    })
    .then(response => {
    
        response.text();
    
    })
    .catch(error => {
    
        window.alert('CONNECT ERROR');
    
    })

}

document.getElementById('id_return').onclick = () => {

    window.location.replace('../../index.html');

}
