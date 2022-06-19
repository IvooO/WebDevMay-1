// //Number methods

// var result;
// var n1= "10";
// var n2= 10;
// var n3= "10.5";
// var n4= "10 15 20";
// var n5= "10, 15, 20";
// var n6= "9e+2";
// var n7= 2000.56;


// //toString () method
// result = n2.toString();//

// result = parseInt(n1);

// result = "10" + "10"

// result = parseInt("10") + parseInt("10") ;

// // result = PI.toExponential(2)

// result = parseFloat(n3) 

// result = n7.toFixed()

// result = Number("10");
// result = Number(undefined);
// result = Number(null);
// result = Number(true);


// result = Number.isFinite(NaN);

// var userInput = 10;
// if (Number.isInteger(userInput)){
//     console.log("Valid input")
// } else {
//     console.log("InValid input")
// }



// console.log(result, typeof result)

// const Result = document.getElementById("result");
// var userinput = prompt("Enter a number");


// if (Result.isInteger){
//     console.log("Valid input")
// } else {
//     console.log("InValid input")
// }

// console.log(typeof userinput)
// Result.innerText=userinput

//calculator

var Result = document.getElementById("result");
var userinput1 = parseInt(prompt("Enter first number"));
var userinput2 = parseInt(prompt("Enter second number"));
let Sum;

Sum = userinput1 + userinput2;

// console.log(typeof Sum)
Result.innerText=Sum



