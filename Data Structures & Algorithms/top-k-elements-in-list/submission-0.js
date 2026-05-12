class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = new Map()

        for (const num of nums) {
            if (result.has(num)) {
                result.set(num, result.get(num) + 1)
            } else {
                result.set(num, 1)
            }
        }
        const sorted = (Array.from(result).sort((a, b) => b[1] - a[1]))
        const final = []
        for (let i = 0; i < k; i++) {
            final.push(sorted[i][0])
        }
        return final
    }
}
