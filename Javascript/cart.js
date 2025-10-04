(function () {
  const CART_KEY = "myCart";

  function loadCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function getCart() {
    return loadCart();
  }

  function setCart(cart) {
    saveCart(cart);
    dispatchUpdate();
  }

  function addToCart(product) {
    // product: { id, name, price, image, quantity }
    const cart = loadCart();
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += product.quantity || 1;
    } else {
      product.quantity = product.quantity || 1;
      cart.push(product);
    }
    saveCart(cart);
    dispatchUpdate();
  }

  function subtractFromCart(productId) {
    const cart = loadCart();
    const product = cart.find((item) => item.id === productId);
    if (product) {
      product.quantity -= 1;
      if (product.quantity <= 0) {
        cancelFromCart(productId);
        return;
      }
    }
    saveCart(cart);
    dispatchUpdate();
  }

  function cancelFromCart(productId) {
    const cart = loadCart();
    const newCart = cart.filter((item) => item.id !== productId);
    saveCart(newCart);
    dispatchUpdate();
  }

  function clearCart() {
    saveCart([]);
    dispatchUpdate();
  }

  function getCount() {
    const cart = loadCart();
    return cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  }

  function dispatchUpdate() {
    document.dispatchEvent(
      new CustomEvent("cart:updated", {
        detail: { count: getCount(), cart: loadCart() },
      })
    );
  }

  window.cartAPI = {
    getCart,
    setCart,
    addToCart,
    subtractFromCart,
    cancelFromCart,
    clearCart,
    getCount,
  };
})();
