// Mengambil data dari local storage
const cartData = localStorage.getItem('cart');

// Memeriksa apakah data ada
if (cartData) {
  // Jika ada, parse data dari JSON ke objek JavaScript
  const cartArray = JSON.parse(cartData);
  
  // Menampilkan array di konsol
  console.log(cartArray);
  
  // Anda dapat menggunakan cartArray di sini
  // Misalnya, iterasi melalui array dan menampilkan nama produk
  cartArray.forEach(product => {
    console.log(`Product Name: ${product.name}, Price: $${product.price}`);
  });
} else {
  console.log('Cart is empty or does not exist.');
}