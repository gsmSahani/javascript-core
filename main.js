// console.log(a);
// var a = 10;
// console.log(a);
// console.log(b);

// lexical scopen example
// function outer(){
//     var x = 10;
//     function inner(){
//         console.log(x);
//     }
//     outer();
// }
// inner();

// shadowing effect

// var a = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;

// //   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);

// illegal shadowing

// var a = 100;
// {
//     let a = 10;
//     console.log(a)
// }

// example of closure

// function a(){
//     var a = 10;
//     function b(){
//         console.log(a);
//     }
//     b();
// }
// a();

// function x(){
//     for(var i = 1; i<=5; i++){
//         setTimeout(function() {
//             console.log(i);
//         }, i * 3000);
//     }
//     console.log("Namaste Javascript");
// }

// x();

// function outer(){
//     const a  = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner();
// }
// outer();

// function outer(){
//     var a =10 ;
//     let b = 20;
//     const c = 30;

//     function inner(){
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     return inner;
// }
// return outer() ();

// write a 5 javascript program of closure
// write a 5 javascript program of callback

// difference between call apply and bind
// example of call/
// here call method invokes a function with a given this value and arguments provided one by one
// var employee1 = {firstName: 'Gautam' , lastName: 'Sahani'};
// var employee2 = {firstName: 'Rintu' , lastName: 'Reji'};

// function invite(greeting1,greeting2){
//     console.log(greeting1 + ' ' +this.firstName + ' ' +this.lastName + ' '+ greeting2);
// }
// invite.call(employee1,'hello','How are you?');

// apply
// it is same as the call but it allows you to pass in arguments as an Array
// var employee3 ={firstName: 'Vipul',lastName: 'Mali'};
// var employee4 ={firstName: 'Sufiyaan',lastName: 'Manihar'};

// function invite(greeting3,greeting4){
//     console.log(greeting3 + ' ' + this.firstName+ ' ' + this.lastName + ' ' + greeting4);
// }
// invite.apply(employee3,['Hello', 'How are you vipul']);
// invite.apply(employee4,['Hello', 'How are you Manihar']);

// bind
// it returns a new function allowing you to pass any number of arguments
// var employee5 = {firstName: 'Shambhu',lastName: 'Sahani'};
// var employee6 = {firstName: 'Mira',lastName: 'Sahani'};

// function invite(greeting5,greeting6){
//     console.log(greeting5+ ' ' + this.firstName+' ' + this.lastName+' '+greeting6);
// }
// var inviteEmployee5 = invite.bind(employee5);
// var inviteEmployee6 = invite.bind(employee6);

// inviteEmployee5('Hello','How are you?');
// inviteEmployee6('Hello','How are you?');
// --------------------------------------------------------
// slice() method

// let arrayIntegers = [2,5,6,4,7];
// console.log(includes.arrayIntegers);
// let slicedIntegers = arrayIntegers.slice(1,4);
// console.log(slicedIntegers);
// ------------------------------------------------
// splice() method
// it is used to add remove the element from an array and return the deleted or added array element as an new array
// let array1 = [2, 4, 6, 8, 10];
// let array2 = [2, 4, 6, 8, 10];
// let array3 = [2, 4, 6, 8, 10];

// let arrayInteger1 = array1.splice(0, 2);
// console.log(arrayInteger1);

// var a = null;
// var b = undefined;
// // a == b;
// var c = a === b;
// console.log(c);



// higher order function
const numbers = [1,2,3,4,5];
function isOdd(array)