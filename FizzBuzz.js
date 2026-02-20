// TODO: Define constants for the form and the result display area
const myNum = document.getElementById("num")
const mySubmit = document.getElementById("submit")
const result = document.getElementById("result")

// TODO: Add the first line of the event listener to handle form submission
mySubmit.addEventListener("click", function() {
    let num = Number(myNum.value);
    let output;

    if (myNum.value === "" || isNaN(num)) {
        result.textContent = "invalid input. Please enter a valid number";
    }

    if (num % 3 === 0 && num % 5 === 0) {
        output = "FizzBuzz";
    } else if (num % 3 === 0) {
        output = "Fizz";
    } else if (num % 5 === 0) {
        output = "Buzz";
    } else {
        output = num;
    }

    result.textContent = output;
});