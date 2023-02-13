chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.includes("mail.google.com")) {
    console.log("Gmail tab detected");
    const queryParameters = tab.url.split("#")[1];
    console.log(queryParameters);
    const urlParameters = new URLSearchParams(queryParameters);
    console.log(urlParameters);
  }
  if (changeInfo.status === "complete" && tab.url.includes("mail.google.com")) {
    console.log("you made here");
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content-script.js", "content.css"],
    });
    console.log("It should have execuited content-script");
  }
});
