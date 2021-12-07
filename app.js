function display(val) {
  document.getElementById("result").value += val;
}
function clearScreen() {
  document.getElementById("result").value = " ";
}
function calculatorOperations() {
  var userInput = document.getElementById("result").value;
  var userResult = eval(userInput);
  document.getElementById("result").value = userResult;
}
