//print every number 1-100 individually
let i=0
while (i < 100){
    i++
    if (i % 3 === 0 && i % 5 === 0 ){
        console.log(`fizzbuzz`)
    }else if (i % 3 === 0) {
        console.log(`fizz`)
    } else if (i %5 ===0){
        console.log(`buzz`)
    }else {
        console.log(i)
    }
}

//if a number is divisible by 3, print fizz
//if a number is divisible by 5 print buzz
// if a number is divisible by both 3 and 5 print fizzbuzz