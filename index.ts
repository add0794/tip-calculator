const btn = document.getElementById("btn") as HTMLButtonElement;
const bill = document.getElementById("bill") as HTMLInputElement;
const tip = document.getElementById("tip") as HTMLInputElement;
const resultParagraph = document.getElementsByClassName("result")[0] as HTMLParagraphElement;

btn.addEventListener("click", () => {
    const tipFraction: number = parseFloat(tip.value) * 0.01;
    const billValue: number = parseFloat(bill.value);

    const tipValue: number = tipFraction * billValue;
    const total: number = tipValue + billValue;

    if (resultParagraph) {
        resultParagraph.textContent = `Your tip is $${tipValue.toFixed(2)} and your bill is $${total.toFixed(2)}. Please make sure to give the waiter a nice tip!`;
    }
});


/* Option 2

function calculateBill(): void {
    const tipFraction: number = parseFloat(tip.value) * 0.01; // Retrieve the value from the tip input and convert it to a float
    const billValue: number = parseFloat(bill.value); // Retrieve the value from the bill input and convert it to a float

    const tipValue: number = tipFraction * billValue; // Calculate the total tip
    const total: number = tipValue + billValue; // Calculate the total bill

    if (resultParagraph) {
        resultParagraph.textContent = `Your tip is $${tipValue.toFixed(2)} and your bill is $${total.toFixed(2)}. Please make sure to give the waiter a nice tip!`;
    }
}

if (btn) {
    btn.addEventListener("click", calculateBill);
} */