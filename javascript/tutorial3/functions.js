


// console.log("functions.js");

// /*
// regular function 
// arrow function
// */

// // function GetSum(){
// //     // here function scope
// //     var getResult = 1+1;
// //     console.log("Get Sum function", getResult);
// //     return 5;

// // }




// function bmi(weight, height) {
//    result = weight / (height**2);
// }

// console.log(bmi);


   


// (param1, param2, paramN) => expression
// ES5




// // //GetSum(); // calledback function
// // console.log(GetSum())

// // function GetSumOfNumbers(n1,n2){
// //   //  console.log(n1,n2)
// //     return n1+n2 // 1+1 or 2+5
// // }

// // //GetSumOfNumbers("hello world",[1,2,3])
// // //GetSumOfNumbers({id:1},null)
// // console.log(GetSumOfNumbers(4,5))
// // console.log(GetSumOfNumbers(10,20))

// // var Student = {
// //     name:"JoeDalton",
// //     age:25
// // }

// // function GetStudentName(studentObj){
// //     console.log(studentObj.name)
// // }


// // GetStudentName(Student)

// // function GetNumber1(){
// //     console.log(5)
// //     return 5
// // }

// // function GetNumber2(){
// //     console.log(6)
// //     return 6
// // }

// // function GetResult(){
// //     console.log(GetNumber1()+GetNumber2())
// // }

// // GetResult()

// var Student = {
//     name: "Joe",
//     age: 25,
//     isStudent: true,
//     isTeacher: false,
//     scores: [44, 55, 66, 77]
// }


// function VerifyStudent(studentParam) {
//     //  console.log(studentParam) // function scope
//     let isStudent = studentParam.isStudent
//     // console.log(isStudent)
//     return isStudent ? `NAME:${studentParam.name}\nAGE:${studentParam.age}\nSCORES:${studentParam.scores.toString()}` : "He/she is not a student"
// }

// // arrow function
// const VerifyStudent2 = studentParam => {
//     //  console.log(studentParam) // function scope
//     let isStudent = studentParam.isStudent
//     // console.log(isStudent)
//     console.log("Arrow function")
//     return isStudent ? `NAME:${studentParam.name}\nAGE:${studentParam.age}\nSCORES:${studentParam.scores.toString()}` : "He/she is not a student"
// }

// const GetSumOFNumbers =  (n1,n2) => n1+n2
// const TestArrowFunction = ()=>console.log("hello arrow function")

// console.log(GetSumOFNumbers(4,5))
// TestArrowFunction()

/* BMI calculator

first method

var height=1.78;
var weight=76;

BMI = (weight/(height*height))
console.log(BMI);

 end */

// second method
/* 

function Getbmi() {
 var getResult = (weight/(height*height));
 console.log(getResult)
return 0;
}

Getbmi(height=1.78, weight=76);



end */




// netto salary





// var Ivo = {

//     city:"Brussel",
//     postcode:1600,
//     favorite_food:"muesli",

// }

// result = `Ivo lives in ${Ivo.city} with postnumber ${Ivo.postcode}.}`;

/*

calculate BMI  regular and arrow function

regular
var Ivo = {
    height: 1.78,
    weight: 76,
}

var height: 1.78;
var weight: 76;

let result

function MyBmi() {
   
    var getBmi =  (weight/(height*height))
    result = getBmi
}
*/



// arrow function
const GetBMI = (height, weight) => (weight/(height*height))
console.log(GetBMI(1.78,76))


const GetNetto = (bruto, tax) => (bruto * (tax / 100))
console.log(GetNetto(3000, 21))

// regular function

function GetNet() {
    var getResult = (bruto * (tax/100));
    console.log(getResult)
   return 0;
   }
   
GetNet(bruto=3000, tax=21);
   

