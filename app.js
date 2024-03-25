var userInput = +prompt("Which table you want");
var userInput2 = +prompt("1 TILL ?");


for (var i = 1; i <= userInput2; i++) {
  document.write(userInput + " x " + i + " = " + userInput * i + "<br>");
}

// My first table generater in JS create with for loop  and prompts from users to enter the number of the table they want and thay want 1 till 10 ,20 ,30 ,100
