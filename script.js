let displayValue = "";

function appendtoDisplay(val) {
    displayValue += val;
    document.getElementById("display").value = displayValue;
}

function clearDiplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function operate() {
    appendtoDisplay(" " + operator + " ");
}