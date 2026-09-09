//BUBBLE SORT

// let arr = [10,5,12,1,3 ];
// for (let i=0; i<arr.length-1; i++){
//     for(let j=0; j<arr.length-1-i; j++){
//         if( arr[j]> arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
//  console.log(arr)

//SELECTION SORT

// let arr = [12,3,44,1,4]
// for (let i=0; i<arr.length-1; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]> arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr)

//INSERTION SORT

let arr = [2,10,4,87,72]
for (let i =1; i<arr.length; i++){
    let key = arr[i];
    let j = i-1;
    while(j>=0 && arr[j]> key ){
        arr[j+1] = arr[j];
        j--
    }
    arr[j+1] = key 
}
console.log(arr)