document.addEventListener("DOMContentLoaded", function(){
    const button1 = document.getElementById("button1")
    const reset = document.getElementById("reset")
    const textfield1 = document.getElementById("textfield1")
    const eventInfo = document.getElementById("eventInfo")
    const randomMessage = 'Random message'
    button1.addEventListener("click", function(){
        eventInfo.textContent += randomMessage
    })
    textfield1.addEventListener("keydown", function(){
        eventInfo.text += textfield1.value
    })

    reset.addEventListener("click", function(){
        textfield1.value = ''
        eventInfo.textContent = ''
    })
})  