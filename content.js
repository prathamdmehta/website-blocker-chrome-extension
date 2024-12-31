chrome.storage.sync.get("blockedSites", function(data) {
  var blockedSites = data.blockedSites;

  for (var i = 0; i < blockedSites.length; i++) {
    if (window.location.href.includes(blockedSites[i])) {
      
      // empty the content of the page
      document.documentElement.innerHTML = "";

      // use this text in case if you want to show your content
      // window.location.href = "you can add any link which will help you redirect 
                                // to that webpage as a waring or reminder instead of opening website which was added to block list";
    }
  }
});
