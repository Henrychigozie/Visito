const products = [
  {
    id: 301,
    name: "New York Yankees MVP",
    price: 9000,
    image: "https://i.postimg.cc/KYW7Zbmh/caps-9.jpg",
  },

  {
    id: 302,
    name: "Webbing Belt with Metal Buckle ",
    price: 9500,
    image: "https://i.postimg.cc/qqV83Gtm/belt-3.jpg",
  },

  {
    id: 303,
    name: "Graffiti Head Warmer",
    price: 6200,
    image: "https://i.postimg.cc/sDzYfwCx/caps-11.jpg",
  },

  {
    id: 304,
    name: "Prada Men’s FW20 Unveiled a Couple Cool New Bags ",
    price: 12000,
    image: "https://i.postimg.cc/RVbbWkSG/accessories-29.jpg",
  },

  {
    id: 305,
    name: "New York Yankees MVP",
    price: 9000,
    image: "https://i.postimg.cc/fTvxVmMK/caps-13.jpg",
  },

  {
    id: 306,
    name: "Louis Vutton Hand Bag Black",
    price: 30500,
    image: "https://i.postimg.cc/W1b0gz3P/bag-13.jpg",
  },

  {
    id: 307,
    name: "Bolsa De Ombro Bts Boston",
    price: 48000,
    image: "https://i.postimg.cc/9fs96BBW/bag-10.jpg",
  },

  {
    id: 308,
    name: "Kanta Cap",
    price: 8500,
    image: "https://i.postimg.cc/QxB3tkgL/caps-5.jpg",
  },

  {
    id: 309,
    name: "Bolsas De Crocodilo Luxo",
    price: 65000,
    image: "https://i.postimg.cc/j2b75d9m/bag-11.jpg",
  },

  {
    id: 310,
    name: "Harlee Shoulder Bag - Brown",
    price: 10000,
    image: "https://i.postimg.cc/4yQhhRRd/bag-21.jpg",
  },

  {
    id: 311,
    name: "Women's 3-Layer Genuine Leather Luxury Designer Casual Tote Handbags",
    price: 80000,
    material: "Cashmere Blend",
    image: "https://i.postimg.cc/PrdDnJ18/bag-35.jpg",
  },

  {
    id: 312,
    name: "Vicky Unisex Full Rim Square Double Bridge  Aluminum Titanium V2239 - +100 _ ZY-20239-C1",
    price: 15000,
    image: "https://i.postimg.cc/QxST8DqY/others-1.jpg",
  },

  {
    id: 313,
    name: "Lethal Business Neck Tie",
    price: 12000,
    image: "https://i.postimg.cc/520Fjr74/others-5.jpg",
  },

  {
    id: 314,
    name: "Cotton Bachman Beret",
    price: 11000,
    image: "https://i.postimg.cc/MTkcPpWH/caps-12.jpg",
  },

  {
    id: 315,
    name: "BirdinBag - Senior sentido de cocodrilo pequeño bolso ",
    price: 20000,
    image: "https://i.postimg.cc/sXpMtCXc/bag-7.jpg",
  },

  {
    id: 316,
    name: "Louis Vutton-NBA White",
    price: 19500,
    image: "https://i.postimg.cc/QChFDYKr/bag-2.jpg",
  },

  {
    id: 317,
    name: "Cabas-Office Handbag",
    price: 20000,
    material: "Wool Blend",
    image: "https://i.postimg.cc/NfGKPVw6/bag-14.jpg",
  },

  {
    id: 318,
    name: "Rich or Dead Cap",
    price: 9500,
    image: "https://i.postimg.cc/9QKz0Qwb/caps-7.jpg",
  },

  {
    id: 319,
    name: "Kocolior Unisex Full Rim Square Carbon Fibre Tr 90 Hyperopic Reading Glasses 0017 - Black _ +325",
    price: 18000,
    image: "https://i.postimg.cc/9f907HGh/others-4.jpg",
  },

  {
    id: 320,
    name: "Fendi  Nano Fendigraphy  Bag",
    price: 19400,
    image: "https://i.postimg.cc/x8f1hkBf/bag-18.jpg",
  },

  {
    id: 321,
    name: "31 Hats LA Chrome II",
    price: 9500,
    image: "https://i.postimg.cc/yN06NXH6/caps-1.jpg",
  },

  {
    id: 322,
    name: "Sling Bag-USB port",
    price: 25000,
    image: "https://i.postimg.cc/c46s3NSb/bag-37.jpg",
  },

  {
    id: 323,
    name: "Louis Vutton Belt-Blue",
    price: 18000,
    image: "https://i.postimg.cc/6pvtHLTV/belt-1.jpg",
  },

  {
    id: 324,
    name: "Louis Vutton Belt-Black",
    price: 18000,
    material: "Wool Blend",
    image: "https://i.postimg.cc/g0ydpzVn/belt-7.jpg",
  },
];

