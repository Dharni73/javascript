/* 
font-family: 'Lato', sans-serif;
font-family: 'Noto Serif', serif;
 */
const cartIcon =document.getElementById('cart-icon');
const btnClose = document.getElementById('icon-close');
const cart = document.querySelector('.cart');

cartIcon.addEventListener('click',()=>{
    console.log('clicked');
    cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
    console.log('remove');
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
    loadContent();
}

function loadContent(){

    //Remove the items from cart
    let btnremoveCart = document.querySelectorAll('#cart-remove');
    btnremoveCart.forEach((btnrem)=>{
        btnrem.addEventListener('click',removeItem);
    });

    // Product item change event
    let qntyItem =document.querySelectorAll('.quantity');
    qntyItem.forEach((input)=>{
        input.addEventListener('change',changeQty);
    })

    // add food items to cart
    let cartBtns =document.querySelectorAll("#add-cart");
   cartBtns.forEach((cartbtn)=>{
    cartbtn.addEventListener('click', addCart);
   })
    updateTotal();
}


//Remove Item
function removeItem(){
    if(confirm("Are You Sure To Remove")){
        let title =this.parentElement.querySelector('.cart-food-title').innerHTML;
        itemList = itemList.filter(el=>el.title!=title);
        this.parentElement.remove();
        loadContent();
    }
   
}


// change Quantity
function changeQty(){
    if(isNaN(this.value)|| this.value<1){
        this.value = 1;
    }
    loadContent();
}


let itemList =[];


//add cart

function addCart(){
    let food = this.parentElement;
    let title = food.querySelector('.food-title').innerHTML;
    let price = food.querySelector('.food-price').innerHTML;
    let imgScr = food.querySelector('.foodimage').src;
    console.log( title,price,imgScr);


    let newProduct ={title,price,imgScr};
    //check product already exist
    if(itemList.find((el)=>el.title == newProduct.title)){
        alert("Product Already Exists");
        return;
    }else{
        itemList.push(newProduct);
    }



    let createNewProduct =createCartProduct(title,price,imgScr);
    let element =document.createElement('div');
    element.innerHTML=createNewProduct;
    let createBasket = document.querySelector('.cart-content');
    createBasket.append(element);
    loadContent();
    

}


function createCartProduct(title,price,imgScr){
    return`
   <div class="cart-box">
    <img src="${imgScr}" class="cart-img">
    <div class="detail-box">
        <div class="cart-food-title">${title}</div>
        <div class="price-box">
            <div class="cart-price">${price}</div>
            <div class="cart-amt">${price}</div>
        </div>
        <input type="number" value="1" class="quantity">
    </div>
    <i class ="fa-solid fa-trash" id="cart-remove"></i>
</div> `
;
    
}
function updateTotal(){
    const cartItems = document.querySelectorAll('.cart-box');
    const totalValue = document.querySelector('.total-price');
    let total =0;
    cartItems.forEach((product)=>{
        let priceElement = product.querySelector('.cart-price');
        let price =parseFloat(priceElement.innerHTML.replace('Rs.',''));
        let qty = product.querySelector('.quantity').value;
        total+=(price*qty);
        product.querySelector('.cart-amt').innerText ="Rs."+(price*qty);


    });
    totalValue.innerHTML ="Rs."+total;
    console.log(totalValue);

// add count of product 
const cartCount = document.querySelector('.cart-count');
let count =itemList.length;
 cartCount.innerHTML = count;
 if(count==0){
    cartCount.style.display ='none';
 }else{
    cartCount.style.display ='block';
 }
}
