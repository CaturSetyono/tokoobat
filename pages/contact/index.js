// Formulir Kontak - Validasi dan Penanganan Pengiriman
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah formulir dikirimkan secara langsung
  
    // Mengambil nilai dari input formulir
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    // Validasi sederhana
    if (name && email && phone && message) {
      // Menampilkan pesan sukses
      document.getElementById('form-message').innerHTML = "Pesan Anda telah berhasil dikirim. Terima kasih!";
      document.getElementById('form-message').classList.remove('error');
      document.getElementById('form-message').classList.add('success');
  
      // Mengosongkan form setelah pengiriman
      document.getElementById('contact-form').reset();
    } else {
      // Menampilkan pesan kesalahan
      document.getElementById('form-message').innerHTML = "Mohon lengkapi semua kolom sebelum mengirim!";
      document.getElementById('form-message').classList.remove('success');
      document.getElementById('form-message').classList.add('error');
    }
  });
  