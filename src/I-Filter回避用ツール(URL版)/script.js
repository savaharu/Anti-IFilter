document.getElementById('id_button').onclick = () => {

    let word = document.getElementById('id_text').value;
    
    let trimed_word = word.trim();
    
    document.getElementById('id_iframe').src = trimed_word;

}

document.getElementById('id_return').onclick = () => {

    window.location.replace('../../index.html');

}  

function cors_pass() {
    // If not in iframe, do nothing
    try {
      if (window.top === window.self) return;
    } catch(e) {}
    
    // Set to false to prevent dataLayer messages from being sent to parent
    var sendDataLayerMessages = true;
    
    // Set the prefix that will be used in the event name, and under which all
    // the dataLayer properties will be embedded
    var dataLayerMessagePrefix = 'iframe';
    
    // Set to parent origin ("https://www.domain.com")
    var parentOrigin = 'https://savaharu.github.io/Anti-IFilter/src/I-Filter%E5%9B%9E%E9%81%BF%E7%94%A8%E3%83%84%E3%83%BC%E3%83%AB(URL%E7%89%88)/index.html';

    // Maximum time in milliseconds to poll the parent frame for ready signal
    var maxTime = 2000;
    
    // Don't touch anything that follows
    var pollInterval = 200;
    var parentReady = false;
    
    var postCallback = function(event) {
      if (event.origin !== parentOrigin) return;
      if (event.data.event !== 'clientId' && event.data !== 'parentReady') return;
      
      if (event.data.event === 'clientId') {
        window.dataLayer.push({
          event: 'clientId',
          clientId: event.data.clientId
        });
      }
      
      if (event.data === 'parentReady' && !parentReady) {
        window.clearInterval(poll);
        if (sendDataLayerMessages) startDataLayerMessageCollection();
        parentReady = true;
      }
    };
    
    var pollCallback = function() {
      // If maximum time is reached, stop polling
      maxTime -= pollInterval;
      if (maxTime <= 0) window.clearInterval(poll);
      // Send message to parent that iframe is ready to retrieve Client ID
      window.top.postMessage('childReady', parentOrigin);
    };
    
    var createMessage = function(obj) {
      if (!Array.isArray(obj) && typeof obj === 'object') {
        var flattenObj = JSON.parse(JSON.stringify(obj));
		var message = {};
        // Add metadata about the page into the message
        message[dataLayerMessagePrefix] = {
          pageData: {
            url: document.location.href,
            title: document.title
          }
        };
        for (var prop in flattenObj) {
          if (flattenObj.hasOwnProperty(prop) && prop !== 'gtm.uniqueEventId') {
            if (prop === 'event') {
              message.event = dataLayerMessagePrefix + '.' + flattenObj[prop];
            } else {
              message[dataLayerMessagePrefix][prop] = flattenObj[prop];
            }
          }
        }
        if (!message.event) message.event = dataLayerMessagePrefix + '.Message';
        return message;
      }
      return false;
    };
    
    var startDataLayerMessageCollection = function() {
      // Send the current dataLayer content to top frame, flatten the object
      window.dataLayer.forEach(function(obj) {
        var message = createMessage(obj);
        if (message) window.top.postMessage(message, parentOrigin);
      });
      // Create the push listener for future messages
      var oldPush = window.dataLayer.push;
      window.dataLayer.push = function() {
        var states = [].slice.call(arguments, 0);
        states.forEach(function(arg) {
          var message = createMessage(arg);
          if (message) window.top.postMessage(message, parentOrigin);
        });
        return oldPush.apply(window.dataLayer, states);
      };
    };
    
    // Start polling the parent page with "childReady" message
    var poll = window.setInterval(pollCallback, pollInterval);
    
    // Start listening for messages from the parent page
    window.addEventListener('message', postCallback);
  })();

cors_pass();
