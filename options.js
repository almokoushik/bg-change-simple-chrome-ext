let colors = [
  "#70D28E",
  "#D85D2A",
  "#45954F",
  "#C63726",
  "#EE548A",
  "#6AC745",
  "#B64922",
];

for (let i = 0; i < colors.length; i++) {
  let button = document.createElement("button");
  button.style.backgroundColor = colors[i];
  button.className = "optionButton";
  document.getElementById("anotherColors").appendChild(button);
}

let content = document.getElementsByClassName("optionButton");
for (let i = 0; i < content.length; i++) {
  content[i].addEventListener("click", (event) => {
    let newColor = event.target.style.backgroundColor;
    chrome.storage.sync.set({ color: newColor }, () => {
      console.log("bg set to", newColor);
    });
  });
}
