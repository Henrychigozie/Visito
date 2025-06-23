

  document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector('.hero-video');
    const fallbackImage = document.querySelector('.hero-image');

    video.onerror = function () {
      video.style.display = 'none';
      fallbackImage.style.display = 'block';
    };
  });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });






  // Reusable WhatsApp opener
  function openWhatsAppMessage(phoneNumber, message) {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  // WhatsApp order buttons (with price)
  const orderButtons = document.querySelectorAll('.whatsapp-order-button');

  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      const itemName = button.dataset.item;
      const itemPrice = button.dataset.price;
      const itemImage = button.dataset.image;
      const phoneNumber = '23407084544389';

      const message =
        `Hello, I'm interested in buying:\n\n` +
        `*Item:* ${itemName}\n` +
        `*Price:* ${itemPrice}\n` +
        `*Image:* ${itemImage}`;

      openWhatsAppMessage(phoneNumber, message);
    });
  });

  // WhatsApp shop buttons (no price)
  // const shopButtons = document.querySelectorAll('.shop-button');

  // shopButtons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     const productName = button.dataset.name;
  //     const productImage = button.dataset.image;
  //     const phoneNumber = '23407084544389';

  //     const message =
  //       `Hello! I'm interested in:\n\n` +
  //       `*Product:* ${productName}\n` +
  //       `*Image:* ${productImage}`;

  //     openWhatsAppMessage(phoneNumber, message);
  //   });
  // });


  const scrollContainer = document.getElementById('instagram-carousel');
    const btnLeft = document.getElementById('scroll-left');
    const btnRight = document.getElementById('scroll-right');

    btnLeft.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -260, behavior: 'smooth' });
    });
    btnRight.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 260, behavior: 'smooth' });
    });




// Mode Toggle
const toggle = document.getElementById("modeToggle");
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (toggle) toggle.textContent = theme === "dark" ? "🌑" : " ☀️";
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

// Initialize Theme
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "light";
  applyTheme(saved);
});


  // Page Transition
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (!link.classList.contains('dropdown-toggle')) {
        e.preventDefault();
        document.body.classList.add('page-exit');
        setTimeout(() => {
          window.location.href = link.href;
        }, 500);
      }
    });
  });

  // Remove exit animation class after load
  document.body.classList.remove('page-exit');

  // Dropdown Toggle
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdown = toggle.parentElement;
      const isActive = dropdown.classList.contains('active');
      
      // Close other dropdowns
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
      
      // Toggle current dropdown
      if (!isActive) {
        dropdown.classList.add('active');
      }
      
      // Close dropdown when clicking outside
      document.addEventListener('click', function closeDropdown(event) {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove('active');
          document.removeEventListener('click', closeDropdown);
        }
      });
    });
  });


document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior
      const dropdown = toggle.parentElement; // Get the .dropdown div
      dropdown.classList.toggle('active'); // Toggle dropdown visibility
    });
  });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const dropdown = document.querySelector('.dropdown');
      if (!dropdown.contains(e.target) && !dropdownToggle.contains(e.target)) {
        dropdown.classList.remove('active');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Debug clicks
    document.querySelectorAll('.navbar-links a').forEach(link => {
      link.addEventListener('click', () => {
        console.log('Link clicked:', link.href);
      });
    });
  });


const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
});

// Dropdown menu toggle
function toggleDropdown() {
  const dropdown = document.getElementById('dropdownMenu');
  dropdown.classList.toggle('show');
}

// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
  const dropdown = document.getElementById('dropdownMenu');
  const button = document.querySelector('.dropbtn');
  if (!dropdown.contains(e.target) && !button.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});


