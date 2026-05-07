class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s1 = s.split('').sort()
        const s2 = t.split('').sort()
        // s1 === s2 ? true : false
        return s1.join('') === s2.join('')
    }
}
