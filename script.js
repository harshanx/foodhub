
// Array to hold cart items
let cart = [];

// Function to add items to the cart
function addToCart(item) {
    cart.push(item);
    alert(`${item} added to your cart!`);
    updateCartButton();
}

// Function to display cart items on the cart page
function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    const checkoutButton = document.getElementById("checkout-btn");

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is currently empty.</p>";
        checkoutButton.style.display = "none";
    } else {
        cartItemsContainer.innerHTML = cart
            .map(item => `<p>${item}</p>`)
            .join("");
        checkoutButton.style.display = "block";
    }
}

// Function to update cart button visibility on other pages
function updateCartButton() {
    if (document.getElementById("cart-items")) {
        displayCartItems();
    }
}

// Automatically call displayCartItems if on the cart page
document.addEventListener("DOMContentLoaded", displayCartItems);
