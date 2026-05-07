class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

            const charS = new Map()
            const charT = new Map()

        for (const char of s) {
            if (charS.has(char)) {
                charS.set(char, (charS.get(char) + 1 ))
            } else {
                charS.set(char, 1)
            }
        }
        for (const char of t) {
            if (charT.has(char)) {
                charT.set(char, (charT.get(char) + 1 ))
            } else {
                charT.set(char, 1)
            }
        }
        for (const [key, value] of charS) {
            if (value !== charT.get(key)) return false
        }
        return true
    }
}
