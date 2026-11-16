//arrays 
// let arr = new Array(5)
// for ( let i=0; i<arr.length; i++){
//         arr[i] = Number(prompt("enter a number"))
// }
// console.log(arr)
//max array
// let arr = [12,34,23,12,34,38]
// let max = arr[0];
// for (let i=1; i<arr.length;i++){
//     if (arr[i]>max){
// max = arr[i]
//     }
// }
// console.log(max)


//second max array
// let arr2 = [12,3,4,5,30,445,45,4];
// let max = arr2[0]
// let secondmax = arr2[1]
// for (i=2; i<arr2.length; i++){
//    if (arr2[i]> max ){
//     secondmax = max
//     max =arr2[i]
//    }else if (arr2[i]> secondmax){
// secondmax = arr2[i]
//    }
// }
// console.log(secondmax)
//Reverse array (with extra space)
// let arr = [12,54,3,23,4,2];
// let temp = new Array(arr.length)
// let j=0
// for (let i=arr.length-1;i>=0; i--){
//     temp[j] = arr[i]
//     j++ 
// }
// console.log(temp)
//Reverse aarray without extra space (preffered)

// let arr = [12,34,78,3,6]
// let i=0 , j=arr.length-1;
// while(i!=j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr)

// all zeros a side probem
// let arr = [0,1,0,1,0,1,0]
// let i=0, j=0;
// while(i<arr.length){
//     if(arr[i] == 0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++
//     }
//     i++
// }
// console.log(arr)

//negative and positive elements 
// let arr = [-1, 1,-32,42,24];
// let i=0, j=0;
// while(i<arr.length){
//     if (arr[i]<0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++
//     }
//     i++
// }
// console.log(arr)

//moving every elemnt rigth side by 1 
// let arr = [1,2,3,57,4]
// let copy = arr[arr.length-1];
// for (let i=arr.length-1;i>0; i--){
//     arr[i] = arr[i-1]
    
// }
// arr[0] = copy;
// console.log(arr)

//moving every element by left side by 1
// let arr = [1,2,3,57,4];
// let copy = arr[0];
// for (let i=0; i<arr.length-1; i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy;
// console.log(arr)

//moving every elemnet by to left side by n (time complexcity = nsqyare )
// const prompt = require('prompt-sync')()
// const arr = [1,2,4,5,6];
// const n = Number(prompt("Enter a valid number "))
// for (let j=1;j<n;j++){
//     let copy = arr[0];
//     for(let i=0;i<arr.length-1;i++){
//         arr[i] = arr[i+1]
//     }
//     arr[arr.length-1] = copy;
// }
// console.log(arr)

//movinf every element to right side by n (time complexcity = nsqyare )
// const prompt = require('prompt-sync')()
// const arr = [1,2,4,8,7];
// const n = Number(prompt("Enter a valid number"));
//  for(let j=0;j<n;j++){
//     let copy = arr[arr.length-1];
//     for(let i=arr.length-1;i>0; i--){
//         arr[i] = arr[i-1]
//     }
//     arr[0] = copy;
//  }
//  console.log(arr)

//moving every elemnet by to left side by n (time complexcity = n)
// const prompt = require('prompt-sync')()
// let arr = [1,4,7,9,2];
// let temp = new Array(arr.length);
// let n = Number(prompt("enter a valid number"))
// for(let i=0; i<arr.length;i++){
//     temp[i] = arr[(i+n) % arr.length];
// }
// console.log(temp)
//moving every elemnet by to right side by n (time complexcity = n)
//  const prompt = require('prompt-sync')()
//  let arr = [1,2,3,5,8];
// let temp = new Array(arr.length);
// let n = Number(prompt("enter a valid number"))
// for(let i=0; i<arr.length;i++){
//     temp[i] = arr[(i-n + arr.length) % arr.length];
// }
// console.log(temp)

//left rortation by n side most efficent way 
// const prompt = require('prompt-sync')()
// let arr = [1,4,6,8,3];
// let n = Number(prompt('enter a value'));

// function reverse(i, j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp 
//         i++;
//         j--
//     }
// }
// reverse(0, n-1);
// reverse(n, arr.length-1);
// reverse(0, arr.length-1);
// console.log(arr)

//right rortation by n side most efficent way

// const prompt = require('prompt-sync')()
// let arr = [1,2,4,8,6];
// let n = Number(prompt('enter a value'));

// function reverse(i, j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp 
//         i++;
//         j--
//     }
// }
// reverse(0, arr.length-1);
// reverse(0, n-1);
// reverse(n, arr.length-1);
// console.log(arr)

//Removinf duplicates from a sorted array
// let nums = [1,1,2,2,3,4,4,4];
// function removing(nums){
// let j=1;
// for(let i=0; i<nums.length-1; i++){
//     if(nums[i] != nums[i+1]){
//        nums[j] =   nums[i+1]
//        j++
//     }
// }
// return j;
// }

// console.log(j);

//Merging soreted arrays
// let arr1 = [2,5,6];
// let arr2 = [1,3,4,8];
// let merge = new Array(arr1.length + arr2.length)
// let i= j= k= 0;
// while(i<arr1.length && j<arr2.length){
//      if(arr1[i]<arr2[j]){
//         merge[k++] = arr1[i++]
//      }else{
//         merge[k++] = arr2[j++];
//      }
// }
// while(j<arr2.length){
//     merge[k++] = arr2[j++];
// }
// while(i<arr1.length){
//     merge[k++] = arr1[i++];
// }
// console.log(merge)

/**
 * Problem: Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * Time Complexity: O(n) - Single pass using a Map
 * Space Complexity: O(n) - Storing elements in the Map
 */

// function twoSum(nums, target) {
//     const map = new Map(); // Stores value -> index
    
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
        
//         // If complement exists in our map, we found our pair!
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
        
//         // Otherwise, store current element and its index
//         map.set(nums[i], i);
//     }
    
//     return [];
// }

// Example usage:
// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]


let height = [0,1,0,2,1,0,1,3,2,1,2,1]
var trap = function(height) {
    let left = new Array(height.length);
    let right = new Array(height.length);
    let maxleft = height[0], maxright = height[height.length-1]
    left[0] = maxleft, right[right.length-1] = maxright;

    for(let i=1;i<left.length; i++){
        maxleft = Math.max(height[i] , maxleft);
        left[i] = maxleft
    }

     for(let i=left.length-2; i>=0; i--){
        maxright = Math.max(height[i] , maxright);
        right[i] = maxright
    }
    let ans = 0;
    for(let i=0;i<height.length; i++){
        ans += Math.min(left[i], right[i]) - height[i];

    }
    return ans;
};
