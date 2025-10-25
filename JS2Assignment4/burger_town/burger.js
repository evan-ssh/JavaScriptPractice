"use strict";
const getElement = selector => document.querySelector(selector);


class Burger {
    constructor(type, size){
        this.type = type,
        this.size = size;
    }
};

class Drink {
    constructor(type, size){
        this.type = type,
        this.size = size;
    }
};

class Fries {
    constructor(type, size, toppings){
        this.type = type,
        this.size = size;
        this.toppings = toppings;
    }
};
document.addEventListener("DOMContentLoaded", () => {
    /* Get burger btn values type/size */
    const regularType = ("#burger_regular").querySelector();
    const cheeseType = ("#burger_cheese").querySelector();
    const singleSize = ("#burger_single").querySelector();
    const doubleSize = ("#burger_double").querySelector();

    let burgerType = null;
    let burgerSize = null;
    
    if(regularType.checked() && !cheeseType.checked()){
        burgerType = "Regular";
    }else{
        burgerType = "Cheese";
    }

    if(singleSize.checked() && !doubleSize.checked()){
        burgerSize = "Single";
    }else{
        burgerSize = "Double";
    }



    /* Get burger topping checkboxes */
    /* Get drink type/size */
    /* Get fries type/size */


    getElement("#add_order").addEventListener("click", () => {
        
    }); 

    getElement("#clear_order").addEventListener("click", () => {
        
    });
    
}); 