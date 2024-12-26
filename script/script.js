// Menyertakan data
import { products} from "./data.js";

// Manipulasi DOM
const container = document.getElementById("container-product");
products.forEach((product) => {
  // Membuat elemen kartu
  const card = document.createElement("div");
  card.classList.add("card");

  // Menambahkan gambar
  const img = document.createElement("img");
  img.src = product.image;
  img.alt = "product";
  card.appendChild(img);

  // menambahkan card-content
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  // Menambahkan nama produk
  const name = document.createElement("h3");
  name.textContent = product.name;
  cardContent.appendChild(name);

  // Menambahkan harga
  const price = document.createElement("p");
  price.textContent = "$" + product.price;
  cardContent.appendChild(price);

  // Menambahkan card-content ke card
  card.appendChild(cardContent);

  // Menambahkan tombol
  const button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = "Add to Cart";
  card.appendChild(button);

  // Menambahkan kartu ke container
  container.appendChild(card);
});

// Menambahkan event listener ke tombol
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Menampilkan alert
    alert("Product added to cart!");
  });
});