// Use shared cart API
const cartCount = document.getElementById("cartCount");
const cartIcon = document.getElementById("cartIcon");
const productGrid = document.getElementById("productGrid");

function renderProduct(product) {
  const cart = window.cartAPI.getCart();
  const cartItem = cart.find((item) => item.id === product.id);
  const box = document.createElement("div");
  box.className = "product-card";
  box.innerHTML = `
        <img src="${product.image}" alt="${
    product.name
  }" loading="lazy" onclick="openImageModal('${
    product.image
  }')" onerror="this.src='https://via.placeholder.com/200?text=Image+Not+Found'">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p><strong>₦${product.price.toLocaleString()}</strong></p>
        </div>
        <div class="cart-controls" id="cart-controls-${product.id}">
          ${
            cartItem
              ? `
            <button onclick="subtractFromCart(${product.id})">-</button>
            <span>${cartItem.quantity}</span>
            <button onclick="addToCart(${product.id})">+</button>
            <button onclick="cancelFromCart(${product.id})">Cancel</button>
          `
              : `
            <button class="cart-btn" onclick="addToCart(${product.id})">Buy</button>
          `
          }
        </div>
      `;
  return box;
}

function renderProducts() {
  if (productGrid) {
    productGrid.innerHTML = "";
    products.forEach((product) => {
      productGrid.appendChild(renderProduct(product));
    });
  }
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!product) {
    console.error(`Product with ID ${id} not found`);
    return;
  }
  window.cartAPI.addToCart({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1,
  });
}

function subtractFromCart(id) {
  window.cartAPI.subtractFromCart(id);
}

function cancelFromCart(id) {
  window.cartAPI.cancelFromCart(id);
}

function updateCartCount() {
  const count = window.cartAPI.getCount();
  if (cartCount) cartCount.textContent = count;
  if (cartIcon) cartIcon.setAttribute("data-count", count);
}

function showCartSummary() {
  const cart = window.cartAPI.getCart();
  const modal = document.createElement("div");
  modal.className = "modal";
  let content = `
        <h2>Cart Summary</h2>
        ${
          cart.length === 0
            ? "<p>Your cart is empty.</p>"
            : `
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${cart
                .map(
                  (item) => `
                <tr>
                  <td><img src="${item.image}" alt="${
                    item.name
                  }" style="width: 50px; height: 50px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/50?text=Image+Not+Found'"></td>
                  <td>${item.name}</td>
                  <td>${item.quantity}</td>
                  <td>₦${(item.price * item.quantity).toLocaleString()}</td>
                  <td>
                    <button class="remove-one" data-id="${
                      item.id
                    }">Reduce</button>
                    <button class="cancel-item" data-id="${
                      item.id
                    }">Cancel</button>
                  </td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
          <div class="total">Total: ₦${cart
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toLocaleString()}</div>
        `
        }
        <button class="cart-btn close-btn">Close</button>
        <button class="cart-btn" onclick="sendToWhatsApp()">Order via WhatsApp</button>
      `;
  modal.innerHTML = content;
  document.body.appendChild(modal);

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-one")) {
      const id = parseInt(e.target.dataset.id);
      subtractFromCart(id);
      modal.remove();
      showCartSummary();
    } else if (e.target.classList.contains("cancel-item")) {
      const id = parseInt(e.target.dataset.id);
      cancelFromCart(id);
      modal.remove();
      showCartSummary();
    } else if (e.target.classList.contains("close-btn")) {
      modal.remove();
    }
  });
}

function sendToWhatsApp() {
  const cart = window.cartAPI.getCart();
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  let message = "🛍️ *Order Summary:*\n";
  cart.forEach((item) => {
    message += `\n- ${item.name} (${
      item.quantity
    }x)\nPrice: ₦${item.price.toLocaleString()}\nImage: ${item.image}\n`;
  });
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  message += `\n*Total:* ₦${total.toLocaleString()}`;
  try {
    const whatsappURL = `https://wa.me/+23407084544389?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  } catch (e) {
    alert("Unable to open WhatsApp. Please try again.");
  }
}

