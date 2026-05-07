class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result =  new Map()

        for (const str of strs) {
            const anagram = str.split('').sort().join('')
            if (result.has(anagram)) {
                result.get(anagram).push(str)
            } else {
                result.set(anagram, [str])
            }
        }
        const array = []
        for (const [key, value] of result) {
            array.push(value)
        }
        return array
    }
}
