import { dataBlog } from "../../script/blog.js";

const mainContainer = document.querySelector('.main');

// Clear existing content
mainContainer.innerHTML = '';

// Load blog cards dynamically
dataBlog.forEach(blog => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="card-content">
      <h3>${blog.title}</h3>
      <p>${blog.description}</p>
    </div>
     <img src="${blog.image}" alt="${blog.title}">
  `;

  mainContainer.appendChild(card);
});
