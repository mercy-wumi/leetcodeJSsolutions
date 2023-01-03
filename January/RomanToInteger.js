// This is the solution to "13. Roman to Integer" - DAY 1

// Here is my previous soltion to the question

function romanToInt(s) {
    let romanConstant = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let currentVal, nextVal, currentNum, nextNum, result = 0;

    for (let i = 0; i < s.length; i++) {
        currentVal = s[i]
        currentNum = romanConstant[currentVal]

        nextVal = s[i + 1]
        nextNum = romanConstant[nextVal]

        if (currentNum < nextNum) {
            result -= currentNum
        }
        else {
            result += currentNum
        }
    }

    return result
}

console.log(romanToInt('III'))
console.log(romanToInt('CDLX'))
console.log(romanToInt('MCMIX'))