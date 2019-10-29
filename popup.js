document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("Grab").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "Grab" }, function(
        response
      ) {
        const recordUl = document.querySelector(".record ul");
        if (response.msgArr.length === 0) return;
        if (recordUl.children.length > 0) return;
        const msgArr = response.msgArr;
        // const msgArr = ["AGri", "Angry"];

        for (let i = 0; i < msgArr.length; i++) {
          let li = document.createElement("li");
          li.innerText = msgArr[i];
          recordUl.appendChild(li);
        }

        console.log(response.msgArr);
      });
    });
  });

  const openLink = document.querySelector("#link-open");
  openLink.addEventListener("click", function() {
    openPage("https://github.com/Shawnfoto");
  });
});

const openPage = function(url) {
  chrome.tabs.create({ url });
};
