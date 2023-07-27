// problem 003

function findMostFrequentElement(arr) {

    const elementCount = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (elementCount[element] === undefined) {
            elementCount[element] = 1;
        } else {
            elementCount[element]++;
        }
    }


    let mostFrequentElement;
    let highestCount = 0;
    for (const element in elementCount) {
        if (elementCount[element] > highestCount) {
            highestCount = elementCount[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}


const arr = [3, 7, 9, 13, 19, 33, 7, 3, 7, 23, 7, 55, 7];
const mostFrequent = findMostFrequentElement(arr);
console.log(`The most frequent element is: ${mostFrequent}`); 