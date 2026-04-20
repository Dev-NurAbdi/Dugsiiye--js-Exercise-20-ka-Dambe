async function fetchdata() {
    try{
const response = await fetch("https://jsonplaceholder.typicode.com/users")
if(!response.ok){
    throw new Error("Error ayaa dhacay mar kale isku day mahadsanid")
}
const data = await response.json()
console.log(data)
    }catch(error){
        console.log(error)
    }
}
fetchdata()