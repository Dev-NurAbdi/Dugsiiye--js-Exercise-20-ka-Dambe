const image = document.querySelector("#image")
function ChangeImage(){
const url = prompt("Enter your image URL:");
const width = prompt("Enter width  you want");
const height = prompt("Enter height you want")
const borderRadius = prompt("Enter border-radius  you want")
const padding = prompt("Enter padding you want")
const backgroundColor = prompt("Enter backgroundColor you want")

image.setAttribute ("src", url)
image.style.width = `${width}px`;
image.style.height = `${height}px`
image.style.borderRadius = `${borderRadius}px`
image.style.padding = `${padding}px`
image.style.backgroundColor = `${backgroundColor}` 
}
