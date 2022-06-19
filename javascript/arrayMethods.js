// array methods
var result;
var myArr = [];
var myNumbers = [5, 6, 7, 2, 9, 33, 100,15,10, 66, 11, 99, 77]
var myLetters = ['c', 'b', 'a', 'd', 'e', 'g', 'f', 'h', 'j', 'i']
// push method 
myArr.push(1)
myArr.push("a")
myArr.push(true)
myArr.push(null)
myArr.push({ name: "John" })

// pop method
myArr.pop() // last added element is removed

// shift method
myArr.shift() // first added element is removed

// join method
result = myArr.join("-")

// sort method
result = myLetters.sort() // alphabetical order
result = myNumbers.sort(function (a, b) {
    return b - a
}) // numerical order

// concat method
result = myNumbers.concat(myLetters) // combines two arrays

// iteration methods {for, forEach, map, filter, reduce, every, some}
// for(var i=0;i<result.length;i++){
//     console.log(result[i])
// }

let emptyArray=[4,6,'atilla','intec','koc']
function NewForLoop(value, index, arrayitself) {
    console.log(value, index, arrayitself)
}
// result.forEach(NewForLoop)

// for(let i=0; i<emptyArray.length;i++){
//     console.log(emptyArray[i],emptyArray.length)
// }

var total=0
// for(let i=0;i<myNumbers.length;i++){
//     //console.log(myNumbers[i])
//     total+=myNumbers[i]
//     console.log(total)
// }

myNumbers.forEach((n)=>total+=n)
result = `Total result is ${total}`

// result.map(NewForLoop)



//filter methhod

let posts = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
},
  ]

// result = myNumbers.filter(function(value){
    result = myNumbers.filter(value => value >=30)
    result = posts.filter(value=>{
            return value.id === 5
    })
  


console.log(result)