function updateCartUI() {
    let cart = loadCart();
    let cartContainer = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");

    if (!cartContainer || !totalPrice) return;

    cartContainer.innerHTML = ""; 
    let total = 0;

    cart.forEach(item => {
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        
        let itemDetails = item.details ? `<p><strong>Details:</strong> ${item.details}</p>` : "";
        let contactInfo = item.contact ? `<p><strong>Contact:</strong> ${item.contact}</p>` : "";

        cartItem.innerHTML = `
            <p><strong>${item.name}</strong> - $${item.price} x ${item.quantity}</p>
            ${itemDetails}
            ${contactInfo}
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;

        cartContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalPrice.innerText = `Total: $${total.toFixed(2)}`;
}