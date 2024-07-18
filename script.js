let displayValue = "";

function appendToDisplay(val) {
  displayValue += val;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "";
}

function operate(operator) {
  appendToDisplay(" " + operator + " ");
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById("display").value = displayValue;
  } catch (error) {
    displayValue = "Error";
    document.getElementById("display").value = displayValue;
  }
}