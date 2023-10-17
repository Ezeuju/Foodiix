const hamburger = document.querySelector('#bar');
const navbar = document.querySelector('#navbar');
const closed = document.querySelector('#close');
let cartitems = document.getElementById('cartitems');
let empty = document.getElementById('empty');
let cartList = document.getElementById('cartlist')
let subTotal = document.getElementById('cartSubTotal')
let final = document.getElementById('cartTot')
let cartBtn = document.getElementById('clear-btn')
let checkOut = document.getElementById('checkOut')
let checkOutt = document.getElementById('checkOutt')

// HAMBURGER OPENING AND CLOSING MENU
hamburger.addEventListener('click', () => {
    navbar.classList.add('active')
} )

closed.addEventListener('click', () => {
    navbar.classList.remove('active')
})


let basket = JSON.parse(localStorage.getItem('data')) || [];

// CALCULATING TOTAL NUMBERS OF CART ITEMS
let calculation = () => {
    let cartIcon = document.getElementById('cart-amount');
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}
let calculate = () => {
    let cartIcon = document.getElementById('cart-amount-m');
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}

calculation();
calculate();

let generateCartItem = () => {
    if (basket.length !== 0){
        return (cartitems.innerHTML = basket.map((x) => {
            let {id, item} = x;
            let search = products.find((y) => y.id === id) || [];
            return `
                <tr>
                    <td><i onclick="removeItem(${id})" class="far fa-times-circle"></i></td>
                    <td><img src=${search.image}></td>
                    <td>${search.clothName}</td>
                    <td>$${search.price}</td>
                    <td>
                        <div class="item-row">
                            <div id="${id}" class="each-amount">${item}</div>
                            <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                            <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                        </div>
                    </td>
                    <td>$${search.price * item}</td>
                </tr>
            `;
        }).join(""));
    }
    else {
        cartList.innerHTML = ''
        cartitems.innerHTML = '';
        empty.innerHTML = `
            <h2>Cart Is Empty</h2>
            <a href="shop.html">
                <button id="cart-btn" class="normal">Visit Our Shop</button>
            </a>
        `;
    }
};

generateCartItem()

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
    
    generateCartItem()
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
    removebtn()
    generateCartItem()
    localStorage.setItem('data', JSON.stringify(basket));

}

let update = (id) => {
    let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item

    calculation()
    calculate()
    removebtn()
    TotalAmount()
}

let removeItem = (id) => {
    let selectedItem = id
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateCartItem();
    calculation();
    calculate();
    TotalAmount()
    removebtn()

    localStorage.setItem('data', JSON.stringify(basket));
}

let clearCart = () => {
    subTotal.innerHTML = `
        <td>Cart Subtotal</td>
        <td id="cartSUbTotal">$0.00</td>
        `
        final.innerHTML = `
        <td><strong>Total</strong></td>
        <td><strong>$0.00</strong></td>
        `
    cartBtn.remove()
    basket = [];
    generateCartItem();
    localStorage.setItem('data', JSON.stringify(basket));
    calculate()
    calculation()
    removebtn()
}

let removebtn = () => {
    if(basket.length === 0){
        cartBtn.remove()
        checkOut.remove()
        checkOutt.remove()
    } else return
}

removebtn()


let TotalAmount = () => {
    if(basket.length !== 0){
        let amount = basket.map((x) => {
            let {item, id} = x;
            let search = products.find((y) => y.id === id) || [];

            return item * search.price
        }).reduce((x, y) => x + y,0)

        subTotal.innerHTML = `
        <td>Cart Subtotal</td>
        <td id="cartSUbTotal">$${amount}</td>
        `
        final.innerHTML = `
        <td><strong>Total</strong></td>
        <td><strong>$${amount}</strong></td>
        `
    } else return

};

TotalAmount()


