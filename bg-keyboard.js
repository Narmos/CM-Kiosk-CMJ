chrome.webNavigation.onCompleted.addListener(function (details) {
    chrome.tabs.sendMessage(details.tabId,JSON.stringify({"directive":"insertKeyboard"}));
});