// This is the solution to "14. Longest Common Prefix" - DAY 2

function longestCommonPrefix(strs) {
    let prefix = ''
    if (!strs) return prefix
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) return prefix
        }
        prefix += char
    }
    return prefix
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))