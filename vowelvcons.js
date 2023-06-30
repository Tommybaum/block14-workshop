//vowel vs consanant

//create a variable containing a string
const word = `hello`;
let vow = 0;
let cons = 0;
//create a loop that loops through the string
for (let i=0 ; i<word.length; i++){
    if (word[i] === `a` || word[i] === `e` || word[i] === `i` || word[i] === `o` || word[i] === `u`){
        vow++
    }
    else cons++
}
console.log(cons)
console.log(vow)
//return the consonants and vowels in the string

console.log(`there are ${cons} consanants in the word ${word} as well as ${vow} vowels`)
//return the word