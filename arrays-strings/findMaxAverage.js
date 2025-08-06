/**
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has
 * the maximum average value and return this value. Any answer with a
 * calculation error less than 10-5 will be accepted.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let cur = 0,
    length = nums.length;
  for (let i = 0; i < k; i++) { // i = 4, k = 4
    cur += nums[i] / k; // cur = 2.00, nums[i] = -6, k = 4; 2.00 += (-6/4) -> 0.50
  }
  let ans = cur; // 0.50
  for (let i = k; i < length; i++) {
    const right = nums[i] / k; // right = 50 / 4 -> 12.5
    const left = nums[i - k] / k; // left =  1 / 4 -> 0.25
    cur += right - left; // 0.5 += 12.5 - 0.25 -> 12.75
    ans = Math.max(ans, cur);
  }
  return ans
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
