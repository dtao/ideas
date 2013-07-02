function displayIdea(response) {
  var encodedContent = response.data.content.replace(/\n/g, '');
  var decodedContent = atob(encodedContent);
  document.getElementById('idea').innerHTML = markdown.toHTML(decodedContent);
}

function makeJSONPRequest(url, callbackName) {
  var script  = document.createElement('script');
  script.type = 'text/javascript';
  script.src  = url + '?callback=' + encodeURIComponent(callbackName);
  document.head.appendChild(script);
}

window.addEventListener('load', function() {
  makeJSONPRequest('https://api.github.com/repos/dtao/ideas/contents/README.md', 'displayIdea');
});
