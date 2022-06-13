var number= 0;

const inputValue= document.getElementById("username");

function clickHandler(event) {

    //event.preventDefault();

    //var number= 1;

    number++

    console.log("Clicked button!", number);

}



function InputHandler(event) {

    console.log("Hello", inputValue.value);

}

const RegisterButton= document.getElementById("register");

// addEventListener

RegisterButton.addEventListener("click", function(event){

    console.log("register button clicked", inputValue.value);

});

inputValue.addEventListener("change", InputHandler);

