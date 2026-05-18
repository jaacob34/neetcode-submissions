class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map()

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            const diff = target - num

            if (prevMap.has(diff)) {
                return [i, prevMap.get(diff)]
            } else {
                prevMap.set(num, i)
            }
        }

    }
}
