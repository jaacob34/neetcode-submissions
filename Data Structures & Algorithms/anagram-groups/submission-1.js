class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = new Map()

        for (const str of strs) {
            const sorted = str.split('').sort().join('')
            if (result.get(sorted)) {
                result.get(sorted).push(str)
            } else {
                result.set(sorted, [str])
            }
        }
        return Array.from(result.values())
    }
}
