export function attachButtonListeners() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Ambil elemen card yang sesuai dengan tombol yang diklik
      const card = event.target.closest(".card");
      if (card) {
        // Ambil nilai dari properti card
        const name = card.querySelector("h3").textContent; // Mengambil nama produk
        const price = parseFloat(
          card.querySelector("p").textContent.replace("$", "")
        ); // Mengambil harga produk
        const image = card.querySelector("img").src; // Mengambil URL gambar produk

        // Buat objek produk
        const product = {
          name: name,
          price: price,
          image: image,
        };

        // Ambil cart dari local storage atau buat array baru jika belum ada
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Tambahkan produk ke dalam cart
        cart.push(product);

        // Simpan kembali cart ke local storage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Tampilkan alert
        alert(`Product ${name} was added to cart!`);
      }
    });
  });
}


