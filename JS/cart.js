

let localData = localStorage.getItem('mycart');
let mycart = !localData ? [] : JSON.parse(localData);

function sumCartTotal() {
    let totalCost = 0;
    mycart.forEach(cartItem => {
        totalCost += cartItem.total
    });
    document.getElementById('total-bill').innerHTML = `Total: $${totalCost}`;
}

function displayCart() {
    let cartLi = '';
    if (mycart.length == 0) {
        cartLi = `<li id="li">No items in the cart yet.</li>`;
    } else {
        mycart.forEach(cartItem => {
            cartLi += `<li id="li">Item: ${cartItem.title} | Price: $${cartItem.price} | Qty: ${cartItem.quantity} | Total: $${cartItem.total}</li>`
        })
    }
    document.getElementById('cart-list').innerHTML = cartLi;
}

function ordered(){
    confirm(`make payment for items ?`)
    mycart = '';
    localStorage.removeItem('mycart')
    alert(`Delivered`)
}

displayCart();
sumCartTotal();


