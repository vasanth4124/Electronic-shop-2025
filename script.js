const products = [
  {
    id: 1,
    category: "Laptop",
    name: "ASUS VivoBook 15",
    price: 49990,
    image: "./asus lap 2.jpg"
  },
  {
    id: 2,
    category: "Mobile",
    name: "Vivo Y400 5G",
    price: 26999,
    image: "./vivo 2.png"
  },
  {
    id: 3,
    category: "Smart Watch",
    name: "Fire-Boltt Talk",
    price: 999,
    image: "./fire bolt img 2.jpg"
  },
  {
    id: 4,
    category: "Laptop",
    name: "Dell 15 Ryzen",
    price: 36680,
    image: "./dell img 1.jpg"
  },
  {
    id: 5,
    category: "Smart Watch",
    name: "Boat Lunar Discovery",
    price: 1499,
    image: "./boat 1.png"
  },
  {
    id: 6,
    category: "Mobile",
    name: "Oppo F31 Pro 5G",
    price: 30999,
    image: "./oppo 1.jpg"
  },
  {
    id: 7,
    category: "Mobile",
    name: "Google Pixel 9",
    price: 60900,
    image: "./google 1.jpg"
  },
  {
    id: 8,
    category: "Laptop",
    name: "Lenovo V15",
    price: 42980,
    image: "./lenova 1.jpg"
  },
  {
    id: 9,
    category: "Smart Watch",
    name: "Apple Watch Ultra 3",
    price: 104900,
    image: "./apple 1.png"
  }
];

// Load Products
function displayProducts(items) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  items.forEach(product => {
    container.innerHTML += `
      <div class="cart">
        <div class="card bg-dark text-white h-100">
          <img src="${product.image}" class="card-img-top" />
          <div class="card-body d-flex flex-column">
            <h5>${product.name}</h5>
            <p>₹${product.price}</p>

            <div class="mt-auto">
              <button class="btn btn-success w-100 mb-2"
                onclick="addToCart(${product.id})">
                Add to Cart 🛒
              </button>

              <a href="${product.link}"
                 target="_blank"
                 class="btn btn-primary w-100">
                 Show price
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}


// Filter Products
function filterProducts(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}


// Cart Logic
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} added to cart`);
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").innerText = cart.length;
}

// Initial Load
displayProducts(products);
updateCartCount();
