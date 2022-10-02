let colors = [
  "#7b5fc9",
  "#c9be5f",
  "#5fc9c9",
  "#c95fbb",
  "#c95f5f",
  "#70c95f",
  "#b6b2c2",
];

let button = document.querySelector(".icon-color ");

button.addEventListener("click", () => {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];

  let body = document.querySelector("body");
  let butt = document.querySelector("button");

  body.style.background = randomColor;
  butt.style.background = randomColor;
});
