const Card = document.querySelector("#Card");
// /Adding
function Addcard(){
    const newcard = document.createElement("li")
    newcard.textContent = "Add Card"
    Card.appendChild(newcard)
}

// Removing
function removeCard(){
    if(Card.lastChild){
Card.removeChild(Card.lastChild)
    }else{
        alert(" wa Empt")
    } 
}