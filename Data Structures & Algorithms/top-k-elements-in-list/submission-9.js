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
        const bucket = []
        for (let i = 0; i <= nums.length; i++) {
            bucket.push([])
        }
        for (const [key, value] of result) {
            bucket[value].push(key)
        }
        const final = []
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const num of bucket[i]) {
                final.push(num)
                if (final.length === k) {
                    return final 
                }
            }
        }
    }
}

