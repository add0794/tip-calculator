"use strict";
const btn = document.getElementById("btn");
const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const resultParagraph = document.getElementsByClassName("result")[0];
btn.addEventListener("click", () => {
    const tipFraction = parseFloat(tip.value) * 0.01;
    const billValue = parseFloat(bill.value);
    const tipValue = tipFraction * billValue;
    const total = tipValue + billValue;
    if (resultParagraph) {
        resultParagraph.textContent = `Your tip is $${tipValue.toFixed(2)} and your bill is $${total.toFixed(2)}. Please make sure to give the waiter a nice tip!`;
    }
});
//# sourceMappingURL=index.js.map