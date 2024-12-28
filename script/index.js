import { products } from "./product.js";
import { renderProducts } from "./utils/renderProducts.js";
import { searchProducts } from "./utils/search.js";
import { attachButtonListeners } from "./utils/eventHandler.js";

// Manipulasi DOM
const container = document.getElementById("container-product");
const inputSearch = document.querySelector(".search-bar");
const searchButton = document.getElementById("btn-search");

// Variabel untuk menyimpan status pencarian
let isSearching = false;

// Fungsi untuk menampilkan semua produk
function displayAllProducts() {
  renderProducts(products, container);
  attachButtonListeners(); // Pastikan tombol berfungsi
}

// Fungsi untuk menampilkan hasil pencarian
function handleSearch() {
  const query = inputSearch.value.toLowerCase();

  if (query.trim() === "") {
    isSearching = false; // Tidak ada input, kembali ke tampilan semua produk
    displayAllProducts();
  } else {
    isSearching = true; // Mode pencarian aktif
    const filteredProducts = searchProducts(products, query);
    renderProducts(filteredProducts, container);
    attachButtonListeners(); 
  }
}

// Event listener
searchButton.addEventListener("click", handleSearch);
inputSearch.addEventListener("input", handleSearch);

// Tampilkan semua produk saat halaman dimuat
displayAllProducts();
