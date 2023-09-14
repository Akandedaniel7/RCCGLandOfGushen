// Remove ".html" extension from the URL
if (window.history && window.history.pushState) {
    var newURL = window.location.href.replace(".html", "");
    window.history.pushState({ path: newURL }, "", newURL);
  }
  