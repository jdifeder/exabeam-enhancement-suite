console.log('Content script running');
const host = location.host;
const queryUnit = 'd';
const queryUnitNum = '7';
const queryRiskScore = '90';
const queryLimit = '10000';

var ifrm = document.createElement('iframe');
// assign an id
ifrm.setAttribute('id', 'ifrm');

// to place at end of document
document.body.appendChild(ifrm);

// to place before another page element
//var el = document.getElementById('marker');
//el.parentNode.insertBefore(ifrm, el);

// assign url
ifrm.setAttribute('src', 'chrome-extension://kblcngmeegodfjoeglkjadepcoopjodo/index.html');
ifrm.setAttribute('style', 'width:100%;height:100%');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "notableSearch"){
      console.log('running content script notable search');
      fetch('https://'+host+'/uba/api/search/advanced/entities?', {
          method: "POST",
          body: 'criteria%5B%5D=%7B%22id%22%3A%22DR%22%2C%22v%22%3A%7B%22r%22%3A%7B%22unit%22%3A%22'+queryUnit+'%22%2C%22num%22%3A%22'+queryUnitNum+'%22%7D%7D%7D&criteria%5B%5D=%7B%22id%22%3A%22RS%22%2C%22v%22%3A%7B%22f%22%3A'+queryRiskScore+'%7D%7D&sort=%7B%22by%22%3A%22riskScore%22%2C%22order%22%3A-1%7D&maxNumberOfResults='+queryLimit,
          headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
          credentials: 'same-origin',
          mode: 'same-origin'
      })
      .then(response => response.json())
      .then(response => sendResponse(response)) 
      .catch(err => sendResponse(err));
      return true;
      }
  });

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === "eventTypeSearch"){

        console.log('running content script eventTypeSearch');
        fetch('https://'+host+'/uba/api/search/advanced/entities?', {
          method: "POST",
          body: 'criteria%5B%5D=%7B%22id%22%3A%22DR%22%2C%22v%22%3A%7B%22r%22%3A%7B%22unit%22%3A%22'+queryUnit+'%22%2C%22num%22%3A%22'+queryUnitNum+'%22%7D%7D%7D&criteria%5B%5D=%7B%22id%22%3A%22ET%22%2C%22v%22%3A%7B%22vs%22%3A%5B%22'+request.eventType.name+'%22%5D%7D%7D&sort=%7B%22by%22%3A%22riskScore%22%2C%22order%22%3A-1%7D&maxNumberOfResults=100000',
          headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
          credentials: 'same-origin',
          mode: 'same-origin'
      })
        .then(response => response.json())
        .then(response => sendResponse(response)) 
        .catch(err => sendResponse(err));
        return true;
        }
    });  

/*
chrome.tabs.query({ active: true, currentWindow: true }, ([{ id, url }]) => {
    console.log('content script url = ',url);
})
*/