// Image Modal Functions
function openImageModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImage.src = imageSrc;
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Close image modal when clicking outside the image
const imageModal = document.getElementById("imageModal");
if (imageModal) {
  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
      closeImageModal();
    }
  });
}

// modalEnhancements.js
// Enhances the image modal with full-screen view, zoom, and pan functionality

function enhanceImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  let scale = 1;
  let isDragging = false;
  let startX,
    startY,
    translateX = 0,
    translateY = 0;

  // Zoom function
  window.zoomImage = function (factor) {
    scale *= factor;
    scale = Math.min(Math.max(0.5, scale), 3); // Limit zoom: 0.5x to 3x
    updateTransform();
  };

  // Reset zoom and pan
  window.resetZoom = function () {
    scale = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();
  };

  // Update image transform
  function updateTransform() {
    modalImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  }

  // Drag to pan
  modalImage.addEventListener("mousedown", (e) => {
    if (scale > 1) {
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      modalImage.style.cursor = "grabbing";
      e.preventDefault();
    }
  });

  modal.addEventListener("mousemove", (e) => {
    if (isDragging) {
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      updateTransform();
    }
  });

  modal.addEventListener("mouseup", () => {
    isDragging = false;
    modalImage.style.cursor = "grab";
  });

  modal.addEventListener("mouseleave", () => {
    isDragging = false;
    modalImage.style.cursor = "grab";
  });

  // Mouse wheel zoom
  modalImage.addEventListener("wheel", (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.1 : 0.9;
    zoomImage(factor);
  });

  // Enhance openImageModal to reset zoom and add show class
  const originalOpenImageModal =
    window.openImageModal ||
    function (imageSrc) {
      modal.style.display = "flex";
      modalImage.src = imageSrc;
    };
  window.openImageModal = function (imageSrc) {
    originalOpenImageModal(imageSrc);
    resetZoom();
    modal.classList.add("show");
  };

  // Enhance closeImageModal for smooth transition
  const originalCloseImageModal =
    window.closeImageModal ||
    function () {
      modal.style.display = "none";
    };
  window.closeImageModal = function () {
    modal.classList.remove("show");
    setTimeout(() => originalCloseImageModal(), 300);
  };
}

// Initialize enhancement
window.addEventListener("DOMContentLoaded", () => {
  enhanceImageModal();
});

// Mode Toggle
const toggle = document.getElementById("modeToggle");
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (toggle) toggle.textContent = theme === "dark" ? "🌑" : "☀️";
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    console.warn("localStorage is disabled; theme won't persist.");
  }
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const current = localStorage.getItem("theme") === "dark" ? "light" : "dark";
    applyTheme(current);
  });
}

// Dropdown Toggle for Mobile
document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = toggle.parentElement;
      parent.classList.toggle("active");
    }
  });
});

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "light";
  applyTheme(saved);
  renderProducts();
  updateCartCount();
  if (cartIcon) cartIcon.addEventListener("click", showCartSummary);
});

// Listen for cart updates
document.addEventListener("cart:updated", () => {
  updateCartCount();
  renderProducts();
});

function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

window.addEventListener("click", function (e) {
  if (!e.target.matches(".dropbtn")) {
    document.querySelectorAll(".dropdown-content").forEach((menu) => {
      menu.classList.remove("show");
    });
  }
});
