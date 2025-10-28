"use strict";
const getElement = selector => document.querySelector(selector);

class Burger {
    constructor(type = "regular", size = "single", toppings = ""){
        this.type = type;
        this.size = size;
        this.toppings = toppings;
    }
    
    toString() {
        let bgrStr= `<strong>${this.size} ${this.type} burger - $${this.getPrice().toFixed(2)}</strong>`;
        if(this.toppings) {
            const toppingList = this.toppings.split(", ");
            bgrStr += "<ul>";
            toppingList.forEach(topping => {
                bgrStr += `<li>${topping}</li>`;
            });
            bgrStr += "</ul>";
        }
        return bgrStr;
    }
    
    getPrice() {
        let price = 0;
        if(this.type === "cheese" && this.size === "single"){
            price = 6.00;
        }else if(this.type === "cheese" && this.size === "double"){
            price = 12.00;
        } else if(this.type === "regular" && this.size === "single"){
            price = 3.50;
        } else if(this.type === "regular" && this.size === "double"){ 
            price = 7.00
        };
        return price;
    }
}

class Drink {
    constructor(type = "water", size = "small"){
        this.type = type;
        this.size = size;
    }
    
    toString() {
        return `<strong>${this.size} ${this.type} - $${this.getPrice().toFixed(2)}</strong>`;
    }
    
    getPrice() {
        if(this.type === "water") return 0.00;
        if(this.type === "soda") {
            if(this.size === "large") return 3.75;
            if(this.size === "medium") return 1.88;
            if(this.size === "small") return 0.94;
        }
        if(this.type === "tea") {
            if(this.size === "large") return 2.50;
            if(this.size === "medium") return 1.75;
            if(this.size === "small") return 1.25;
        }
        return 0.00;
    }
}

class Fries {
    constructor(type = "regular", size = "small"){
        this.type = type;
        this.size = size;
    }
    
    toString() {
        return `<strong>${this.size} ${this.type} fries - $${this.getPrice().toFixed(2)}</strong>`;
    }
    
    getPrice() {
        if(this.type === "regular") {
            if(this.size === "large"){
                return 6.00;
            } 
            if(this.size === "medium"){
                return 3.00;
            }
                
            if(this.size === "small") {
                return 1.50;
            }
        }
        if(this.type === "curly") {
            if(this.size === "large") {return 3.75
            };
            if(this.size === "medium") {
                return 1.88
            };
            if(this.size === "small") {
                return 0.94 
            };
        }
        return 0.00;
    }
}

class Order{
    constructor(){
        this.order = [];
    }

    addItem(orderItem){
        this.order.push(orderItem);
    }
    
    clearOrder(){
        this.order = [];
    }
    
    getTotal() {
        return this.order.reduce((total, item) => total + item.getPrice(), 0);
    }

    displayOrder(){
        const orderDiv = getElement("#order");
        if(this.order.length === 0){
            orderDiv.innerHTML = "<h1>Order</h1><p>No items in order</p><label><b>Total: $0.00</b></label>";
        } else {
            let orderText = "<h1>Order</h1>";
            orderText += this.order.map(orderItem => orderItem.toString()).join("<br><br>");
            orderText += `<br><br><label><b>Total: $${this.getTotal().toFixed(2)}</b></label>`;
            orderDiv.innerHTML = orderText;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const currentOrder = new Order();

    getElement("#add_order").addEventListener("click", () => {
        let burgerType = null;
        if(getElement("#burger_regular").checked) burgerType = "regular";
        if(getElement("#burger_cheese").checked) burgerType = "cheese";
        
        let burgerSize = null;
        if(getElement("#burger_single").checked) burgerSize = "single";
        if(getElement("#burger_double").checked) burgerSize = "double";

        let userToppings = "";
        const toppings = ["#tomatoes", "#lettuce", "#pickles", "#onions", "#mustard", "#ketchup"];
        const selectedToppings = [];
        
        for(let i = 0; i < toppings.length; i++){
            if(getElement(toppings[i]) && getElement(toppings[i]).checked){
                selectedToppings.push(toppings[i].substring(1));
            }
        }
        
        if(selectedToppings.length > 0){
            userToppings = selectedToppings.join(", ");
        }


        if(burgerType || burgerSize){
            const burger = new Burger(burgerType || undefined, burgerSize || undefined, userToppings || undefined);
            currentOrder.addItem(burger);
        }

        let drinkType = null;
        if(getElement("#water").checked) drinkType = "water";
        if(getElement("#tea").checked) drinkType = "tea";  
        if(getElement("#soda").checked) drinkType = "soda";

        let drinkSize = null;
        if(getElement("#drink_small").checked) drinkSize = "small";
        if(getElement("#drink_medium").checked) drinkSize = "medium";
        if(getElement("#drink_large").checked) drinkSize = "large";
        
        if(drinkType || drinkSize){
            const drink = new Drink(drinkType || undefined, drinkSize || undefined);
            currentOrder.addItem(drink);
        }

        let friesType = null;
        if(getElement("#fry_regular").checked) friesType = "regular";
        if(getElement("#fry_curly").checked) friesType = "curly";

        let friesSize = null;
        if(getElement("#fry_small").checked) friesSize = "small";
        if(getElement("#fry_medium").checked) friesSize = "medium";
        if(getElement("#fry_large").checked) friesSize = "large";

        if(friesType || friesSize){
            const fries = new Fries(friesType || undefined, friesSize || undefined);
            currentOrder.addItem(fries);
        }

        currentOrder.displayOrder();
        
        const inputs = document.querySelectorAll("input[type='checkbox'], input[type='radio']");
        for(let i = 0; i < inputs.length; i++){
            inputs[i].checked = false;
        }
    }); 

    getElement("#clear_order").addEventListener("click", () => {
        currentOrder.clearOrder();
        currentOrder.displayOrder();
        
        const inputs = document.querySelectorAll("input[type='checkbox'], input[type='radio']");
        for(let i = 0; i < inputs.length; i++){
            inputs[i].checked = false;
        }
    });

    currentOrder.displayOrder();
});