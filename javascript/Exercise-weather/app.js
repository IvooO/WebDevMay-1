function sweaterOrnot() {

 
 
  let temp = document.getElementById("temp").value;
  let greeting
  if (temp <= 0) {
    greeting = "Wear a sweater and a jacket";
} else if (temp < 20) {
    greeting = "Take a sweater with you.";
  } else {
    greeting = "No need to wear a sweater";
  }

  document.getElementById("result").innerHTML = greeting;
 
}

















