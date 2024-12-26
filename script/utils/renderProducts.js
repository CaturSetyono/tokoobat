import { createCard } from "./card.js";

export function renderProducts(productsToRender, container) {
  container.innerHTML = ""; // Bersihkan kontainer sebelum render ulang
  if (productsToRender.length === 0) {
    container.innerHTML = "<p>Produk tidak ditemukan.</p>";
    return;
  }

  productsToRender.forEach((product) => {
    const card = createCard(product);
    container.appendChild(card);
  });
}
