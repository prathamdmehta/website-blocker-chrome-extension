chrome.storage.sync.get("blockedSites", function(data) {
  var blockedSites = data.blockedSites;

  for (var i = 0; i < blockedSites.length; i++) {
    if (window.location.href.includes(blockedSites[i])) {
      
      // empty the content of the page
      document.documentElement.innerHTML = "";

      // use this text in case if you want to show your content
      window.location.href = "https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=KEEPLEARNING";
    }
  }
});