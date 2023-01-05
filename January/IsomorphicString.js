// This is a solution I found online, I studied it and implemented it myself

const isIsomorphic = (s, t) => {
    if (s.length !== t.length) return false
    let map1 = new Map()
    let map2 = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map1.has(s[i])) {
            if (map1.get(s[i]) !== t[i]) {
                return false
            }
        }
        else {
            map1.set(s[i], t[i])
        }

        if (map2.has(t[i])) {
            if (map2.get(t[i]) !== s[i]) {
                return false
            }
        }
        else {
            map2.set(t[i], s[i])
        }
    }
    return true
};

console.log(isIsomorphic('add', 'egg'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('four', 'three'))