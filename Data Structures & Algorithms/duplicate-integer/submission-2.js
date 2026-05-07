class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const nums1 = new Set(nums)
        return Array.from(nums1).length !== nums.length
    }
}
