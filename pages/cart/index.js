// Fungsi untuk menampilkan cart items di left-container
function displayCartItems() {
  const cartData = localStorage.getItem("cart");

  if (cartData) {
    const cartArray = JSON.parse(cartData);
    const cartContainer = document.querySelector(".cart-container");
    cartContainer.innerHTML = "";

    cartArray.forEach((product) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      cartItem.innerHTML = `
          <div class="cart-image">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="cart-details">
            <div class="cart-item-info">
              <input type="checkbox" class="select-item" />
              <h3>${product.name}</h3>
              <p>$ ${product.price} <span class="original-price">$5000</span></p>
            </div>
            <div class="cart-item-quantity">
              <button class="btn-icon">
                <img src="../../src/icon/icons8-remove.svg" alt="Remove Icon" />
              </button>
              <button class="btn-quantity decrease">-</button>
              <input type="number" value="1" class="item-quantity" min="1" />
              <button class="btn-quantity increase">+</button>
            </div>
          </div>
        `;

      cartContainer.appendChild(cartItem);
    });
  } else {
    console.log("Cart is empty or does not exist.");
  }
}

// Panggil fungsi untuk menampilkan cart items saat halaman dimuat
document.addEventListener("DOMContentLoaded", displayCartItems);

// Fungsi untuk menghapus item dari cart
function removeCartItem() {
  const removeButtons = document.querySelectorAll(".btn-icon");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const cartItem = event.target.closest(".cart-item");
      if (cartItem) {
        const name = cartItem.querySelector("h3").textContent;
        const cart = JSON.parse(localStorage.getItem("cart"));
        const updatedCart = cart.filter((product) => product.name !== name);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        cartItem.remove();
        updateCheckoutSummary(); // Update summary after removal
      }
    });
  });
}

// Fungsi untuk mengatur jumlah item
function setupQuantityButtons() {
  const cartItems = document.querySelectorAll(".cart-item");
  cartItems.forEach((item) => {
    const decreaseButton = item.querySelector(".decrease");
    const increaseButton = item.querySelector(".increase");
    const quantityInput = item.querySelector(".item-quantity");

    decreaseButton.addEventListener("click", () => {
      let quantity = parseInt(quantityInput.value);
      if (quantity > 1) {
        quantityInput.value = quantity - 1;
        updateCheckoutSummary(); // Update summary on quantity change
      }
    });

    increaseButton.addEventListener("click", () => {
      let quantity = parseInt(quantityInput.value);
      quantityInput.value = quantity + 1;
      updateCheckoutSummary(); // Update summary on quantity change
    });
  });
}

// Fungsi untuk mengupdate checkout summary
function updateCheckoutSummary() {
  const selectedItems = document.querySelectorAll(".select-item:checked");
  const summaryContainer = document.querySelector(".checkout-summary");
  summaryContainer.innerHTML = ""; // Clear previous summary

  const summaryTitle = document.createElement("h1");
  summaryTitle.textContent = "Ringkasan Belanja";
  summaryContainer.appendChild(summaryTitle);

  const summaryItemsContainer = document.createElement("div");
  summaryItemsContainer.classList.add("summary-item");
  summaryContainer.appendChild(summaryItemsContainer);

  let totalCheckoutPrice = 0;

  if (selectedItems.length === 0) {
    summaryItemsContainer.innerHTML = `
        <p>Total</p>
        <p>-</p>
      `;
    const promoCode = document.createElement("div");
    promoCode.classList.add("promo-code");
    promoCode.innerHTML = `<p>Pilih barang dulu sebelum pakai promo</p>`;
    summaryContainer.appendChild(promoCode);

    const checkoutButton = document.createElement("button");
    checkoutButton.classList.add("btn-checkout");
    checkoutButton.textContent = "Beli";
    summaryContainer.appendChild(checkoutButton);
    return;
  }

  selectedItems.forEach((checkbox) => {
    const cartItem = checkbox.closest(".cart-item");
    const name = cartItem.querySelector("h3").textContent;
    const price = parseFloat(
      cartItem.querySelector("p").textContent.replace("$ ", "")
    );
    const quantity = parseInt(cartItem.querySelector(".item-quantity").value);
    const total = price * quantity;
    totalCheckoutPrice += total;

    // No longer creating individual summary items here
  });

  const totalSummary = document.createElement("div");
  totalSummary.classList.add("summary-items");
  totalSummary.innerHTML = `
      <div><p>Total</p></div>
       <div><p><b>$${totalCheckoutPrice.toFixed(2)}</b</p></div>
    `;
  summaryItemsContainer.appendChild(totalSummary);

  const promoCode = document.createElement("div");
  promoCode.classList.add("promo-code");
  promoCode.innerHTML = `<p>Masukkan Kode Promo</p>`;
  summaryContainer.appendChild(promoCode);

  const checkoutButton = document.createElement("button");
  checkoutButton.classList.add("btn-checkout");
  checkoutButton.textContent = "Beli";
  summaryContainer.appendChild(checkoutButton);
}

function setupSelectAll() {
  const selectAllCheckbox = document.getElementById("select-all");
  const itemCheckboxes = document.querySelectorAll(".select-item");
  const itemsCountSpan = document.querySelector(".items-count");

  // Set jumlah item awal
  itemsCountSpan.textContent = itemCheckboxes.length;

  selectAllCheckbox.addEventListener("change", function () {
    itemCheckboxes.forEach((checkbox) => {
      checkbox.checked = this.checked; // Sinkronkan status checkbox item dengan "Pilih Semua"
    });
    updateCheckoutSummary(); // Update summary setelah perubahan
  });

  // Tambahkan event listener ke checkbox item individual
  itemCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      // Periksa apakah semua checkbox item sudah dicentang
      const allChecked = Array.from(itemCheckboxes).every((cb) => cb.checked);
      selectAllCheckbox.checked = allChecked;

      updateCheckoutSummary(); // Update summary setelah perubahan
    });
  });
}

function buttonCheckoutListener() {
    // Pasang event listener ke elemen parent yang statis (misalnya, document.body atau container utama)
    document.body.addEventListener("click", (event) => { // Ganti document.body dengan container yang lebih spesifik jika memungkinkan
        if (event.target.classList.contains("btn-checkout")) { // Periksa apakah elemen yang diklik memiliki class "btn-checkout"
            console.log("Tombol Beli diklik");
            const selectedItems = document.querySelectorAll(".select-item:checked");
            console.log("Jumlah item yang dipilih:", selectedItems.length);

            if (selectedItems.length > 0) {
                const cart = JSON.parse(localStorage.getItem("cart"));
                if (cart) {
                    const itemsToRemove = Array.from(selectedItems).map((checkbox) => {
                        const cartItem = checkbox.closest(".cart-item");
                        return cartItem.querySelector("h3").textContent;
                    });

                    const updatedCart = cart.filter((product) => !itemsToRemove.includes(product.name));

                    localStorage.setItem("cart", JSON.stringify(updatedCart));

                    displayCartItems();
                    updateCheckoutSummary();
                    setupSelectAll();

                    alert("Thank you for your purchase!");
                }
            } else {
                alert("Please select items to purchase!");
            }
        }
    });
}


// Panggil fungsi ini saat DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
    setupQuantityButtons();
    removeCartItem();
    setupSelectAll();
    updateCheckoutSummary();
    buttonCheckoutListener(); // Panggil fungsi ini saat DOMContentLoaded

    const checkboxes = document.querySelectorAll(".select-item");
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateCheckoutSummary);
    });
});