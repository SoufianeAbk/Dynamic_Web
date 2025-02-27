"use strict";
document.addEventListener("DOMContentLoaded", () => {
    let cart = [];

    const productNameInput = document.getElementById("productName");
    const productPriceInput = document.getElementById("productPrice");
    const cartItemsList = document.getElementById("cartItems");
    const totalElement = document.getElementById("total");

    function updateCart() {
        cartItemsList.innerHTML = cart.map((product, index) => 
            `<li>${product.name} - €${product.price.toFixed(2)} 
                <button onclick="removeFromCart(${index})">Verwijder</button>
            </li>`
        ).join("");
        totalElement.textContent = cart.reduce((sum, p) => sum + p.price, 0).toFixed(2);
    }

    window.removeFromCart = index => {
        cart.splice(index, 1);
        updateCart();
    };

    document.getElementById("addToCart").addEventListener("click", () => {
        const name = productNameInput.value.trim();
        const price = parseFloat(productPriceInput.value);
        if (name && price > 0) {
            cart.push({ name, price });
            updateCart();
            productNameInput.value = "";
            productPriceInput.value = "";
        }
    });
});
