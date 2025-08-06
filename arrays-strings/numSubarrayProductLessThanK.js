/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }

  let right = 0,
    left = 0,
    ans = 0,
    cur = 1,
    length = nums.length;
  for (; right < length; right++) {
    cur *= nums[right]; // 10
    while (cur >= k) {
      cur /= nums[left];
      left++;
    }
    ans += right - left + 1;
  }

  return ans;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));
