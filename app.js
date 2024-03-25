var userInput = +prompt("Which table you want");
var userInput2 = +prompt("1 TILL ?");

for (var i = 1; i <= userInput2; i++) {
  document.write(userInput + " x " + i + " = " + userInput * i + "<br>");
}
