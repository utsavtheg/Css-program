// alert("hii");
// Arrays Methods
// .for each
// . map
// . filter
// .some
// .every
// .reduce

/* forEach 
arr.forEach(some function definition or name)
eg. forEach
let arr = [1,2,3,4,5];
function print(el){
    console.log(el);
    }
    arr.forEach(print);
    //or

    arr.forEach(function(el){
    console.log(el);
});



*/



// let arr = [1,2,3,4,5];
// arr.forEach(function (el){
//   console.log(el);
// })
// let arr = [
//   {
//     name: "aman",
//     marks:95,
//   },
//   {
//     name:"shradha",
//     marks:94,
//   },
//   {
//     name:"rajat",
//     marks:92,
//   },
// ];
// arr.forEach((student)=>{
//   console.log(student);

// });
// arr.forEach((student)=>{
//   console.log(student.marks);

// });


/* Map 
let newArr = arr.map(some function definition or name);

same size arr

*/ 
//eg.
// let num = [1,2,3,4];
// let double = num.map(function(el){
//   return el*2;
// });

//  let num = [1,2,3,4];
// let double = num.map(function(el){
//   return el*el;
// });


// let students = [
//   {
//     name: "aman",
//     marks:95,
//   },
//   {
//     name:"shradha",
//     marks:94,
//   },
//   {
//     name:"rajat",
//     marks:92,
//   },
// ];
// let gpa = students.map((el) => {
//   return el.marks/10;

// });



// Filter 
// let newArr = Array.filter(some function definition or name);

// let nums = [2,4,1,5,6,2,7,8,9];
// let even = nums.filter((num) => (num % 2 == 0));
// let ans = nums.filter((el) => {
//   return el % 2 != 0;
// });
// let ans = nums.filter((el) => {
//   return el < 5;
// });

//Every Method
// Returns true if every element of array gives true for some function. else returns false.

//arr.every(some function definition or name);
// [1,2,3,4].every((el)  => (el%2 == 0));



//some
// Returns true if some elements of array give true for some function. Else returns false.


//arr.some(some function definition or name);

// [1,2,3,4].some((el) => (el%2 == 0)); true
// [1,3].some((el) => (el %2 == 0)); false



//Reduce 
// reduces the array to a single value

// arr.reduce(reducer function with 2 variables for(accumulator, element));


// [1,2,3,4].reduce((res,el) => (res+el));  10


// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res,el)=> res - el);
// return finalVal;
// console.log(finalVal);


// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res,el)=> {
//   console.log(res);
//   return res - el;
// });
// console.log(finalVal);


// let arr = [1,4,2,5,6,7,2,9,2];

// let max = -1;

// for(let i=0;i<arr.length;i++){
//   if(max<arr[i]){
//     max = arr[i];
//   }
// }
// console.log(max);


// let max = arr.reduce((max , el) => {
//   if(max < el){
//     return el;
//   }else {
//     return max;
//   }
// });
// check if all numbers are multiple of 10 use every function
// let arr = [10,30,40,60,90,1];
// let mul = arr.every((mul) => {
//   if(mul % 10 == 0){
//     return true;
//   }else{
//     return false;
//   }
// });


// let nums = [10,203,40,50];
// let ans = nums.every((el) => el % 10 == 0);

// console.log(ans);

// Find minimum array 

// let nums = [10,20,30,40,5];

// let min = nums.reduce((min,el) => {
//   if(min < el){
//     return min;
//   }else {
//     return el;
//   }

// });
// console.log(min);

function getMin(nums){
  let min = nums.reduce((min,el) => {
  if(min < el){
    return min;
  }else {
    return el;
  }

},nums[0]);
    return min;
} 

let nums = [10,20,30,40,5];
console.log(getMin(nums));