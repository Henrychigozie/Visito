const products = [
  {
    id: 201,
    name: "Cider Top-Raglan Long Sleeve",
    price: 10000,
    material: "Cotton",
    image:
      "https://i.postimg.cc/CKtbWyKk/1b58e5f2-74df-45a9-8bb1-9ba2ca7f55a3.jpg",
  },
  {
    id: 202,
    name: "Floral Knitted Sweaters-Olive Green",
    price: 12000,
    material: "Fleece",
    image:
      "https://i.postimg.cc/fTZY4fM2/4a38cb97-6cbe-41ed-9c2e-ef1f5ea287f5.jpg",
  },
  {
    id: 203,
    name: "Bodysuit-White",
    price: 8000,
    material: "Linen",
    image:
      "https://i.postimg.cc/GhC3qMb2/268a2ce8-8c83-4529-bec7-fce8d5b30ab9.jpg",
  },
  {
    id: 204,
    name: "Women Autumn Winter Denim Coat ",
    price: 15000,
    material: "Denim",
    image: "https://i.postimg.cc/ZKd3ysV5/female-5.jpg",
  },
  {
    id: 205,
    name: "Acadia Waves Trail High Pile Fleece",
    price: 30000,
    material: "Cotton Blend",
    image: "https://i.postimg.cc/cJX8Np4X/female-8.jpg",
  },
  {
    id: 206,
    name: "Accep Jacket - US 8 _ Neutral _ Burlap",
    price: 25500,
    material: "Genuine Leather",
    image: "https://i.postimg.cc/VvJpzP9w/Accep-Jacket-US-8-Neutral-Burlap.jpg",
  },
  {
    id: 207,
    name: "Achock Basic AC Logo Print Tee - XXL _ lightcoral",
    price: 10000,
    material: "Polyester",
    image: "https://i.postimg.cc/TP7qcLmd/female-10.jpg",
  },
  {
    id: 208,
    name: "Balmain Halterneck Top",
    price: 10500,
    material: "Wool",
    image: "https://i.postimg.cc/59p20Bwk/Balmain-Halterneck-Top-38.jpg",
  },
  {
    id: 209,
    name: "Vetements Destroyed Baggy Denim Jeans - Light Blue",
    price: 18000,
    material: "Cotton",
    image: "https://i.postimg.cc/4NFq8vr4/female-35.jpg",
  },
  {
    id: 210,
    name: "Bolt Cardigan Sweater - Black_White_Grey",
    price: 28000,
    material: "Twill",
    image:
      "https://i.postimg.cc/K8p9vHzv/Bolt-Cardigan-Sweater-3-X-Black-White-Grey.jpg",
  },
  {
    id: 211,
    name: "Chic Summer Knit Hollow Out Sleeveless Tank Top - Gray _ M",
    price: 10500,
    material: "Cashmere Blend",
    image: "https://i.postimg.cc/cCNK70D1/female-13.jpg",
  },
  {
    id: 212,
    name: "Color Block Knitted Tight-fitting T-shirt With Contrast Collar",
    price: 15000,
    material: "Suede",
    image:
      "https://i.postimg.cc/wTmxkSCn/Color-Block-Knitted-Tight-fitting-T-shirt-With-Contrast-Collar.jpg",
  },
  {
    id: 213,
    name: "Cropped Oversized Polo -BLACK DENIM - BLACK",
    price: 30000,
    material: "Linen",
    image:
      "https://i.postimg.cc/zBBPkYch/CROPPED-OVERSIZED-POLO-BLACK-DENIM-XS-BLACK.jpg",
  },
  {
    id: 214,
    name: "Denim Hit Wide - Brown",
    price: 28000,
    material: "Wool Blend",
    image: "https://i.postimg.cc/XvMC8f1k/Denim-Hit-Wide-Brown-S.jpg",
  },
  {
    id: 215,
    name: "Designer T-Shirts",
    price: 18000,
    material: "Wool Blend",
    image: "https://i.postimg.cc/qMkQcT6v/Designer-T-Shirts-for-Women.jpg",
  },
  {
    id: 216,
    name: "Gathered jersey top in black - Versace _ Mytheresa",
    price: 18000,
    material: "Wool Blend",
    image: "https://i.postimg.cc/9MB2S2mQ/female-19.jpg",
  },
  {
    id: 217,
    name: "Harsh and Cruel Striped Logo Knit Sweater - L _ green",
    price: 28000,
    material: "Wool Blend",
    image: "https://i.postimg.cc/Fs64wD43/female-21.jpg",
  },
  {
    id: 218,
    name: "Purple Brand P018 Verditer Destroyed Jeans - Light Blue",
    price: 28000,
    material: "Wool Blend",
    image:
      "https://i.postimg.cc/W4Jdqd2q/Purple-Brand-P018-Verditer-Destroyed-Jeans-Light-Blue.jpg",
  },

  {
    id: 219,
    name: "Lena Hoschek Fashion Collections For Women _ Moda Operandi",
    price: 20000,
    material: "Wool Blend",
    image:
      "https://i.postimg.cc/qvrrxgXC/Lena-Hoschek-Fashion-Collections-For-Women-Moda-Operandi.jpg",
  },

  {
    id: 220,
    name: "Letter Patched Detail Bandana Hem Tank Top",
    price: 10000,
    material: "Wool Blend",
    image: "https://i.postimg.cc/904x9PnH/female-24.jpg",
  },

  {
    id: 21,
    name: "Unisex Vintage Jacquard Pattern Short Sleeve Knit Top",
    price: 18000,
    material: "Wool Blend",
    image: "https://i.postimg.cc/P5bS152J/female-26.jpg",
  },

  {
    id: 222,
    name: "Off Shoulder One Piece Swimsuit Sexy Women Swimwear",
    price: 23000,
    material: "Wool Blend",
    image: "https://i.postimg.cc/N0pbPPhw/female-27.jpg",
  },

  {
    id: 223,
    name: "Leila Dress",
    price: 18000,
    material: "Wool Blend",
    image: "https://i.postimg.cc/BvYk1vnD/female-22.jpg",
  },

  {
    id: 224,
    name: "Women's Apricot Drawstring Asymmetric Hem Flared Sleeve T-Shirt,Off Shoulder T-Shirt",
    price: 21500,
    material: "Wool Blend",
    image: "https://i.postimg.cc/QdSnRM5P/female-38.jpg",
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
                    }">Remove</button>
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
