class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const result = []
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++){
                if (i === j) {
                    console.log('')
                } else if (nums[i] + nums[j] === target) {
                    result.push(i)
                }
            }
        }
        return result
    }
}
