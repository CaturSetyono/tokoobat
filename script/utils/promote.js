export function createCard(product) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const img = document.createElement("img");
    img.src =`../.${product.image}`;
    img.alt = product.name;
    card.appendChild(img);
  
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
  
    const name = document.createElement("h3");
    name.textContent = product.name;
    cardContent.appendChild(name);
  
    const price = document.createElement("p");
    price.textContent = `$${product.price}`;
    cardContent.appendChild(price);
  
    card.appendChild(cardContent);
  
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = "Add to Cart";
    button.dataset.productId = product.id; // Menyimpan ID produk
    card.appendChild(button);
  
    return card;
  }
  