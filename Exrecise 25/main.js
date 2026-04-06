

// spread operator
let array1 = [1,2,3,];
let array2 = [4,5,6];
const Allarrays = [...array1,array2];
console.log(Allarrays);
// Rest operator
function multiply(...numbers){
    return numbers.reduce((total,num)=> total * num, 1)
}
console.log(multiply(6,6))

