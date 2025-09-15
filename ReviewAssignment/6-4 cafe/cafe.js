"use strict";
const getElement = selector => document.querySelector(selector);

const getSelectedProduct = src => {
    
};

function getPrice(itemName){
    switch(itemName){
        case "espresso":
        case "biscotti":
            return 1.95;
        case "latte":
        case "scone":
            return 2.95;
        case "cappuccino":
            return 3.45;
        case "coffee":
            return 1.75
    }
}



document.addEventListener("DOMContentLoaded", () => {
    let cartTotal = 0
    const images = document.querySelectorAll("img");
    const orderBox = document.getElementById("order");
    const displayTotal = document.getElementById("total");
    const placeOrder = document.getElementById("place_order");
    const clearOrder = document.getElementById("clear_order");

    function updateTotal(itemNameUpper,itemPrice){
        const newOption = document.createElement("option")
        cartTotal += itemPrice;
        displayTotal.textContent = `Total: $${cartTotal.toFixed(2)}`;
        newOption.textContent = `${itemPrice.toFixed(2)} - ${itemNameUpper}`;
        orderBox.appendChild(newOption);
    }
    
    function clearAll(){
        orderBox.innerHTML = "";
        displayTotal.textContent = "Total: $0.00";
        cartTotal = 0;
    }

    images.forEach(img => {
        const imgId = img.id;
        const imgSrc = img.src;  
        img.addEventListener("mouseover", function(){
            img.src = imgId;
        })

        img.addEventListener("mouseout", function(){
            img.src = imgSrc;
        })

        img.addEventListener("click", function(){
            const itemName = img.alt
            const itemNameUpper = itemName.charAt(0).toUpperCase() + itemName.slice(1)
            const itemPrice = getPrice(itemName);
            updateTotal(itemNameUpper,itemPrice);
        })
    })

    placeOrder.addEventListener("click", function(){
        document.getElementById("order_form").submit();
    })
    clearOrder.addEventListener("click", function(){
        clearAll();
    })



   }); 