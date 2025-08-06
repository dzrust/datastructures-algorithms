/**
 *
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose
 * sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 *
 *
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let ans = Number.POSITIVE_INFINITY,
    cur = 0,
    left = 0,
    right = 0,
    { length } = nums;
  for (; right < length; right++) {
    cur += nums[right];
    while (cur >= target) {
      ans = Math.min(ans, right - left + 1);
      cur -= nums[left];
      left++;
    }
  }

  return ans !== Number.POSITIVE_INFINITY ? ans : 0;
};

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLenBrute = function (target, nums) {
  let ans = Number.MAX_SAFE_INTEGER,
    foundMatch = false,
    length = nums.length;
  for (let i = 0, j = 0; i < length; i++) {
    //i = 2, j = 0, cur = 1
    j = i + 1;
    let cur = nums[i];
    for (; j < length && cur < target; j++) {
      //i = 2, j = 4, cur = 7
      cur += nums[j];
    }
    if (cur >= target) {
      // 7 >= 7
      foundMatch = true;
      ans = Math.min(ans, j - i); // ans -> 4
    }
  }
  return foundMatch ? ans : 0;
};

/**
 * 
 * Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

 * 
 */

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
