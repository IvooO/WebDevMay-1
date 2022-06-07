// var name = "john"
// name = "Doe"
// console.log("Hello " +  name)

// const company = "Google";

// //const company = "facebook"; //error
// console.log(company);

// let website = "wwww.google.com";
// company = "facebook"; 
// console.log(website);

// var keyword > can be re-declared
// const keyword > can not be re-declared or updated
// let keyword > can be updated


// var user = "root";
// console.log(user)

// var number1 = 10;
// var number2 = 20;

// var total = number1 + number2; //10+20=30
// console.log(total);

// if (total = 30 ) {
//     console.log("correct");
//   }


// var name = "john"
// var lastname = "Doe"
// console.log("Hello " + name + lastname  )


// document.getElementById("message").innerText = "Hello Friend";
// document.getElementById("container").innerHTML = "<h1>container!</h1>";

// BMI = weight / (height*height)

// var weight = 76;
// var height = 1.76;
// var bmi = (weight/(height*height))

// // console.log (weight/(height*height))

// console.log (bmi)


// var bruto  = 3000;
// var tax = 21;
// var netto = (3000 * 21)

// console.log = (netto)

// let result 

/* + addition */


// result = 7 + 3 

// - subtraction

// result = 7 - 3 

// console.log (result) 



// var name = "john"
// var lastname = "Doe"
// console.log( name + " 😄 " + lastname)

// var n1 =  5;
// var n2 =  5;
// var n3 =  4;
// var n4 =  "5";

// equal to operator  == (value need to be the same)

// result = n1 == n3
// result = n1 == n2
// result = n1 == n4

// equal to operator  === (value and type need to be the same)

// result = n1 === n4



// result = "spacex" == "spacex" //true
// result = "SpaceX" === "spacex"  //false


// result = n1 >= n3 ? "Correct": "Incorrect";

// var student = "Jack"
var age = 19
var StudentMoney = 10

// result = age >= 18 ? "Allowed": "Not allowed";
// console.log (student + " " +"you are" + " " + result + " 😄 ")



// var myRule = n1>=n3;
// var succesmessage = "Correct"
// var errorMessage = "Incorrect"

// result = myRule ? succesMessage : errorMessage; 


// var studentName = "Jack"
// var age = 17

// result = age>=18 ? `${studentName} is allowed` :  `${studentName} is Not allowed`;

// console.log (result + " 😄 ")


// True and false


// result = myRule && mySecondRule
// var student = "Jack"
// var StudentRule1 = age >= 18; //True
// var StudentRule2 = StudentMoney >= 11; //False
// var GetResult = StudentRule1 && StudentRule2;

// // result = GetResult ? "Yes he can Have": "No he can't have Money";

// // console.log (result + " 😄 ")

// result = GetResult ? `${student} is allowed` :  `${student} is Not allowed`;

// console.log (result + " 😄 ")


// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store" +  " " + myAdverb + ".";
//     return result;



// }

//  // change the words to test your function

// console.log(wordBlanks("dog", "big", "ran", "quickly" ))
// console.log(wordBlanks("bike", "slow", "flew", "slowly" ))


function switchOfStuff(val) {

    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    } 
    return answer;
}

console.log(switchOfStuff("c"));


























