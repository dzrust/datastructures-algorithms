/**
 * Given an integer array nums, find a contiguous array
 * that has the largest product, and return the product.
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let right = 0,
    left = 0,
    length = nums.length,
    cur = 1,
    ans = Number.MIN_SAFE_INTEGER;
  for (; right < length; right++) {
    // 1
    cur *= nums[right]; // 1 *= 0 -> 0
    while (cur < ans) {
      // 0 < -inf && 0 < 0
      if (nums[left] !== 0) {
        //
        cur /= nums[left]; //
      }
      left++; //
    }
    ans = Math.max(ans, cur); // 0 = Math.max(-inf, 0)
  }
  return ans;
};

// console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 0, -1]));
//   LR
console.log(maxProduct([0, 2]));
// console.log(maxProduct([-2]));
