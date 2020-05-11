/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const j = nums.indexOf(target - nums[i], i + 1)
    if (j !== -1) {
      return [i, j]
    }
  }
}
