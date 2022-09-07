// ---Verilen reqemin uzunlugunu tapmaq---
// let numOfDigits = 1000;
// result = numOfDigits.toString().length;
// console.log( result);

// --- Verilen ededin her reqemeinin kvadratlarina yukseldib yazmaq---
let squeareDigits = 9119;
squeareDigits = squeareDigits.toString();
// console.log(squeareDigits)
let result = 1;

for(let i=0; i<squeareDigits.length;i++){ //9 1
    result *= squeareDigits[i]*squeareDigits[i]; //81 1
       result += squeareDigits[i] 
} 
console.log(result); //81 


