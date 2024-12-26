export function attachButtonListeners() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      alert(`Product wasadded to cart!`);
    });
  });
}

