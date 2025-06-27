const products = [
  { id: 1, name: "Old Navy Men's Polo Shirts", price: 15500, material: "Cotton", image: "https://i.postimg.cc/xCD9qJ9y/men-1.jpg" },

  { id: 2, name: "Stripe Polo-Dream Black and White", price: 12000, material: "Fleece", image: "https://i.postimg.cc/Z5wcTpF2/men-14.jpg" },

  { id: 3, name: "Vertebrate All Over Print Hoodie", price: 20200, material: "Linen", image: "https://i.postimg.cc/CKd4d5c1/men-11.jpg" },

  { id: 4, name: "Sleeveless Cotton Pol", price: 12000, material: "Denim", image: "https://i.postimg.cc/rmrCCbX2/men-15.jpg" },

  { id: 5, name: "Urban Shirt-Stripe", price: 7800, material: "Cotton Blend", image: "https://i.postimg.cc/gjyV1Z2M/men-25.jpg" },

  { id: 6, name: "Barcelonia Hoodie", price: 17500, material: "Genuine Leather", image: "https://i.postimg.cc/fTK7KmFy/men-22.jpg" },

  { id: 7, name: "Zipper Shirt-Dream Gray", price: 14800, material: "Polyester", image: "https://i.postimg.cc/YSJQ934n/men-18.jpg" },

  { id: 8, name: "Modern Nike Hoodie", price: 17500, material: "Wool", image: "https://i.postimg.cc/Hnm50k9b/men-9.jpg" },

  { id: 9, name: "Zipper Shirt-Dream Green", price: 14800, material: "Cotton", image: "https://i.postimg.cc/NG8RsRQD/men-19.jpg" },

  { id: 10, name: "Elite Cookie Hoodie", price: 18800, material: "Twill", image: "https://i.postimg.cc/NjFXkVmC/men-26.jpg" },

  { id: 11, name: "Polo T shirt", price: 10000, material: "Cashmere Blend", image: "https://i.postimg.cc/q7CC93m8/men-16.jpg" },

  { id: 12, name: "Quality Shirt", price: 15000, material: "Suede", image: "https://i.postimg.cc/ZRtyZ5gX/men-4.jpg" },

  { id: 13, name: "Chic Hoodie-OffWhite", price: 17000, material: "Linen", image: "https://i.postimg.cc/hPPQKwy4/men-21.jpg" },

  { id: 14, name: "Quality Polo", price: 10000, material: "Wool Blend", image: "https://i.postimg.cc/k4vDmFWt/men-2.jpg" },

  { id: 15, name: " Blazer Polo", price: 11000, material: "Wool Blend", image: "https://i.postimg.cc/1Xdwb1xz/new-1.jpg" },

  { id: 16, name: "Sweatshirts American Vintage Polo", price: 18000, material: "Wool Blend", image: "https://i.postimg.cc/L6rjTSBC/new-2.jpg" },

  { id: 17, name: "Green and Gray Quality Shirt", price: 18000, material: "Wool Blend", image: "https://i.postimg.cc/MGwRCYL1/new-3.jpg" },

  { id: 18, name: "Coreevory Polo Tee", price: 11000, material: "Wool Blend", image: "https://i.postimg.cc/sgYG4h2x/new-4.jpg" },

  { id: 19, name: "Wild Robot RoundNeck Hoodie", price: 15000, material: "Wool Blend", image: "https://i.postimg.cc/sxGvQB8V/new-5.jpg" },

  { id: 20, name: "Dapper Shirt", price: 13000, material: "Wool Blend", image: "https://i.postimg.cc/xTH3BqCD/new-10.jpg" },

  { id: 21, name: "Floral Jacket-Dream Design", price: 32000, material: "Wool Blend", image: "https://i.postimg.cc/g0MV3ZMR/new-11.jpg" },

  { id: 22, name: "Design Polo -Gray", price: 12000, material: "Wool Blend", image: "https://i.postimg.cc/KzwtHyh8/new-12.jpg" },

  { id: 23, name: "Designers Jean Shirt", price: 20000, material: "Wool Blend", image: "https://i.postimg.cc/PfvW8N1p/new-13.jpg" },

  { id: 24, name: "Designers Jean Shirt-Cow boy", price: 20000, material: "Wool Blend", image: "https://i.postimg.cc/TYrnCS7T/new-20.jpg" }


];

 const cart = {};
    const cartCount = document.getElementById("cartCount");
    const cartIcon = document.getElementById("cartIcon");
    const productGrid = document.getElementById("productGrid");

    function renderProduct(product) {
      const box = document.createElement("div");
      box.className = "product-card";
      box.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy" onclick="openImageModal('${product.image}')" onerror="this.src='https://via.placeholder.com/200?text=Image+Not+Found'">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p><strong>₦${product.price.toLocaleString()}</strong></p>
        </div>
        <div class="cart-controls" id="cart-controls-${product.id}">
          ${cart[product.id] ? `
            <button onclick="subtractFromCart(${product.id})">-</button>
            <span>${cart[product.id]}</span>
            <button onclick="addToCart(${product.id})">+</button>
            <button onclick="cancelFromCart(${product.id})">Cancel</button>
          ` : `
            <button class="cart-btn" onclick="addToCart(${product.id})">Buy</button>
          `}
        </div>
      `;
      return box;
    }

    function renderProducts() {
      if (productGrid) {
        productGrid.innerHTML = "";
        products.forEach(product => {
          productGrid.appendChild(renderProduct(product));
        });
      }
    }

    function addToCart(id) {
      const product = products.find(p => p.id === id);
      if (!product) {
        console.error(`Product with ID ${id} not found`);
        return;
      }
      cart[id] = (cart[id] || 0) + 1;
      updateCartCount();
      renderProducts();
    }

    function subtractFromCart(id) {
      if (cart[id]) {
        cart[id]--;
        if (cart[id] === 0) delete cart[id];
        updateCartCount();
        renderProducts();
      }
    }

    function cancelFromCart(id) {
      if (cart[id]) {
        delete cart[id];
        updateCartCount();
        renderProducts();
      }
    }

    function updateCartCount() {
      let count = 0;
      for (let id in cart) count += cart[id];
      if (cartCount) cartCount.textContent = count;
      if (cartIcon) cartIcon.setAttribute("data-count", count);
    }

    function showCartSummary() {
      const modal = document.createElement("div");
      modal.className = "modal";
      let content = `
        <h2>Cart Summary</h2>
        ${Object.keys(cart).length === 0 ? "<p>Your cart is empty.</p>" : `
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
              ${Object.keys(cart).map(id => {
                const product = products.find(p => p.id == id);
                return `
                  <tr>
                    <td><img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/50?text=Image+Not+Found'"></td>
                    <td>${product.name}</td>
                    <td>${cart[id]}</td>
                    <td>₦${(product.price * cart[id]).toLocaleString()}</td>
                    <td>
                      <button class="remove-one" data-id="${id}">Reduce</button>
                      <button class="cancel-item" data-id="${id}">Cancel</button>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
          <div class="total">Total: ₦${Object.keys(cart).reduce((sum, id) => sum + products.find(p => p.id == id).price * cart[id], 0).toLocaleString()}</div>
        `}
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
      if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
        return;
      }
      let message = "🛍️ *Order Summary:*\n";
      for (let id in cart) {
        const product = products.find(p => p.id == id);
        message += `\n- ${product.name} (${cart[id]}x)\nPrice: ₦${product.price.toLocaleString()}\nImage: ${product.image}\n`;
      }
      const total = Object.keys(cart).reduce((sum, id) => sum + products.find(p => p.id == id).price * cart[id], 0);
      message += `\n*Total:* ₦${total.toLocaleString()}`;
      try {
        const whatsappURL = `https://wa.me/+23407084544389?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
      } catch (e) {
        alert("Unable to open WhatsApp. Please try again.");
      }
    }

    // Image Modal Functions
    function openImageModal(imageSrc) {
      const modal = document.getElementById('imageModal');
      const modalImage = document.getElementById('modalImage');
      modal.style.display = 'flex';
      modalImage.src = imageSrc;
    }

    function closeImageModal() {
      const modal = document.getElementById('imageModal');
      modal.style.display = 'none';
    }

    // Close image modal when clicking outside the image
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
      imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
          closeImageModal();
        }
      });
    }

