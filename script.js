let cart = [];
let cartCount = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(productName + ' has been added to your cart.');
}

function viewCart() {
    let cartDetails = 'Your Cart:\n\n';
    cart.forEach((item, index) => {
        cartDetails += (index + 1) + '. ' + item.name + ' - $' + item.price.toFixed(2) + '\n';
    });
    cartDetails += '\nTotal Items: ' + cartCount;
    alert(cartDetails);
}
