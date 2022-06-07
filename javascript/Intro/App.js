// var username = "root";
// var age = 20;

// var username = "admin"; // re declare variable
// username = "Joe"; // updated
// console.log("hello friend")
// console.log(username);

// const company = "Google";
// // const company = "facebook"; // error
// //company = "facebook"; // error
// console.log(company);

// let website = "www.google.com";
// // let website = "www.facebook.com"; // error
// website = "www.facebook.com"; // correct
// console.log(website);
// console.log(user)
// var user = "root";
// console.log(userx)

// var number1 = 10;
// var number2 = 20;
// var total = number1 + number2; // 10 + 20 = 30
// var total = 10+20;
// var total = 10 + "20"
// var country = "Bru" + "ssel"
// var country = 'Brussel\'s beer'

// console.log(country)
// console.log(total);

// document.getElementById("message").innerText = "Hello friend";
// document.getElementById("container").innerHTML = "<h1>container!!!</h1>"

// BMI = weight / (height * height);
// bruto salary 3000 euro
// tax percent %21 = netto * taxpercent / 100

// single line comment

/*
    multi line comment
    sssss
    ggggg
    alert(1)
*/

/*
arithmetic operators
+ addition
- subtraction
* multiplication
/ division
*/

let result;

result = 7+3; // addition operator
result = "a" + "b";

result =  7-3 // subtraction operator

result += 2; // result = result + 2
result -= 1; // result = result - 1

result = 5 * 5; // multiplication operator
result *= 2; // result = result * 2 -> 25*2 = 50

result = 50 / 2; // division operator > 25
result /= 5; // result = result / 5 -> 25/5 = 5

// increase and decrease
result++;
result++;
++result;

result--;
--result;


var number1 = 50;
number1 +=10; // number1 = number1 + 10
console.log(number1)

// let number2 = 40;
// number2 +=10;
// console.log(number2)

// let firstname = "John";
// let lastname = "Doe";
// result = firstname + " " + lastname; // John Doe

var n1 = 5; // number
var n2 = 5; // number
var n3 = 6;
var n4 = "5";

// equal to operator == 
result = n1 == n2
result = n1 == n3
result = n1 == n4 // value

// equal to operator === 
result = n1 === n4 // value and type

result = "spacex" == "spacex"
result = "SpaceX" === "spacex"

result = "🥸" == "🥸" // true
result = "🥸 " == "🥸" // false

// var %myVariable = "asdasd";
// var -myVariable = "asdasd";
// var "sadasdasd = "adadad"

var _x=5
var $x=5;
var X = 5;
// var 🥸 = 5;
// var x_🥸 = 5;

result = n1!=n2
result = n1!=n4
result = "🥸" != "abc"

var x1; // undefined
var x2; // undefined
// undefined === undefined

result = n1!==n4 // check value and type

result = x1 === x2

// greater than operator >

result = n1>n2 // false
result = n3>n1
result = n3>n4 // n3=6, n4="5"

// less than operator
result = n4<n3; // n3=6, n4="5"

// greater than or equal to operator >=
result = n1>=n2 // true
result = n1>=n4 // true
// result = n1>==n4 

// less than or equal to operator <=
result = n1<=n3 // true

result = n1>=n3 ? "Correct": "Incorrect";

var myRule = n1>=n3;
var mySecondRule = n3<=n1;
var successMessage = "Correct";
var errorMessage = "Incorrect";

result = myRule ? successMessage : errorMessage;

var StudentName = "Jack"
var StudentAge = 17;
var StudentMoney = 10;
// result = StudentAge>=18 ? StudentName + " is allowed to drink alcohol" : StudentName + " is not allowed to drink alcohol";
result = StudentAge>=18 ? `${StudentName} is allowed` : `${StudentName} is not allowed`;


// true and false 

result  = myRule && mySecondRule;
// myRule = true,mysecondRule = false

var StudentRule1 = StudentAge >=18; // true
var StudentRule2 = StudentMoney >=1; // false
var GetResult = StudentRule1 && StudentRule2;
result = GetResult ? "Yes he can have" : "no he need money";

result = 5>="10" ?
(5==="5")?
'yes they are equal'
:
"no data type is different" : "no";

console.log(result + " 🥸")


/*
`${StudentName} is allowed`
StudentName + " is allowed
*/