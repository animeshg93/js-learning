const colorList = ["aquamarine", "thistle", "blue", "brown", "red", "white", "green", "darkgrey", "cyan", "darkorange", "teal", "tan", "silver"]

function changeColor() {
  var bgcolor = document.getElementById("color-name");
  var randomColor = colorList[Math.floor(Math.random() * colorList.length)];
  bgcolor.innerHTML = randomColor
  document.body.style.backgroundColor = randomColor
}

function changeHex() {
  var bgcolor = document.getElementById("color-name");
  var randomColor = getRandomColor();
  bgcolor.innerHTML = randomColor
  document.body.style.backgroundColor = randomColor
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}