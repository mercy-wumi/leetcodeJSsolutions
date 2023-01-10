// solved this challenge myself - DAY 6

const searchInsert = (nums, target) => {
    if (nums.length === 1) {
        if (nums.includes(target)) return 0
        else if (nums.includes(target) === false && target < nums[0]) {
            return 0
        }
        else return 1
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
        else if (target < nums[i]) {
            return i
        }
    }
    return nums.length
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))