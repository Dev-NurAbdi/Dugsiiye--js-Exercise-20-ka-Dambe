// spread operator
const array1 = [1,2,3];
const allArrays = [...array1,4,5,6];
console.log(allArrays)
// Rest operator
function multiply(...numbers){
    return numbers.reduce((total,num)=> total * num, 1)
}
console.log(multiply(10,10));