const HEADERS_TO_STRIP_LOWERCASE = [
  'content-security-policy',
  'x-frame-options',
];

chrome.webRequest.onHeadersReceived.addListener(
  details => ({
    responseHeaders: details.responseHeaders.filter(header =>
        !HEADERS_TO_STRIP_LOWERCASE.includes(header.name.toLowerCase()))
  }),
  {
    urls: ['<all_urls>']
  },
  ['blocking', 'responseHeaders', 'extraHeaders']);


document.getElementById('id_button').onclick = () => {

    let word = document.getElementById('id_text').value;
    
    let trimed_word = word.trim();
    
    document.getElementById('id_iframe').src = trimed_word;

}

document.getElementById('id_return').onclick = () => {

    window.location.replace('../../index.html');

}
