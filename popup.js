// background.js
// let page = document.body;
let button = document.getElementById("changeButtonColor");
let buttonColor;

chrome.storage.sync.get("color", async (data) => {
  buttonColor = data.color;
  button.style.backgroundColor = data.color;
});

document
  .getElementById("changeButtonColor")
  .addEventListener("click", async () => {
    // document.body.style.backgroundColor = buttonColor;
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // alert(tab.id);
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });

const setPageBackgroundColor = () => {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
};
