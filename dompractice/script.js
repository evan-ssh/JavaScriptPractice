document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById("LOADPAGE")
    button1.addEventListener("click",function(){
        const div = document.createElement("div");
        
        div.style.background = "lightblue";
        div.style.padding = "15px"
        div.style.borderRadius = "25px"
        div.id = "Div"
        const heading = document.createElement("h2");
        heading.textContent = "Test"
        heading.style.color = "darkblue"

        div.appendChild(heading)
        document.body.appendChild(div)

    const button2 = document.getElementById("CHANGECOLOR")
    button2.addEventListener("click",function(){
        
        if(div){
            div.style.background = "red"
        }

    })

        
        
    })
})