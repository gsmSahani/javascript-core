// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
var integer = 400;
if(Math.abs(100 - integer) <= 20){
    console.log(integer + " integer is between 20 to 100");
}else if(Math.abs(400 - integer) <= 20){
    console.log(integer + " integer is between 20 to 400");
}else{
    console.log(integer + " number is out of range");
}
// method 2
function isInRange(number){
    return (Math.abs(100 - number) <= 20 || (400 - number) <= 20);
}
var number = 89;
console.log(isInRange(number) + "is within the range");