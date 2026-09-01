

//secondmax num
// let num = [12,31,543,67,34,4,443,343]
// let secondmax = num[0]
// let max = num [0]
// for(let i=0; i<num.length; i++){
//     if(num[i] > max){
//         secondmax = max
//         max = num[i]
//     }else if(num[i] > secondmax && num[i] < max){
//         secondmax = num[i]
//     }
// }
// console.log(secondmax)

// function maxVacation(N, obligations) {
//   obligations.sort((a, b) => a - b);  // numeric sort!

//   // add sentinel boundaries
//   const bounds = [0, ...obligations, N + 1];
//   let maxGap = 0;

//   for (let i = 0; i < bounds.length - 1; i++) {
//     const gap = bounds[i + 1] - bounds[i] - 1;
//     maxGap = Math.max(maxGap, gap);
//   }

//   return maxGap;
// }

// // Test
// console.log(maxVacation(10, [2, 5, 8]));  
// console.log(maxVacation(10, [3]));

// let num = [21,34,12,456,234,563,6,3,234]
// let secondmax = num[0];
// let max= num[0]
// for (let i=0;i<num.length;i++){
//   if (num[i]> max){
//     secondmax = max
//     max= num[i]
//   } else if 
//     (num[i]>secondmax && num[i]> max){
// secondmax= num[i]
//     }
// }
// console.log(secondmax)
//patterns 
const prompt = require('prompt-sync')()
let n = prompt('Enter a valid number to print stars ')
for (let i=1; i<=n; i++){
  for (let j=n; j>=i; j--){
process.stdout.write( " * ")
  }
  console.log()
} 
for (i=1;i<=n;i++){
  let ascii = 65;
  for (j=1;j<=i;j++){
    process.stdout.write(String.fromCharCode(ascii)+ " ")
    ascii++
  }
  console.log()
}
//let  angle triangle pattern
for(let i=1; i<=n; i++){
  for (let j=1; j<=n-i; j++){
   process.stdout.write("   ")
  }
  for (let j=1; j<=i; j++){
    process.stdout.write(" * ")
  }
  console.log()
}

for (let i=1; i<=n; i++){
  for (let j=1; j<=n-i; j++){
    process.stdout.write(" ")
  }
  for (let j=1; j<=2*i-1; j++){
process.stdout.write("*")
  }
  console.log()
}

for (let i=1; i<=n; i++){
  for (j=1; j<=n; j++){
    if( i === j || i + j == 6){
      process.stdout.write('*')
    }else {
      process.stdout.write(" ")
    }
  }
  console.log()
}


for (let i=1; i<=n; i++){
  for (let j=1;j<=n*2-1;j++){
    if (i===j || i+j == 10){
     process.stdout.write("*")
    }else {
      process.stdout.write(" ")
    }
  }
  console.log()
}
for (i=1;i<=n;i++){
  for (j=1;j<=n;j++){
    if (i == 1 || i == Math.ceil(n / 2) || i == n || j == 1) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  "); 
    }
  }
  console.log()
}
for( let i=1; i<=n; i++){
  for (let j=1; j<=n; j++){
    if (i==1 || i==n || i+j ==6 ){
      process.stdout.write("*")
    }
    else {
      process.stdout.write(" ")
    }
  }
  console.log()
}
for (let i=1;i<=n-1; i++){
  for (let j=1;j<=n;j++){
    if (j==1 || j==n ||i == Math.ceil(n / 2)){
process.stdout.write("*")
    }else{
      process.stdout.write(" ")
    }
  }
  console.log()
}