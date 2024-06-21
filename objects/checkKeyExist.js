// write a js program to check that the key exists in object or not

// 5 Approach to deal with it

// Approach 1: using the `in` operator

function checkKey1(obj, key) {
  return key in obj;
}
const obj1 = { a: "gautam", b: "pradeep", c: "keval" };
console.log(checkKey1(obj1, "b"));
console.log(checkKey1(obj1, "e"));

/*
this `in` operator check if key exist in obj or not if found return true otherwise false
check for both own and inherited properties also

*/

// Approach 2: Using hasOwnProperty Method
function checkKey2(obj, key) {
  return obj.hasOwnProperty(key);
}
const obj2 = { a: "gautam", b: 10, c: "mira", d: 758210, e: "anjali" };
console.log(checkKey2(obj2, "f"));
console.log(checkKey2(obj2, "b"));

// The hasOwnProperty check if the property exist in the object itself (not inherited properties);

// Approach 3:  Using Object.prototype.hasOwnProperty.call
function checkKey3(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
const obj3 = { a: "shankar", b: 10, c: "poonam", d: 758210, e: "Mrunal" };
console.log(checkKey3(obj3, "b"));
console.log(checkKey3(obj3, "f"));

// it is the robust version of hasOwnProperty

// Approach 4:  Using Object.keys
function checkKey4(obj,key){
    return Object.keys(obj).includes(key);
}
const obj4 = { a: "shankar", b: 10, c: "poonam", d: 758210, e: "Mrunal" };
console.log(checkKey4(obj4, "a"));
console.log(checkKey4(obj4, "b"));

// first convert object key to an array and check if the key is present or not


// Approach 5:  Using Reflect.has (ES6)
function checkKey5(obj,key){
    return Reflect.has(obj,key)
}
const obj5 = {bike: "hero",superBike: "BMW GS 1250",car:"Rubicon", superCar: "Lamborghini",};
console.log(checkKey5(obj5,'car'));
console.log(checkKey5(obj5,'SuperBike'));

// it is same like in operator in 