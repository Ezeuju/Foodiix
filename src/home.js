const hamburger = document.querySelector('#bar');
const navbar = document.querySelector('#navbar');
const closed = document.querySelector('#close');
const cart = document.querySelector('#lg-bag')
const cartProducts = document.querySelector('.pro-container');
const cartItem = document.querySelector('tbody');


// BASKET CONTAINING DATA
let basket = JSON.parse(localStorage.getItem('data')) || [];

// GENERATING PRODUCTS
let generateItems = () => {
    return (cartProducts.innerHTML = products.map((x) => {
        let {id, image, clothName, price} = x;
        let search = basket.find((x) => x.id === id) || []
        return `
        <div id=product-${id} data-aos="fade-up" data-aos-duration="3000" class="aos-init aos-animate pro pro2">
            <img src=${image} alt="">
            <div class="des">
                <span>adidas</span>
                <h5 class="cl-title">${clothName}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${price}</h4>
            </div>
            <div class="pro-row">
                <div id="${id}" class="each-amount">${search.item === undefined ? 0 : search.item}</div>
                <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                <a href="cart.html"><i class="fal fa-shopping-cart cart"></i></a>
                <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
            </div>
        </div>
        `
    }).join(""))
}

generateItems()

// INCREMENTING CART VALUES
let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id)

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1
        });
    } else {
        search.item +=1
    }
    
    update(selectedItem.id)
    localStorage.setItem('data', JSON.stringify(basket));
}

// DECREMENTING CART VALUES
let decrement = (id) => {
    let selectedItem = id;

    let search = basket.find((x) => x.id === selectedItem.id)

    if (search === undefined) return;
    else if(search.item === 0) return;
    else {
        search.item -=1
    }

    update(selectedItem.id);
    
    basket = basket.filter((x) => x.item !== 0);

    localStorage.setItem('data', JSON.stringify(basket));

}

let update = (id) => {
    let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item

    calculation()
    calculate()
}

// CALCULATING TOTAL NUMBERS OF CART ITEMS
let calculation = () => {
    let cartIcon = document.getElementById('cart-amount');
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}
let calculate = () => {
    let cartIcon = document.getElementById('cart-amount-m');
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}

calculation()
calculate()


// HAMBURGER OPENING AND CLOSING MENU
hamburger.addEventListener('click', () => {
    navbar.classList.add('active')
} )

closed.addEventListener('click', () => {
    navbar.classList.remove('active')
})

// // Shopping Redirect
// // First Line of Products

// var spTitle = document.getElementsByClassName('sp-title')
// var clTitle = document.getElementsByClassName('cl-title')
// var product = document.querySelectorAll('.pro0')

// function redirect (){
//     window.location.href = 'sproduct.html';
//     con
// }

// product.forEach((prod) => {
//     prod.addEventListener('click', redirect);
// })

// // Second Line of Products
// var produ = document.querySelectorAll('.pro1')


// function redi (){
//     window.location.href = 'sproduct1.html';
// }

// produ.forEach((prods) => {
//     prods.addEventListener('click', redi);
// })

// // Third Line of Products
// var produc = document.querySelectorAll('.pro2')

// function redir (){
//     window.location.href = 'sproduct2.html';
// }

// produc.forEach((pros) => {
//     pros.addEventListener('click', redir);
// })

// // Fourth Line of Products
// var produs = document.querySelectorAll('.pro3')

// function redir (){
//     window.location.href = 'sproduct3.html';
// }

// produs.forEach((pros) => {
//     pros.addEventListener('click', redir);
// })


// Single Product

var MainImg = document.getElementById('MainImg');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].addEventListener('click', function(){
    MainImg.src = smallImg[0].src;
})
smallImg[1].addEventListener('click', function(){
    MainImg.src = smallImg[1].src;
})
smallImg[2].addEventListener('click', function(){
    MainImg.src = smallImg[2].src;
})
smallImg[3].addEventListener('click', function(){
    MainImg.src = smallImg[3].src;
})
