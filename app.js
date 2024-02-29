const board = document.querySelector("#board");
const colors = [
  "#d5fcc3",
  "#339933",
  "#694d94",
  "#640080",
  "#a70000",
  "#6fa8dc",
  "#fdf1cb",
  "#ffffff",
];
const SQUARES_NUMBER = 300;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => reemoveColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function reemoveColor(element) {
  element.style.backgroundColor = "#a39595";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
