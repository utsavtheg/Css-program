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

// function getMin(nums){
//   let min = nums.reduce((min,el) => {
//   if(min < el){
//     return min;
//   }else {
//     return el;
//   }

// },nums[0]);
//     return min;
// } 

// let nums = [10,20,30,40,5];
// console.log(getMin(nums));


//default Parameters
// giving a default value to the arguments

// function func(a,b = 2){
//   //do something
// }

// function sum(a, b = 3){
//   return a + b;
// }


//spread 
// expands an iterable into multiple values


// function func(...arr){
//   //do something
// }

// let arr = [1,2,3,4,5];
// Math.min(...arr);
// console.log(...arr);


//spread as a literals

// let arr = [1,2,3,4,5];
// let newArr = [...arr];
// console.log(newArr);

// let chars = [..."hello"];
// console.log(chars);

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];
// let nums = [...odd,...even];
// console.log(nums);


// as object literals

// let data = {
//   email:"ironman301@gmail.com",
//   password:"abcd",
  
// };


// let dataCopy = {...data,id:123,
//   country:"India",};


// let arr = [1,2,3,4,5];
// let obj1 = {...arr};
// let char = ("hello");
// let obj2 = {...char};


//rest

//Allows a function to take an indefinite number of arguments and bundle them in an array
// function sum(...args){
//   // return args.reduce((add, el) => add + el);
//   for(let i=0;i<args.length;i++){
//     console.log("you gave us: ", args[i]);
//   }
// }


// function min(){
//   console.log(arguments);
//  console.log(arguments.length);
//  arguments.push(1);
// }


// function test(a, ...b){
//   console.log(a);
//   console.log(b);
// }

// test(5,10,15,20);

// take multiple input as a array

// function test(...a){
//   console.log(a);
// }
// test(10);


// function sum(...args){
//   return args.reduce((sum, el) => sum+el);
// }


// function min(msg,...args){
//   console.log(msg);
//   return args.reduce((min,el) => {
//     if(min > el){
//       return el;

//     } else{
//       return min;
//     }
//   });
// }

// show error
// function min(...args,msg){
//   console.log(msg);
//   return args.reduce((min,el) => {
//     if(min > el){
//       return el;

//     } else{
//       return min;
//     }
//   });
// }


//Destructuring
// Strong values of array into multiple variables


// let names = ["tony","bruce","steve","peter"];
// let[winner, runnerup,secondRunnerUp] = names;
// console.log(winner, runnerup,...secondRunnerUp);



// in object

// const student = {
//   name: "karan",
//   class:9,
//   age:14,
//   subjects:["hindi","english","math","science","social studies"],
//   userName : "karan123",
//   password:1234,
// }

// const{userName: user, password: pass,subjects : subjects1,city ="Mumbai"} = student;
// console.log(student);



// DOM(Document object Model)
// The dom represent a document with a logical Tree.
// it allows us to manipulate/change webpage Content(HTML elements).


//Selecting elements 
// getElementById

// Returns the element as an object or null(if not found)

// Eg. document.getElementById(id)

// document.getElementById(mainImg);
// null
// document.getElementById("mainImg");
// <img src=​"spiderman_img.png" id=​"mainImg">​
// let imgObj = document.getElementById("mainImg");
// undefined
// imgObj
// <img src=​"spiderman_img.png" id=​"mainImg">​
// console.log(imgObj);
// VM381:1 <img src=​"spiderman_img.png" id=​"mainImg">​
// undefined
// console.dir(imgObj);
// : HTMLImageElement
// undefined
// imgObj.src
// 'http://127.0.0.1:5500/spiderman_img.png'
// imgObj.id
// 'mainImg'
// imgObj.tagName
// 'IMG'
// document.getElementById("discription");
// null
// document.getElementById("description");
// <p id=​"description">​" 
// console.dir(document.getElementById("description"));
// VM791:1 p#description
// undefined




// getElementByClassName

// Returns the elements as an html collection or empty collection(if not found)

// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0;i<smallImages.length;i++){
//     console.dir(smallImages[i].src);
// }


//getElementByTagName

//Returns the element as an Html collection or empty collection(if not found)


// document.getElementsByTagName("p");
// document.getElementsByTagName("p")[1].innerText = "abc";


//Query Selectors 
// Allow us to use any Css Selector

//document.querySelector('p'); //selects first p element

// document.querySelector('#myId'); // Selects first element with id = myId

// document.querySelector('.myClass');//Selects first element with class = myClass

// console.dir(document.querySelector("h1"));

//document.querySelectorAll(.'myClass'); // selects all p elements 


//Using properties & Methods
// innerText
// Shows the visible text contained in a node
//para.innerText

//textContent
// Shows all the full text

//innerHTML
// shows the full markup


//Manipulating Attributes

//getters & setters
//obj.getAttribute(attr)
//obj.setAttribute(attr,val)


//Manipulating styling property
// style Property
//obj.style

// eg .
// let links = document.querySelectorAll('.box a');


// for(link of links){
//     link.style.color = 'purple';
// }

// for(let i =0;i< links.length;i++){
//     links[i].style.color = "green";
// }


//Manipulating style
// using classList
// Obj.classList


//classList.add()to add new classes

//classList.remove() to remove classes

//classList.contains() to check if class exists

//classList.toggle() to toggle between add & remove


//Navigation 

// parentElement

// children

// previousElementSibling / nextElementSibling
// let h4 = document.querySel
// undefined
// let h4 = document.querySelector('h4');
// undefined
// h4.paren
// undefined
// h4.parentElement
// <div class=​"box">​…​</div>​
// h4.children
// HTMLCollection []
// let box = document.querySelector('.box');
// undefined
// box.children;
// HTMLCollection(2) [h4, ul]
// box.childElementCount;
// 2
// let ul = document.querySelector(ul);
// VM15064:1 Uncaught ReferenceError: ul is not defined
//     at <anonymous>:1:33
// (anonymous) @ VM15064:1
// let ul = document.querySelector('ul');
// undefined
// ul.parentElement
// <div class=​"box">​…​</div>​
// ul.childElementCount
// 3
// ul.children
// HTMLCollection(3) [li, li, li]
// ul.children[1];
// <li>​…​</li>​
// ul.children[2];
// <li>​…​</li>​
// ul.children[2].previousElementSibling;
// <li>​…​</li>​
// ul.children[1].previousElementSibling;
// <li>​…​</li>​



//Adding elements


// document.createElement('p')


// .appendChild(element)

// .append(element)//last

// .prepend(element)//starting mai

// .insertAdjacent(where, element)//position


//Removing Elements


// .removeChild(element)  //appendChild

// .remove(element) // append


// let para1 = document.createElement('p');
// para1.innerText = "Hey I'm red!";
// document.querySelector("body").append(para1);

// para1.classList.add("red");


// let h3 = document.createElement('h3');
// h3.innerText = "Hey I'm a blue!";
// document.querySelector("body").append(h3);

// h3.classList.add("blue");


// let div = document.createElement('div');
// let para2 = document.createElement('p');
// let h1 = document.createElement('h1');
// h1.innerText = "Hey I'm in a div!";

// para2.innerText = "ME TOO!";
// document.querySelector("body").prepend(div);
// document.querySelector("div").prepend(h1);
// document.querySelector("div").prepend(para2);

// div.classList.add("box");


// Dom Events

// Events are signals that something has occurred.(user inputs /actions)

//inline events
// eg . in button tag
/* <button onclick="console.log('button was clicked);console.log('apna college')">click me</button> */

// onclick(when an Element is clicked)
// onmouseenter(when mouse enters an element)


// let btns = document.querySelectorAll("button");
// console.dir(btn);

// btn.onclick = function(){
//    alert("button was clicked");
//}

// function sayHello(){
//     alert("Hello!");

// }

// btn.onclick = sayHello;

