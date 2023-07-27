// problem 007

function romanToInt(romanNumeral) {
    const romanToIntMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentValue = romanToIntMap[romanNumeral[i]];
        const nextValue = romanToIntMap[romanNumeral[i + 1]];

        if (currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }

    return result;
}


console.log(romanToInt("IX"));
console.log(romanToInt("XXI"));
console.log(romanToInt("IV"));
console.log(romanToInt("MMXIX"));