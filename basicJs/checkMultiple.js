// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  
var number  = 21;
if(number <= 0){
    console.log(number + " Please enter positive number");
}else if(number % 3 === 0 && number % 7 === 0){
    console.log(number + " It is multiple of both the table 3 and 7");
}else if(number % 3 === 0){
    console.log(number + " is multiple of 3");
}else if (number % 7 === 0){
    console.log(number + " is multiple of 7");
}else{
    console.log(number + " is not multiple of 3 nor 7");
}

// now using function 
// method 2
function isTable(number){
    if(number <= 0){
        console.log(number + " Please provide a positive number");
    }else if(number % 3 === 0 && number % 7 === 0){
        console.log(number + "it is multiple of both table 3 and 7");
    }else if(number % 3 === 0){
        console.log(number + "is table of 3");
    }else if(number % 7 === 0){
        console.log(number + "it is table of 7");
    }else{
        console.log(number + "it is not table of 3 nor 7");
    }
}
var number = 21;