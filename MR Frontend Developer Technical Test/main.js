let cart = document.getElementById("cart");
let amount = document.getElementById("amount"); 
let small = document.getElementById("small");
let medium = document.getElementById("medium");
let large = document.getElementById("large");
let select = document.getElementById("selected");
let addCart = document.getElementById("addCart");
let cartItems = document.getElementById("cart-items");
let error = document.getElementById("error");


let selected = null;
let items = {};
let count = 0;


addCart.addEventListener("click", addToCart);
small.addEventListener("click", selectSize);
medium.addEventListener("click", selectSize);
large.addEventListener("click", selectSize);

function selectSize(e) {
    select.innerHTML = e.target.innerHTML;
    selected = e.target.innerHTML
};

function addToCart(){
    if(selected !== null ) {
        if (selected in items) {
            items[selected] += 1 
        }
        else {
            items[selected] = 1
        }
        updateCart()
        count += 1;
        amount.innerHTML = "(" + count + ")";
        selected = null;
        error.innerHTML = ""
        select.innerHTML = "";

    }
    else {
        error.innerHTML = "You must select a size";
    }
};

//For multiple products I would use a dictionary instead, similar to the one used already but with more info
let itemPrice = "$75.00";
let itemImg = "img/classic-tee.jpg";
let itemName = "Classic Tee";


function updateCart(){
    cartItems.innerHTML = "";

    for( i in items){
        cartItems.innerHTML += "<div class='container minicart'> <div class='row py-2'><div class='col-4'><img class='img-fluid' src=" + itemImg + "></div><div class='col-8 text-left'><p>" + itemName + "</p> <p>" + items[i] + " x <b>" + itemPrice + "</b></p> <p> Size: " + i + "</p></div></div></div";
    }
}
