// function celsiusToFahrenheit(celsius){
//     let fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }

// let celsius = 34;
// let fahrenheit = celsiusToFahrenheit(celsius);
// console.log(`${celsius}°C is equal to ${fahrenheit}°F`);    

// fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}

let fahrenheit = 104;
let celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is equal to ${celsius}°C`);