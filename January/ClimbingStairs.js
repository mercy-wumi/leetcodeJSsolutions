// This is a solution I found online which I understood - DAY 5

const climbStairs = (n) => {
    let numsOfWays = []
    numsOfWays[1] = 1
    numsOfWays[2] = 2

    for (let i = 3; i <= n; i++) {
        numsOfWays[i] = numsOfWays[i - 1] + numsOfWays[i - 2]
    }

    return numsOfWays[n]
};