function operate(a,b, callback){
    return callback(a,b)
}
function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function division(a,b){
    return a/b
}

console.log("addition" , operate(2,5,add))
console.log("subtaraction" , operate(100,50,subtract))
console.log("multiplication" , operate(5,5,multiply))
console.log("division" , operate(30,2,division))
