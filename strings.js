//Printing every character of a string 
// let s = 'nazish';
// for(let i=0; i<s.length; i++){
// console.log(s[i])
// }


//printing evevry character of a string in reverse order
// let s = 'nazish';
// for(let i=s.length-1; i>0; i--){
// console.log(s[i])
// }

// Reverse a string
// let s = 'Nazish';
// rev = ""
// for(let i=s.length-1; i>0; i--){
//     rev = rev + s.charAt(i)
// }
// console.log(rev)

// string is palindrome or not 
// let s = 'madam';
// var palindrome = function(s) {
//     let rev = "";
//     for (let i = s.length - 1; i >= 0; i--) {
//         rev = rev + s.charAt(i);
//     }
//     if (rev == s) {
//         console.log('string is a palindrome');
//     } else {
//         console.log('string is not a palindrome');
//     }
//     return rev;
// }
// palindrome(s);

// string is palindrome or not (without extra space)
// const prompt = require('prompt-sync')()
// let s = prompt('Enter a string: ');
// let ispallindrome = true
// let i=0; 
// let j=s.length-1

// while(i<j){
//     if(s.charAt(i) != s.charAt(j)){
//         ispallindrome = false
//         break
//     }
//     i++
//     j--
// }
// if(ispallindrome) console.log('string is a palindrome')
// else console.log('string is not a palindrome')

//Toggle each character of a string

// const prompt = require('prompt-sync')()
// let s = prompt('enter a string ');
// console.log(s);
// let toggle = "";
// for (let i=0; i<=s.length-1; i++){
//     let ch = s.charCodeAt(i);
//     if(ch>=65 && ch<=90){
//         toggle = toggle + String.fromCharCode(ch + 32)
//     }else if(ch>=97 && ch<=122){
//           toggle = toggle + String.fromCharCode(ch - 32)
//     }
// }
// console.log(toggle);

const prompt = require('prompt-sync')()
let s = prompt('Enter a string: ');
let arr = new Array(128).fill(0)
for (let i=0; i<s.length; i++){
    let indx = s.charCodeAt(i);
    arr[indx] = arr[indx] + 1
 }
 for (let i=0; i<arr.length; i++){
    if(arr[i]> 0){
        console.log(String.fromCharCode(i) +" appears at " + arr[i] + "times")
    }
 }
