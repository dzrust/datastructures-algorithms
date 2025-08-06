/**
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let right = 0,
    left = 0,
    length = nums.length;
  for (; left < length; left++) {
    while (nums[right] === 0 || right < left) {
      right++;
    }
    if (nums[left] === 0 && right < length) {
      nums[left] = nums[right];
      nums[right] = 0;
    }
  }
};
const testCases = [
  [0, 2, 3, 4, 0, 1, 2, 3, 0],
  [1, 0],
];
testCases.forEach((testcase) => {
  moveZeroes(testcase);
  console.log(testcase);
});
// L = 0, R =0
// LR
// [0,2,3,4,0,1,2,3,0]
// L = 0, R = 1
// L  R
// [0,2,3,4,0,1,2,3,0]
// L = 0, R = 1
// L  R
// [2,0,3,4,0,1,2,3,0]
// L = 1, R = 1
//   LR
// [2,0,3,4,0,1,2,3,0]
// L = 1, R = 2
//   L  R
// [2,0,3,4,0,1,2,3,0]
// L = 1, R = 2
//   L  R
// [2,3,0,4,0,1,2,3,0]
// L = 2, R = 2
//     LR
// [2,3,0,4,0,1,2,3,0]
// L = 2, R = 3
//     L  R
// [2,3,0,4,0,1,2,3,0]
// L = 2, R = 3
//     L  R
// [2,3,4,0,0,1,2,3,0]
// L = 3, R = 3
//        LR
// [2,3,4,0,0,1,2,3,0]
// L = 3, R = 4
//        L R
// [2,3,4,0,0,1,2,3,0]
// L = 3, R = 5
//        L   R
// [2,3,4,0,0,1,2,3,0]
// L = 3, R = 5
//        L   R
// [2,3,4,1,0,0,2,3,0]
// L = 4, R = 5
//          L R
// [2,3,4,1,0,0,2,3,0]
// L = 4, R = 6
//          L   R
// [2,3,4,1,0,0,2,3,0]
// L = 4, R = 6
//          L   R
// [2,3,4,1,2,0,0,3,0]
// L = 5, R = 6
//            L R
// [2,3,4,1,2,0,0,3,0]
// L = 5, R = 7
//            L   R
// [2,3,4,1,2,0,0,3,0]
// L = 5, R = 7
//            L   R
// [2,3,4,1,2,3,0,0,0]
// L = 5, R = 8
//            L   R
// [2,3,4,1,2,3,0,0,0]
