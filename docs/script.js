// JavaScript to handle the shopping cart functionality

// Product information
const products = document.querySelectorAll('.item-box');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

let cart = [];
let total = 0;

// Add event listener to each "Add to Cart" button
products.forEach((product) => {
    const addToCartBtn = product.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', addToCart);
});

function addToCart(event) {
    const product = event.target.parentElement;
    const productName = product.getAttribute('data-name');
    const productPrice = parseFloat(product.getAttribute('data-price'));

    // Add the product to the cart
    cart.push({ name: productName, price: productPrice });

    // Update the cart display
    displayCart();
}

function displayCart() {
    cartItems.innerHTML = '';
    total = 0;

    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Checkout functionality
checkoutButton.addEventListener('click', checkout);

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items to the cart before checking out.");
    } else {
        alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
        cart = [];
        displayCart();
    }
}

const openCartButton = document.getElementById('open-cart-button');
const cartPanel = document.getElementById('cart-panel');

openCartButton.addEventListener('click', () => {
    cartPanel.style.display = 'block';
});

// Close the cart panel when clicking a close button
const closeCartButton = document.getElementById('close-cart-button');
closeCartButton.addEventListener('click', () => {
    cartPanel.style.display = 'none';
});
