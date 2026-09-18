const container = document.querySelector(".container");

// Create 16 x 16 = 256 divs
for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.append(square);
}