// for(btn of btns){
//  btn.onclick = sayHello;
//  btn.onmouseenter = function (){
//     console.log("you entered a button");
//  }
// }

// function sayHello(){
//     alert("Hello!");

// }



//Event  Listener
// addEventListener

// Element.addEventListener(event, callback);

// btns.addEventListener("click", function(){
//     console.log("button clicked");
// });

// let btns = document.querySelectorAll("button");


// for(btn of btns){
//  btn.onclick = sayHello;
//  btn.onclick = sayName;
// }

// function sayHello(){
//     alert("Hello!");

// }
// function sayName(){
//     alert("Apna college");

// }

//above problem solve by eventlistener in above problem function not listening about both function

// let btns = document.querySelectorAll("button");


// for(btn of btns){
// btn.addEventListener("click",sayHello);
// btn.addEventListener("click", sayName);
// }

// function sayHello(){
//     alert("Hello!");

// }
// function sayName(){
//     alert("Apna college");

// }

// let p = document.querySelector('p');
// p.addEventListener("click", function(){
//     console.log("parah was clicked");


// });
// let box = document.querySelector(".box");
// box.addEventListener("mouseenter" , function(){
//     console.log("mouse inside div");
// });




// This in event Listeners

// when 'this' is used in a callback of event handler of something, it refers to that something


// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// // btn.addEventListener("click" , function(){
// //     console.dir(this.innerText);
// //     this.style.backgroundColor = 'beige';
// // });
// // p.addEventListener("click" , function(){
// //     console.dir(this.innerText);
// //     this.style.backgroundColor = 'beige';
// // });
// // h1.addEventListener("click" , function(){
// //     console.dir(this.innerText);
// //     this.style.backgroundColor = 'beige';
// // });
// // h3.addEventListener("click" , function(){
// //     console.dir(this.innerText);
// //     this.style.backgroundColor = 'beige';
// // });


// //remove redundancy

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = 'beige'
// }
// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);




//Keyboard Events

// let inp = document.querySelector("input");

// inp.addEventListener("keydown" ,function(event){
//     console.log("key = ", event.key);
//     console.log("code = ",event.code);
//     console.log('key was pressed');
// });


// inp.addEventListener("keyup" ,function(){
//     console.log('key was up');
// });



//form Events

// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     alert("submitted");
// })


//Extracting form Data


//  let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
    

