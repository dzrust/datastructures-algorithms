/**
 * 
 * Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  const count = new Map([[0, 1]]),
    length = nums.length;
  let i = 0,
    curr = 0,
    ans = 0;
  for (; i < length; i++) {
    curr += nums[i] % 2 === 1 ? 1 : 0;
    ans += count.get(curr - k) ?? 0;
    count.set(curr, (count.get(curr) ?? 0) + 1);
  }

  return ans;
};

/**
 * 
 * 
 * Example 1:

Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

Example 2:

Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There are no odd numbers in the array.

Example 3:

Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16

 * 
 */

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
console.log(numberOfSubarrays([2, 4, 6], 1));
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
