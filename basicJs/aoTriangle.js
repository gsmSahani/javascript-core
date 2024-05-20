// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
// formula of area of triangle is 1/2 * b * h
var length = 5;
var breadth = 6;
var height = 7;

var side = (length + breadth + height) /2;
var area = Math.sqrt(side * (side - length) * (side - breadth) * (side * height));
console.log(area);
console.log(side);