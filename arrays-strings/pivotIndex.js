/**
 *
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
 * Return the leftmost pivot index. If no such index exists, return -1.
 *
 *
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const prefix = [nums[0]],
    { length } = nums;
  for (let i = 1; i < length; i++) {
    prefix.push(prefix[prefix.length - 1] + nums[i]);
  }
  const max = prefix[length - 1];
  for (let i = 0; i < length; i++) {
    const leftSum = i - 1 > -1 ? prefix[i - 1] : 0;
    // [1,7,3 ,6 ,5 ,6 ]
    //.        ^
    // [1,8,11,17,22,28]
    // leftSum = 11 rightSum = 11
    // 28 - 22 + 5 = 11
    const rightSum = i + 1 < length ? max - prefix[i + 1] + nums[i + 1] : 0;
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};

/**
 * 
 * Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.

Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0

 * 
 */

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
