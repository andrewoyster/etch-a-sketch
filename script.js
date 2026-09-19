const container = document.querySelector(".container");
const inputButton = document.querySelector(".userInput");
const maxValue = 100;

inputButton.addEventListener("click", function () {
  let userInput = prompt("How many squares would you like per side?");
  if (userInput > maxValue) {
    userInput = maxValue;
  }
  container.replaceChildren();
  createDivs(userInput);
});

function createDivs(userInput) {
  const squareSize = 960 / userInput;
  // Create 16 x 16 = 256 divs
  for (let i = 0; i < userInput * userInput; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.append(square);
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
  }
}

createDivs(16);
