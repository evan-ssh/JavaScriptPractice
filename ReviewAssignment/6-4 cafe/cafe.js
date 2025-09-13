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
    const images = document.querySelectorAll("img")
    const orderBox = document.getElementById("order")
    const displayTotal = document.getElementById("total")
    const placeOrder = document.getElementById("place_order")
    const clearOrder = document.getElementById("clear_order")
    images.forEach(img => {
        const imgId = img.id
        const imgSrc = img.src  
        img.addEventListener("mouseover", function(){
            img.src = imgId
        })

        img.addEventListener("mouseout", function(){
            img.src = imgSrc
        })

        img.addEventListener("click", function(){
            const itemName = img.alt
            const itemPrice = getPrice(itemName)
            const newOption = document.createElement("option")

            cartTotal += itemPrice
            //fix capitalization
            displayTotal.textContent = `Total: $${cartTotal.toFixed(2)}`
            newOption.textContent = `${itemPrice.toFixed(2)} - ${itemName}`
            orderBox.appendChild(newOption)

        })
    })

    placeOrder.addEventListener("click", function(){
        document.getElementById("order_form").submit()
    })
    clearOrder.addEventListener("click", function(){
        displayTotal.textContent = ""
        orderBox.innerHTML = ""
        displayTotal.textContent = `Total: $0`
        cartTotal = 0
    })



   }); 