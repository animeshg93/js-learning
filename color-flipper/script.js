const colorList = ["aquamarine", "thistle", "blue", "brown", "red", "white", "green", "darkgrey", "cyan", "darkorange", "teal", "tan", "silver"]

function changeColor() {
  var bgcolor = document.getElementById("color-name");
  var randomColor = colorList[Math.floor(Math.random() * colorList.length)];
  bgcolor.innerHTML = randomColor
  document.body.style.backgroundColor = randomColor
}