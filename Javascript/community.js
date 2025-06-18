// Theme Toggle
const toggle = document.getElementById("modeToggle");
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (toggle) toggle.textContent = theme === "dark" ? "🌑" : "☀️";
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    console.warn("localStorage is disabled; theme won't persist.", e);
  }
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(current);
  });
}

// Initialize Theme
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "light";
  applyTheme(saved);
});