var _students = [
    {
        id:1,
        name:'avarel',
        course:'javascript',
        score:45
    },
    {
        id:2,
        name:'mike',
        course:'java',
        score:55
    },
    {
        id:3,
        name:'george',
        course:'javascript',
        score:66
    },
    {
        id:4,
        name:'joe',
        course:'python',
        score:70
    }
]



function whoPassedExam () {
    let param = (_students.filter(value=>value.score >= 50))
    return param
       
}

// whoPassedExam

console.log("These are all the students with more then 50%", whoPassedExam(_students))



function passArray(mango) {
    for(var i=0;i<mango.length;i++){
    console.log(mango[i]);
}
}
passArray (["mango", "apple", "banana"])

function wieKomter (personen) {
    for(var i=0;i<personen.length;i++){
        console.log(personen [i])


}
}

wieKomter (["jaap", "piet", "dieter"])



var myLetters = ['c', 'b', 'a', 'd', 'e', 'g', 'f', 'h', 'j', 'i']
