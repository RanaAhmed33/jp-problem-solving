// problem 002

function sumOfPositiveNumber(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            sum += array[i];
        }
    }
    return sum;
}
const inputArray = [3, -5, 9, -4, 7];
const resultPositiveNumberSum = sumOfPositiveNumber(inputArray);
console.log(resultPositiveNumberSum);