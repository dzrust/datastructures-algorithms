/**
 * Example 4: Given an integer array nums and an integer k, find the sum of the subarray with the largest sum whose length is k.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findBestSubarray = function (nums, k) {
  let length = nums.length,
    cur = 0;
  for (let i = 0; i < k; i++) {
    cur += nums[i];
  }
  let ans = cur;
  for (let i = k; i < length; i++) {
    cur += nums[i] - nums[i - k];
    ans = Math.max(ans, cur);
  }
  return ans;
};

console.log(findBestSubarray([3, -1, 4, 12, -8, 5, 6], 4));
