document.getElementById("customOrderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let orderType = document.getElementById("orderType").value;
    let flavor = document.getElementById("flavor").value;
    let size = document.getElementById("size").value;
    let instructions = document.getElementById("instructions").value;
    let customerName = document.getElementById("customerName").value;
    let contact = document.getElementById("contact").value;

    let orderDetails = `${orderType} - ${flavor}, ${size}. Instructions: ${instructions}`;

    let cart = loadCart();

    cart.push({
        name: `Custom Order for ${customerName}`,
        price: 0, // Custom orders may be priced later
        quantity: 1,
        details: orderDetails,
        contact: contact
    });

    saveCart(cart);
    alert("Your custom order has been added to the cart!");
    window.location.href = "cart.html"; // Redirect to cart after submission
});

