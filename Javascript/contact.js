document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const toggle = document.getElementById('modeToggle');
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (toggle) toggle.textContent = theme === "dark" ? "🌑" : "☀️";
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.warn('localStorage is disabled; theme won\'t persist.', e);
    }
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(current);
    });
  }

  const saved = localStorage.getItem('theme') || 'light';
  applyTheme(saved);

  // Page Transition
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.add('page-exit');
      setTimeout(() => {
        window.location.href = link.href;
      });
    });
  });

  // Remove exit animation class after load
  if (document.body.classList.contains('page-exit')) {
    document.body.classList.remove('page-exit');
  }

  // Contact Form
  const form = document.querySelector('#contact-form');
  const messageElement = document.querySelector('#form-message');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      messageElement.textContent = '';
      messageElement.className = 'form-message';

      const mobile = form.mobile.value.trim();
      const queryType = form['query-type'].value;
      const userMessage = form.message.value.trim();

      // Client-side validation
      if (!/^\+?[0-9]{10,15}$/.test(mobile)) {
        messageElement.textContent = 'Please enter a valid mobile number (10-15 digits).';
        messageElement.classList.add('error');
        return;
      }
      if (!queryType) {
        messageElement.textContent = 'Please select a query type.';
        messageElement.classList.add('error');
        return;
      }
      if (userMessage.length < 10) {
        messageElement.textContent = 'Message must be at least 10 characters long.';
        messageElement.classList.add('error');
        return;
      }

      try {
        const response = await fetch('https://formspree.io/f/mjkgkqdd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            mobile,
            queryType,
            message: userMessage
          })
        });

        const result = await response.json();
        if (response.ok) {
          messageElement.textContent = 'Your message has been sent successfully!';
          messageElement.classList.add('success');
          form.reset();
        } else {
          messageElement.textContent = result.error || 'Failed to send message. Please try again.';
          messageElement.classList.add('error');
        }
      } catch (error) {
        messageElement.textContent = 'An error occurred. Please try again later.';
        messageElement.classList.add('error');
      }
    });
  }
});




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