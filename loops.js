// let age = Number(prompt("enter your age"))
// if(isNaN(age)){
//     console.log("enter a valid input"); 
// }
// else if(age >= 18){
// console.log('you are a vaild voter')
// }else{
// console.log('you are not a valid voter');

// }


// let amount = Number(prompt("Enter your final amount"))

// if (amount > 0 && amount <= 5000) {
//     console.log(`Pay your total amount: ${amount}`)
// } 
// else if (amount >= 5001 && amount <= 7000) {
//     let discount = Math.floor(5 * amount / 100)
//     console.log(`Final amount after 5% discount: ${amount - discount}`)
// } 
// else if (amount >= 7001 && amount <= 9000) {
//     let discount = Math.floor(10 * amount / 100)
//     console.log(`Final amount after 10% discount: ${amount - discount}`)
// } 
// else if (amount >= 9001) {
//     let discount = Math.floor(15 * amount / 100)
//     console.log(`Final amount after 15% discount: ${amount - discount}`)
// }else {
//     console.log("Enter a valid amount")
// }

// let units = Number(prompt("Enter the number of units consumed"));
// let amount = 0;

// if (units > 400){
//     amount = (units - 400) * 13;
//     units = 400;
// }
// if (units > 200 && units <=400){
//     amount += (units -200) * 8;
//     units = 200;
// } 
// if (units > 100 && units <= 200){
//     amount += (units - 100) *6;
//     units = 100;
// }
// amount += units *4;

// console.log(`total amount to be paid: ${amount}`)

// let notes = Number(prompt('Enter the amount'));
// if (notes >= 500){
//     console.log(`total number of 500 notes are ${Math.floor(notes/500)}`);
//     notes= notes % 500;   
// }
// if (notes >= 200){
//     console.log(`total number of 200 notes are ${Math.floor(notes/200)}`);
//     notes= notes % 200;   
// }
// if (notes >= 100){
//     console.log(`total number of 100 notes are ${Math.floor(notes/100)}`);
//     notes= notes % 100;
// }
// if (notes >= 50){
//     console.log(`total number of 50 notes are ${Math.floor(notes/50)}`);
//     notes= notes % 50;
// }
// if (notes >= 20){
//     console.log(`total number of 20 notes are ${Math.floor(notes/20)}`);
//     notes= notes % 20;
// }

// ternary operator

// console.log(12>43 ? "sikandar" : "nazish")
// loops 
// let n  = Number(prompt("enter your number"))
// if(isNaN(n)){
//     console.log("enter a valid number")
// }
// else {
//     let primenum = true
//     for(let i=2; i<=n/2; i++){
//        if(n%i === 0){
//           primenum = false 
//           break
//        }

//     }
//     if(primenum){
//         console.log("prime number")
//     }else {
//         console.log("not a prime number")
//     }
  
// }