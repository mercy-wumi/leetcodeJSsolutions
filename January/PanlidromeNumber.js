// first trial by me

const isPalindrome = (x) => {
    let stringNum = x.toString();
    if (stringNum.length === 1) return true;
    let result = '';
    for (let i = stringNum.length - 1; i >= 0; i--) {
        result += stringNum[i]
    }
    return result === stringNum ? true : false
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))