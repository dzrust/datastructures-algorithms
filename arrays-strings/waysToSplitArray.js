/**
 *
 * You are given a 0-indexed integer array nums of length n.
 * nums contains a valid split at index i if the following are true:
 * The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
 * There is at least one element to the right of i. That is, 0 <= i < n - 1.
 * Return the number of valid splits in nums.
 *
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  let total = 0,
    length = nums.length,
    i1 = 0;

  for (; i1 < length; i1++) {
    total += nums[i1];
  }

  let ans = 0,
    curr = 0,
    i2 = 0,
    newLength = length - 1;

  for (; i2 < newLength; i2++) {
    curr += nums[i2];
    if (curr >= total - curr) {
      ans++;
    }
  }

  return ans;
};

console.log(waysToSplitArray([10, 4, -8, 7]));
console.log(waysToSplitArray([2, 3, 1, 0]));
console.log(waysToSplitArray([2, 3]));
console.log(waysToSplitArray([9, 3]));
console.log(waysToSplitArray([2, 3, 9]));
console.log(waysToSplitArray([227, 3, 9]));
