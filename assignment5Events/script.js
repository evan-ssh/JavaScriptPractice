document.addEventListener("DOMContentLoaded", function(){
    const button1 = document.getElementById("button1")
    const reset = document.getElementById("reset")
    const textfield1 = document.getElementById("textfield1")
    const eventInfo = document.getElementById("eventInfo")

    button1.addEventListener("click", function(){
        const inputValue = textfield1.value;
        eventInfo.textContent = inputValue
    })

    reset.addEventListener("click", function(){
        textfield1.value = "";
        eventInfo.textContent = "";
    })
})