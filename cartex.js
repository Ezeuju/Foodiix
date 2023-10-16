// Adding to cart on button click
const grab = document.querySelector('#grab');
const items = document.querySelector('#cartlist');
const cartItems = document.querySelector('#cartitems');

function toCart(){
    const trow = document.createElement('tr')
    const td1 = document.createElement('td');
    const icon = document.createElement('i')
    icon.className = 'far fa-times-circle remove'
    const td2 = document.createElement('td');
    const image = document.createElement('img');
    image.src = MainImg.src
    const td3 = document.createElement('td');
    td3.innerHTML = 'name'
    const td4 = document.createElement('td');
    td4.innerHTML = 'price'
    const td5 = document.createElement('td');
    td5.innerHTML = 'quantity'
    const td6 = document.createElement('td');
    td6.innerHTML = 'total'

    td1.appendChild(icon);
    td2.appendChild(image);

    trow.appendChild(td1)
    trow.appendChild(td2)
    trow.appendChild(td3)
    trow.appendChild(td4)
    trow.appendChild(td5)
    trow.appendChild(td6)

    cartItems.appendChild(trow);
};

grab.addEventListener('click', toCart);