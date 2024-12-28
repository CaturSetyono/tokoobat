import { products } from "../product.js";
import { createCard } from "./promote.js";

export function promoteCategory(category) {
  // Ambil elemen container
  const container = document.querySelector(".container-promote");

  // Filter produk berdasarkan kategori
  const filteredProducts = products.filter(
    (product) => product.categories === category
  );

  // Render kartu produk
  filteredProducts.forEach((product) => {
    const productCard = createCard(product);
    container.appendChild(productCard);
  });
}
export function promoteName(name) {
  // Ambil elemen container
  const container = document.querySelector(".container-promote");

  // Filter produk berdasarkan kategori
  const filteredProducts = products.filter(
    (product) => product.name === name
  );

  // Render kartu produk
  filteredProducts.forEach((product) => {
    const productCard = createCard(product);
    container.appendChild(productCard);
  });
}
