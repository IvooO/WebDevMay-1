/*  

let users = [
    {
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
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Brussel",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Brussel",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 5,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]

  /*

// filter user data 

const FilteredUsers = users.filter (function(user){
    console.log(user)
    return user.id == 5
   

})

FilteredUsers.forEach(function(user){
    // console.log(user)
    user.address.city = "Brussel"
    console.log(`###test#####\nfullname: ${user.name}\nusername: ${user.username}\nemail:${user.email}\ncity:${user.address.city}\ngeolocation:${user.address.geo.lng}` )

})

*/


let ivo = [

 {
    
      "name": "Ivo Van Overstraeten",
      "username": "Ivoo",
      "email": "ivo@yahoo.com",
      "address": {
        "street": "Pelikaanberg",
        "city": "Sint-Pieters-Leeuw",
        "zipcode": "1600",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "04987675",
      "website": "ivo.io",
      "company": {
        "name": "no-company",
       
      }
    }
    ]

    // function myInfo (user){
    //     console.log(user)
      
    //     return user
    // }

    // myInfo(ivo)

    // // console.log(`###test#####\nfullname: ${user.name}\nusername: ${user.username}` )
/*

  ivo.forEach(function(user){
    // console.log(user.toString())
  
    console.log(`###test#####\nfullname: ${user.name}\nusername: ${user.username}\nemail:${user.email}\ncity:${user.address.city}\ngeolocation:${user.address.geo.lng}` )

})

let krant = [
    {

    naam : "Nieuwsblad",
    onderwerp : "financieel, media, nieuws ",
    land : "Belgie"
}]

krant.forEach(function(param) {
    console.log(`###Mijnkrant#####\nnaam: ${param.naam}\nonderwerp: ${param.onderwerp}` )
     console.log(param.onderwerp.toString())
})

*/
/*

function FilterData(myarr){
    // console.log(myarr)
    // filter here
    return myarr 
   

}

function ChangeLetterToUpperCase (filteredData) { // changing username letters to upper case
    //return filteredData.toUpperCase()
    // console.log(filteredData)
    let temp = []
    filteredData.forEach(function(user) {
        console.log(user.name)
        user.name = user.name.toUpperCase()
        temp.push(user)
        
    });
    return temp

}

function PrinterService (getFilteredData){
    const getResults = FilterData(ChangeLetterToUpperCase(getFilteredData))
    console.log(getResults, "test")

}

*/
// PrinterService(users)

// var numbers = [5, 6, 7, 2, 9, 33, 100,15,10, 66, 11, 99, 77]

// let results = numbers.reduceRight(function(accumulator,currentValue) {

    
//     console.log("Accumulator:", accumulator)
//     console.log("CurrentValue:", currentValue)
//     return accumulator + currentValue

// })

// var students = {
//     name: "joe",

// }

// var nestedArray = [1,2,[3,4,[5,6,7]]]
//     // console.log(getResults, "test")
//     return Accumulator + currentValue




// console.log(getResults, "test")$$$




// var n1 = [5, 6, 7]
// var n2 = [1, 2, 3]

// const n3 = n1.concat(n2);

// console.log(n3);


// console.log(n1.fill(0, 2, 4));



// var numbers = [5, 6, 7, 2, 9, 33, 100,15,10, 66, 11, 99, 77]
// const find = numbers.find (element => element > 5)

// console.log(find);


// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// // expected output: Array ["a", "b", "c", "d", "e", "f"]

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

const array2 = ['de tijd', 'laatste nieuws', 'nieuwsblad'];
array2.forEach(gazet => console.log(gazet));



// var numbers = [5, 6, 7, 2, 9, 33, 100,15,10, 66, 11, 99, 77]
// // const uitkomst = numbers.filter (number => number > 9) ;
// // console.log(uitkomst)
// // numbers.forEach(number => console.log(number))

// const result = numbers.filter (number => number >33);
// console.log(result)




// const array = [1, 4, 9, 16];
// array.forEach (element => console.log(element))

// pass a function to map
// const map1 = array1.map(x => x * 2);


// // expected output: Array [2, 8, 18, 32]
// const map2 = array.map(f => f-1);
// console.log(map2);
// const map = array.map ( numb => numb  +9);
// console.log(map)

// const map = array.map (mapper => mapper +7)
// console.log (map)

// const filter = array.filter (fil => fil >4)
// console.log (filter)

// var numbers1 = [5, 6, 7, 2, 9, 33, 100,15,10, 66, 11, 99, 77]
// var numbers2 = [1001,1005]

// var numbers3 = numbers1.concat(numbers2)
// console.log(numbers3)



const isHigherThen = (currentValue) => currentValue > 1;

const array5 = [2, 30, 39, 29, 10, 13];

console.log(array5.every(isHigherThen));
// expected output: true
