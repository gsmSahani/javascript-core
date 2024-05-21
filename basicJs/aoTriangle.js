// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
// formula of area of triangle is 1/2 * b * h
function areaOfTriangle(a, b, c) {
    let s = (a+b+c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}
console.log(areaOfTriangle(5,6,7));
return areaOfTriangle;
var length = 5;
var breadth = 6;
var height = 7;

var side = (length + breadth + height) /2;
var area = Math.sqrt(side * (side - length) * (side - breadth) * (side * height));
console.log(area);
console.log(side);
