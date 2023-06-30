//only odds

//create an array of numbers
const num=[2, 4, 6, 8, 11, 20, 15, 22]
let oddNumbers = []
//create a loop through the array
for(let i=0; i<num.length; i++){
    if (num[i] % 2 !== 0) {
        oddNumbers.push(num[i]);
}
}
//return a new array with only the odd numbers
console.log(oddNumbers)