// modalEnhancements.js
// Enhances the image modal with full-screen view, zoom, and pan functionality

function enhanceImageModal() {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  let scale = 1;
  let isDragging = false;
  let startX, startY, translateX = 0, translateY = 0;

  // Zoom function
  window.zoomImage = function(factor) {
    scale *= factor;
    scale = Math.min(Math.max(0.5, scale), 3); // Limit zoom: 0.5x to 3x
    updateTransform();
  };

  // Reset zoom and pan
  window.resetZoom = function() {
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
  modalImage.addEventListener('mousedown', (e) => {
    if (scale > 1) {
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      modalImage.style.cursor = 'grabbing';
      e.preventDefault();
    }
  });

  modal.addEventListener('mousemove', (e) => {
    if (isDragging) {
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      updateTransform();
    }
  });

  modal.addEventListener('mouseup', () => {
    isDragging = false;
    modalImage.style.cursor = 'grab';
  });

  modal.addEventListener('mouseleave', () => {
    isDragging = false;
    modalImage.style.cursor = 'grab';
  });

  // Mouse wheel zoom
  modalImage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.1 : 0.9;
    zoomImage(factor);
  });

  // Enhance openImageModal to reset zoom and add show class
  const originalOpenImageModal = window.openImageModal || function(imageSrc) {
    modal.style.display = 'flex';
    modalImage.src = imageSrc;
  };
  window.openImageModal = function(imageSrc) {
    originalOpenImageModal(imageSrc);
    resetZoom();
    modal.classList.add('show');
  };

  // Enhance closeImageModal for smooth transition
  const originalCloseImageModal = window.closeImageModal || function() {
    modal.style.display = 'none';
  };
  window.closeImageModal = function() {
    modal.classList.remove('show');
    setTimeout(() => originalCloseImageModal(), 300);
  };
}

// Initialize enhancement
window.addEventListener('DOMContentLoaded', () => {
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
    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
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
      if (cartIcon) cartIcon.addEventListener("click", showCartSummary);
    });

     (function () {
      const savedTheme = localStorage.getItem("theme") || 
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", savedTheme);
    })();

    function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
  }

  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropbtn")) {
      document.querySelectorAll(".dropdown-content").forEach(menu => {
        menu.classList.remove("show");
      });
    }
  });