//     let user = document.querySelector("#username");
//     let pass = document.querySelector("#password");
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hii ${user.value} and your password is ${pass.value}` );
// });


//More Events
//change event
// The change event occurs when the value of an element has been changed (only works on<input>,<textarea>and <select> elements)


//input event
//the input event fires when the value of an <input>,<select>,or<textarea>elements has been changed


//  let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
    
// });

// let user = document.querySelector("#username");
//     user.addEventListener("change",function(){
//     console.log("change event");
//     console.log("final value =" ,this.value);
//    });

//    user.addEventListener("input",function(){
//     console.log("input event");
//     console.log("final value = ",this.value);
//    });



// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input",function(){
//     console.log(inp.value);
//     p.innerText = inp.value;
// });


//Event bubbling


// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// });
// ul.addEventListener("click",function(){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click" , function(){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }


// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click" , function(){
//     let item = document.createElement("li");
//     item.innerText = inp.value;


//     let delBtn = document.createElement("button");
//     delBtn.innerText = "Delete";
//     delBtn.classList.add("Delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value = "" ;

   
// });
//  let delBtns = document.querySelectorAll(".Delete");
//     for(delBtn of delBtns){
//         delBtns.addEventListener("click", function (){
//             let par = this.parentElement;
//             console.log(par);
//             par.remove();
//         });
//     }











//Js call Stack

// call Stack 
//eg. of call function

// function hello(){
//     console.log("hello");

// }
// hello();

//stack is a data structure is arrange like stairs of book first in last out or last in first out
//  lifo or filo

// now learn the meaning of call stack

// eg.
// function hello(){
//     console.log("inside hello fxn");
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello fxn");
//     hello();
// }

// console.log("calling demo fxn");
// demo();
//Visualizing the call stack

// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }

// function three(){
//     let ans = two()+one();
//     console.log(ans);
// }
// three();


//BreakPoints

// in sources


//Js is Single Threaded 


// setTimeout(function (){
//     console.log("apna college");
// },2000);

// console.log("hello ...");


//js is not wait setTimeout and callstack work by the help of browser return in c++ work like a synchronous mode
// let a = 25;
// console.log(a);
// let b= 10;
// console.log(b);
// console.log(a+b);



//eg.
// h1 = document.querySelector("h1");


// function changeColor(color,delay,nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//        if(nextColorChange) nextColorChange();
//  },delay);
    
// }

//     changeColor("red", 1000, () =>{
//        changeColor("orange",1000,()=>{
//         changeColor("yellow",1000, ()=>{
//          changeColor("green", 1000,() =>{
//             changeColor("purple", 1000);
//          });
//         });
//        });
//     });


    //callbacks nesting it looks like => callback hell; to stop this uses promises keywords are async and await


 //Promises
 //The promises object represents the eventual completion (or failure ) of an asynchronous operation and its resulting value
    

//  function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();

//     }else{
//        failure();
//     }
//  }

//  savetoDb(
//     "apna college",
//     () => {
//         console.log("success : your data was saved  " );
//         savetoDb(
//             "hello world",
//             () => {
//                 console.log("success2: data2 saved");
//                 savetoDb(
//                     "utsav",
//                     () => {
//                         console.log("success3: data3 saved");
//                     },
//                     () => {
//                         console.log("failure3 : weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2 : weak connection");
//             }
//         );
//     },
//     () => {
//         console.log(" failure: weak connection. data not saved");
//     }
//  );

    
//resolve & reject

// resolve is success & reject is failure

// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//      let internetSpeed = Math.floor(Math.random()*10)+1;
//      if(internetSpeed > 4){
//      resolve("Success: data was saved");
//      }else{
//     reject("failure: weak connection");
//      }
//     });

// }

// savetoDb("apna college");
//state -> pending , reject(error) ,fulfilled(resolved);

//Promises
// then() & catch()



//eg.
// let request = saveToDBPromise("apnacollege");
// request
//   .then(() => {
//     console.log("promise resolved");
//   })
//   .catch(() => {
//     console.log("promise reject");
//   });


// let request = savetoDb("apna college");
// request.then(() =>{
//     console.log("promise resolved");
//     console.log(request);

// })
// .catch(() =>{
//     console.log("promise rejected");
//     console.log(request);
// });

// savetoDb("apna college")
// .then(() => {
//    console.log("promise resolved");
// })
// .catch(() =>{ 
//     console.log("promise rejected ");
// })
    

//pRomise chaining
//Improved version

// savetoDb("apna college")
// .then(() => {
//    console.log("data1 saved");
//    return savetoDb("helloworld")
   
// })
// .then(()=>{
//     console.log("data2 saved");
//     return savetoDb("shradha");
//    })
//     .then(()=>{
//     console.log("data3 saved");
//    })
// .catch(() =>{ 
//     console.log("promise rejected ");
// });
// promises are rejected and resolved with some data(valid results 0r errors)


// savetoDb("apna college")
// .then((result) => {
//    console.log("data1 saved");
//    console.log("result of promise:",result);
//    return savetoDb("helloworld")
   
// })
// .then((result)=>{
//     console.log("data2 saved");
//     console.log("result of promise",result);
//     return savetoDb("shradha");
//    })
//     .then((result)=>{
//     console.log("data3 saved");
//     console.log("result of promise",result);
//    })
// .catch(() =>{ 
//     console.log("promise rejected ");
//     console.log(error);
// });
    

// now resolve our code
// h1 = document.querySelector("h1");


// function changeColor(color,delay,){
//    return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//         h1.style.color = color;
//        resolve("color changed!") ;
//   },delay);
    

//     });
    
// }

// changeColor("red", 1000)
// .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange" , 1000);
// }) 
// .then (() =>{
//     console.log("orange color was completed");
//     return changeColor("yellow", 1000);

// })
// .then(() =>{
//     console.log("yellow color is completed");
//     return changeColor("purple", 1000);

// })
// .then(() =>{
//     console.log("purple was completed");
// });

    


//async functions
// creates async functions returns promises


// async function greet(){
//     throw "weak connection";
//     return hello;

// }
// greet()
// .then((result) =>{
//     console.log("promise was resolved");
//     console.log("result was: ", result);
// })
// .catch((err) =>{
//     console.log("promise was rejected with err :", err);
// });

// let demo = async() =>{
//     return 5;
// };

//await keyword
// pauses the execution of its surrounding async function until the promise is settled (resolved or rejected) always use with async fxn

//eg.
// function getNum(){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//         let num = Math.floor(Math.random() * 10)+1;
//         console.log(num);
//         resolve();
//         },1000);
        
//     });
// }
// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }


//apply in our code
// h1 = document.querySelector("h1");


// function changeColor(color,delay,){
//    return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//         h1.style.color = color;
//         console.log(`color changed to ${color}!`);
//        resolve("color changed!") ;
//   },delay);
    

//     });
    
// }

// async function demo(){
//     await changeColor("red",1000);
//     await changeColor("yellow",1000);
//     await changeColor("green",1000);
//      changeColor("purple",1000);
    


// }


//Handing rejections with await
// h1 = document.querySelector("h1");


// function changeColor(color,delay,){
//    return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//         let num = Math.floor(Math.random() * 5)+1;
//         if(num > 3){
//             reject("promise rejected");
//         }
//         h1.style.color = color;
//         console.log(`color changed to ${color}!`);
//        resolve("color changed!") ;
//   },delay);
    

//     });
    
// }

// async function demo(){
//     try{
//     await changeColor("red",1000);
//     await changeColor("yellow",1000);
//     await changeColor("green",1000);
//     await changeColor("purple",1000);
//     } catch(err){
//         console.log("error caught");
//         console.log(err);
//     }
//     let a =5;
//     console.log(a);
//     console.log("new number = ", a+3);
    


// }

//APi is when we search on browser sending a request to amazon server and server give response a page

// Application Programming Interface work as waiter in a restaurant in json format

//some random APIs normal without key and keyPassword they are free


//JSON JAVASCRIPT Object Notation earlier in XML format for more knowledge visit www.Json.org
//Accessing Data from Json
// .Json.parse(data)Method To parse a string data into a JS object
//.JSON.stringify(json)Method to parse a JS object data into JSON

//Testing API requests
//tools
// .Hoppscoth
// .postMan

//AJAX Asynchronous JS and XML

//https: Verbs are get,post,delete

//status code 
// .200 means ok
//. 404 - Not found
//.400 - Bad request
//.500- Internal server error


//Add Information in APIs URL
//Query Strings
//https://www.google.com/search?q=harry+porter
//here q is a key and value is harry
//?name=shradha&marks=95
//https headers -> header, value are request & response

//our first request using fetch(url);

// let url =" https://fake-json-api.mock.beeceptor.com/users";

// fetch(url)
// .then((response) => {
//     console.log(response);
//     return response.json();
    
// })
// .then((data) => {
//         console.log("data1 =",data.fact);
//         return fetch(url);
//     })
//     .then((response) => {
//         return response.json();
//     })
//     .then((data2) => {
//         console.log("data2 =",data2.fact);
//     })
// .catch((err) => {
//     console.log("Error -", err);
// });
// console.log("I am happy");


//with help of async and await
// let url = "https://dummy-json.mock.beeceptor.com/posts";

// async function getFacts(){
//     try{
      
//     let res = await fetch(url);
//     let data = await res.json();

//     console.log(data.facts);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();

//     console.log(data2.facts);

//     }catch (e) {
//         console.log("error -", e);
//     }
//     console.log("bye");
// }