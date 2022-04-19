"use strict";

//VERY EASY

const num1 = 56;
const num2 = 28;
console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}.`);

//EASY

const broName = "Oscar";
const sisName = "Yoselin";
const nameDiff = sisName.length - broName.length;
console.log(`The name ${sisName} is longer than ${broName} by ${nameDiff} characters.`);

//MEDIUM

// const tone = function () {
//     const userInput = prompt("How are you feeling today?");
//     switch (userInput) {
//         case userInput.toUpperCase():
//             console.log("Why are you shouting?");
//             break;
//         case userInput.toLowerCase():
//             console.log("Why are you whispering");
//             break;
//         case userInput:
//             console.log("You are talking normally");
//         default:
//     }
// }

// tone();

//HARD

const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};
const multiply = function (num1, num2) {
    return num1 * num2;
};
const divide = function (num1, num2) {
    return num1 / num2;
};


//VERY HARD

const firstNumber = Number(prompt("Enter the first number"));
const secondNumber = Number(prompt("Enter the second number"));
const op = prompt("Enter either +, -, *, /");

const calculator = function (num1, num2) {
    const addition = add(num1, num2);
    const subtraction = subtract(num1, num2);
    const multiplication = multiply(num1, num2);
    const division = divide(num1, num2);
    if (op == "+") {
        console.log(addition);
    } else if (op == "-") {
        console.log(subtraction);
    } else if (op == "*") {
        console.log(multiplication);
    } else if (op == "/") {
        console.log(division);
    } else {
        console.log("Invalid operator")
    }
}



