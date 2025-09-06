document.addEventListener(function(){
    const products = {
    espresso: { name: "Espresso", price: 2.5 },
    latte: { name: "Latte", price: 3.5 },
    cappuccino: { name: "Cappuccino", price: 3.0 },
    coffee: { name: "Coffee", price: 2.0 },
    biscotti: { name: "Biscotti", price: 1.5 },
    scone: { name: "Scone", price: 2.0 }};

    const menuImages = document.querySelectorAll("#menu-list img");
    const selectOrder = document.getElementById("order");
    const total = document.getElementById("total");
    const placeOrder = document.getElementById("place_order");
    const clearOrder = document.getElementById("clear_order");
    const form = document.getElementById("order_form");

    menuImages.forEach(img => {
        const originalSrc = img.src;
        img.addEventListener("mouseover", function() {
            img.src = img.id;});
        img.addEventListener("mouseout", function(){
            img.src = originalSrc});
        img.addEventListener("click", function(){
            const key = img.alt;
            if(products[key]){
                const option = document.createElement("option");
                option.textContent = `${products[key].name} ${products[key].price.toFixed(2)}`;
                option.value = products[key].price;
                orderSelect.appendChild(option);
                updateTotal();
            }
        });
    });

    function updateTotal(){
        let total = 0;
        //Array method allows us to convert the nodelist to a proper array
        Array.from(orderSelect.options).forEach(option =>{
            total += parseFloat(option.value);            
        });
        total.textContent = `Total: $${total.toFixed(2)}`;
    }

    placeOrder.addEventListener("click", function(){
        form.action = "checkout.hmtl";
        form.submit();
    });

    clearOrder.addEventListener("click", function(){
        orderSelect.innerHTML = "";
        total.textContent = "";
    });
});

