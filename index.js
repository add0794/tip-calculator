var btn = document.getElementById("btn");
var bill = document.getElementById("bill");
var tip = document.getElementById("tip");
var resultParagraph = document.getElementsByClassName("result")[0];
function calculateBill() {
    var tipFraction = parseFloat(tip.value) * 0.01; // Retrieve the value from the tip input and convert it to a float
    var billValue = parseFloat(bill.value); // Retrieve the value from the bill input and convert it to a float
    var tipValue = tipFraction * billValue; // Calculate the total tip
    var total = tipValue + billValue; // Calculate the total bill
    if (resultParagraph) {
        resultParagraph.textContent = "Your tip is $".concat(tipValue.toFixed(2), " and your bill is $").concat(total.toFixed(2), ". Please make sure to give the waiter a nice tip!");
    }
}
if (btn) {
    btn.addEventListener("click", calculateBill);
}
