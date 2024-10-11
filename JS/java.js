
let menus = [
    {
        image: 'burger.jfif',
        title:'Hot burger', 
        price: 1500
    },

    {
        image: 'bread.jfif',
        title:'Baked Bread', 
        price: 3500
    },

    {
        image: 'rice.jfif',
        title:'Fried Rice & Gabbage', 
        price: 2000
    },

    {
        image: 'pasta.jfif',
        title:'Stewed Pasta', 
        price: 1000
    },

    {
        image: 'yam.jfif',
        title:'Porridge Yam & Vege', 
        price: 1500
    },

    {
        image: 'fufu.jfif',
        title:'Swallow with Egusi', 
        price: 2500
    }
];


loadmenu();
updateCart();

function loadmenu(){
    let menuitems= '';
    menus.forEach((menu, index) => {
        menuitems += `<div class="col-3">
            <span id="food-sample"><img src="Images/${menu.image}" alt="${menu.title}"></span>
            <span id="description">${menu.title} <br> ${menu.price}</span>
            <span id="buy-now" onclick="addtocart(${index})"><a href="">Buy Now!</a></span>
          </div>`
    });
    document.querySelector('.food-row').innerHTML = menuitems
}

function addtocart(menuindex){
    let menuitems = menus[menuindex];
    let cartSearch = mycart.find((cartItem) => cartItem.title == menuitems.title);
    if (cartSearch == undefined) {
        mycart.push({
            title: menuitems.title,
            price: menuitems.price,
            quantity: 1,
            total: menuitems.price
        });
        alert(`${menuitems.title} added to cart`);
        updateCart();
    } else {
        cartSearch.quantity += 1;
        cartSearch.price = menuitems.price;
        cartSearch.total = cartSearch.quantity * menuitems.price;
    }
    localStorage.setItem('mycart', JSON.stringify(mycart))
}

function updateCart(){
    document.getElementById('counter').innerHTML = mycart.length
}

