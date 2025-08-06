/**
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let length = nums.length,
    left = 0,
    right = 0,
    curr = 0,
    ans = 0;
  for (; right < length; right++) {
    if (nums[right] === 0) {
      curr++;
    }
    while (curr > k) {
      if (nums[left] === 0) {
        curr--;
      }
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));

console.log(longestOnes([0, 0, 0, 0], 0));
