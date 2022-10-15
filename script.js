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


window.onload = () => {

    document.getElementById('id_button2').onclick = () => {

        location.replace('src/I-Filter回避用ツール(URL版)/index.html');

    }
    
    document.getElementById('id_crgames').onclick = () => {
    
        location.replace('src/crazygames/index.html');
    
    }
    
    document.getElementById('id_replit').onclick = () => {
    
        location.replace('src/replit/index.html');
    
    }
    
    
    document.getElementById('id_toge').onclick = () => {
    
        location.replace('src/TotallyGeometry(神)/index.html');
    
    }

}
