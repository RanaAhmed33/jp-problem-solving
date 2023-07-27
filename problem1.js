// problem 001

function reverseFunction(string) {
    let reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    return reverseString;
}
const myInputString = "Mr.Rana Ahmed";
const resultReverseString = reverseFunction(myInputString);
console.log(resultReverseString);