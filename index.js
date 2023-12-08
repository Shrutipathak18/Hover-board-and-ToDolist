// 1.ways to print in javascript
//console.log("hello world")
// alert("me");
// document.write("this is document write")

// 2.javascript cosole api
//  console.log("hello world",4+6,"Another log");
//  console.warn("this is the warning")
//  console.error("this is an error")

// 3.variables in javascript
//  what are javascript? -> cotainers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2); 
// 4. datatypes in javascript
// number
var num1 = 455;
var num2 = 56.67;
// string
var str1 = "this is a string";
var str2 = 'this is a string';
// obeject 
var marks = {
   ravi: 34,
   shubham: 45,
   harry: 44
}
//   console.log(num1)// this is print ans in the console 
//   console.log(marks )
// booleans
var a = true;
var b = false;
//    console.log(a,b);
var und;
//    console.log(und)
var n = null;
//    console.log(n);

// at a very high level there are two types of data types in javascript 
// 1. primitive: undefined,null,number,string,boolean,symbols
// 2. reference: arrays and obejects
var arr = [1, 2, 3, 4, 5]
//   console.log(arr) // o/p will be [1,2,3,4,5]
//   console.log(arr[2]) // o/p will be [3]


// operators in javascript
// 1. arithematic operator
var a = 100;
var b = 56;
// console.log("the value of a + b is ",a+b);
// console.log("the value of a - b is ",a-b);
// console.log("the value of a * b is ",a*b);
// console.log("the value of a / b is ",a/b);
// 2. assignment operators
var c = b;
// var c+=2; 
// var c-=3;
// console.log(c);
// comparison operator
var x = 56;
var y = 46
// console.log(x==y);
// console.log(x>y);

//logical operators
// console.log(true && true)
// console.log(true&&false)
// console.log(false&& false)

// similarity OR

// logical NOT
// console.log(!false);
// console.log(!true);

// operator jo do operand me lgta hai e.g 34 + 45 "+" is a operator

// function 
// DRY = do not repeat yourself
//   function avg(a,b)
//   {
//     return (a+b)/2;
//   }
// c1 = avg(4,6);
// c2 = avg(14,16);
// // console.log(c1,c2);

// // conditionals in java script
//  var age = 4;
//  // single if statement can also work 
//  if(age>18 ){
//     console.log('you are not a kid');
//    }

//    // if else statement
//    if(age>18 ){
//     console.log('you are not a kid');
//    }
//    else{
//     console.log("your are a kid");
//    }
//    // if else ladder
//    if(age>32){
//     console.log("you are not a kid")
//    }
//    else if(age>26)
//    {
//      console.log("bache ni rhe");
//    }
//    else if(age>22)
//    {
//      console.log(" hui bache ni rhe");
//    }
//    else if(age>18)
//    {
//      console.log(" huihui bache ni rhe");
//    }
//    else{
//       console.log("bacche rhe");
//    }
//    console.log("end of ladder");

// loops 
// for loop 
var arr = [1, 2, 3, 4, 5, 6, 7]
// // console.log(arr);
// for(var i = 0;i<arr.length;i++ ){
//    if(i==2){
//       //break;
//       continue;
//    }
//   console.log(arr[i])
// }
// arr.forEach(function(element){
// console.log(element)
// // })
//  const ac = 0;
//  ac++;
//  ac = ac+1;

// let j = 0;
// while(j<arr.length){
//    console.log(arr[j]);
//    j++;
// // }
// do {
//    console.log(arr[j]);
//    j++;
// } while (j < arr.length);

//array methods
let myArr = ["Fan","camera",34,null,true];
// console.log(myArr.length);
// //myArr.pop();
// //myArr.push("shruti");
// //myArr.shift();
// // myArr.unshift("34")
// const newlen = myArr.unshift("shruti")
// console.log(newlen);
// console.log(myArr);

// // string methods in javascript
// let mylovelystring = "harry is a good boy";
// console.log(mylovelystring.length)
// console.log(mylovelystring.indexOf("good"))
// console.log(mylovelystring.lastIndexOf("boy"))
// console.log(mylovelystring.slice(0,3))
// d = mylovelystring.replace("harry","rohan");
// console.log(d,mylovelystring )

// dates in javascript 
// //Methods in dates
// let myDate = new Date();
// console.log(myDate); 
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


// DOM manipulation
// DOM methods 
let elem = document.getElementById('click');
// console.log(elem);

let elemClass  = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary") 
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML)
// console.log(elem.innerText)
 
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)
tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "this is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2,createdElement);
 
// selecting using query
// sel = document.querySelector('.container')
// console.log(sel) 
// sel = document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
// console.log('the button was clicked')
// }
// window.onload = function(){
//    console.log('the document was loaded')
// }
// evenets in javascript
// // firstcontainer.addEventListener('click',function(){
//    firstcontainer.addEventListener('mouseover',function(){
//    console.log("clicked on container") 
// })
//if want to change the html in events 
// firstcontainer.addEventListener('click',function(){
//    document .querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
//    //    firstcontainer.addEventListener('mouseover',function(){
//       console.log("clicked on container") })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup',function(){
//    document .querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
//    console.log("Mouse up when clicked on container");
// })
// firstcontainer.addEventListener('mousedown',function(){
//       document .querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
//       //    firstcontainer.addEventListener('mouseover',function(){
//          // console.log("clicked on container") })
//    console.log("Mouse down when clicked on container");
// })


// arrow functions
// function summ(a,b){
//     return a+b;
// }
summ = (a,b)=>{
   return a+b;
}
// SetTimeout and setinterval
 logKaro = ()=>{
   document .querySelectorAll('.container')[1].innerHTML = "<b> set interval fired</b>"
   console.log("i am your log")
 }
// setTimeout(logKaro,2000)
// clr = setInterval(logKaro,2000 )
// //use clearINterval(clr) / clearTImeout(clr)  to cancel setInterval/setTimeout

 
// javascript local storage
// localStorage.setItem('name','harry')
//localStorage
//localStorage.getItem('name')
// localStorage.remove;// for removing item
// localStorage.clear();

// JSON
// obj = {name: "harry",length: 1}
// jso = JSON.stringify(obj);
// console.log(typeof jso) // this will show jso ky hai => string
// console.log(jso)
// parsed = Json.parse(`{"name": "harry","length": 1,"a":{"this":"that"}}`)
// console.log(parsed); 

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)