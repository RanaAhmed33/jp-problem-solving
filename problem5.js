// // problem 005


function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':

            if (num2 !== 0) {
                return num1 / num2;
            } else {
                throw new Error("Division by zero is not allowed.");
            }
        default:
            throw new Error("Invalid operator. Supported operators are +, -, *, and /.");
    }
}


const num1 = 1;
const operator = '+';
const num2 = 2;
const result = calculate(num1, num2, operator);
console.log("Result:", result); 
