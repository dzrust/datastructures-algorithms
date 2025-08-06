/**
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const counts = new Map([[0, 1]]),
    length = nums.length;
  let ans = 0,
    cur = 0,
    i = 0;
  for (; i < length; i++) {
    cur += nums[i];
    const currentCount = counts.get(cur - k) ?? 0;
    ans += currentCount;
    counts.set(cur, (counts.get(cur) ?? 0) + 1);
  }
  return ans;
};

/**
 * 
 * 
 * Example 1:

Input: nums = [1,1,1], k = 2
Output: 2

Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

 

Constraints:

    1 <= nums.length <= 2 * 104
    -1000 <= nums[i] <= 1000
    -107 <= k <= 107

 * 
 */

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
