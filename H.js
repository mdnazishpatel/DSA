// const word = ("hoor");
// let naz = ("");

// function reverse (){
//     for (let i = word.length - 1; i>=0; i--){
//         naz += word[i]
//     }
//     return naz;
// }
// console.log(reverse())

let age = prompt("ENTER YOUR AGE");
if(isNaN(age)){
    console.log('ENTER VALID NUMBER')
}
else if(age> 18){
    console.log('YOU ARE VALID TO VOTE')
} else {
    console.log('YOU CANNOT VOTE')
}