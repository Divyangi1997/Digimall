import axios from 'axios';
import Noty from 'noty';

let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')
let removeFromCart = document.querySelectorAll('.remove-from-cart')

function updateCart(item) {
    axios.post('/update-cart', item).then(res => {
        console.log(res);
        cartCounter.innerText = res.data.totalQty
        new Noty({
            type:'success',
            timeout:1000,
            text: 'Item added to cart',
            progressBar:false
        }).show();
    }).catch(err => {
        new Noty({
            type:'error',
            timeout:1000,
            text: 'Something went wrong',
            progressBar:false
        }).show();
    })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let item = JSON.parse(btn.dataset.item) 
        updateCart(item)
    })
})