const host = location.host;

var ifrm = document.createElement('iframe');
// assign an id
ifrm.setAttribute('id', 'ifrm');

// to place at end of document
//document.body.appendChild(ifrm);

// to place before another page element
//var el = document.getElementById('marker');
//el.parentNode.insertBefore(ifrm, el);

// assign url
ifrm.setAttribute('src', 'chrome-extension://kblcngmeegodfjoeglkjadepcoopjodo/index.html');
ifrm.setAttribute('style', 'width:100%;height:100%;');
// to place at end of document
setTimeout(() => { document.body.appendChild(ifrm); }, 5000);


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "notableSearch"){
      fetch('https://'+host+'/uba/api/search/advanced/entities?', {
          method: "POST",
          body: 'criteria%5B%5D=%7B%22id%22%3A%22DR%22%2C%22v%22%3A%7B%22r%22%3A%7B%22unit%22%3A%22'+request.queryUnit+'%22%2C%22num%22%3A%22'+request.queryUnitNum+'%22%7D%7D%7D&criteria%5B%5D=%7B%22id%22%3A%22RS%22%2C%22v%22%3A%7B%22f%22%3A'+request.queryRiskScore+'%7D%7D&sort=%7B%22by%22%3A%22riskScore%22%2C%22order%22%3A-1%7D&maxNumberOfResults='+request.queryLimit,
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
        fetch('https://'+host+'/uba/api/search/advanced/entities?', {
          method: "POST",
          body: 'criteria%5B%5D=%7B%22id%22%3A%22DR%22%2C%22v%22%3A%7B%22r%22%3A%7B%22unit%22%3A%22'+request.queryUnit+'%22%2C%22num%22%3A%22'+request.queryUnitNum+'%22%7D%7D%7D&criteria%5B%5D=%7B%22id%22%3A%22ET%22%2C%22v%22%3A%7B%22vs%22%3A%5B%22'+request.eventType.name+'%22%5D%7D%7D&sort=%7B%22by%22%3A%22riskScore%22%2C%22order%22%3A-1%7D&maxNumberOfResults='+request.queryLimit,
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
      if (request.message === "eventTypeUserSearch"){
        fetch('https://'+host+'/uba/api/search/advanced/entities?', {
          method: "POST",
          body: 'criteria%5B%5D=%7B%22id%22%3A%22DR%22%2C%22v%22%3A%7B%22r%22%3A%7B%22unit%22%3A%22'+request.queryUnit+'%22%2C%22num%22%3A%22'+request.queryUnitNum+'%22%7D%7D%7D&criteria%5B%5D=%7B%22id%22%3A%22UN%22%2C%22v%22%3A%7B%22vs%22%3A%5B%22'+request.user+'%22%5D%7D%7D&sort=%7B%22by%22%3A%22riskScore%22%2C%22order%22%3A-1%7D&maxNumberOfResults='+request.queryLimit,
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
      if (request.message === "eventTypeAssetSearch"){
        fetch('https://'+host+'/uba/api/search/advanced/entities?', {
          method: "POST",
          body: 'criteria%5B%5D=%7B%22id%22%3A%22DR%22%2C%22v%22%3A%7B%22r%22%3A%7B%22unit%22%3A%22'+request.queryUnit+'%22%2C%22num%22%3A%22'+request.queryUnitNum+'%22%7D%7D%7D&criteria%5B%5D=%7B%22id%22%3A%22AN%22%2C%22v%22%3A%7B%22vs%22%3A%5B%22'+request.asset+'%22%5D%7D%7D&sort=%7B%22by%22%3A%22riskScore%22%2C%22order%22%3A-1%7D&maxNumberOfResults='+request.queryLimit,
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
      if (request.message === "rawEventSearch"){
        fetch('https://'+host+'/uba/api/service/datalake/data/raw?', {
          method: "POST",
          body: request.rawlog_refs,
          headers: {"Content-type": "application/json"},
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
  axios('https://'+this.host+'/uba/api/user/sequence/triggeredRules?sequenceType=session&sequenceId='+obj, {
    method: 'GET',
    withCredentials: 'include',
  }).then(response => {
  }).catch(error => {
    console.log(error);
  });
  */