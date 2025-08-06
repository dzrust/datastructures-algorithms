/**
 * Given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.
 * Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let num1Pointer = 0,
    num2Pointer = 0;
  while (num1Pointer < nums1.length && num2Pointer < nums2.length) {
    if (nums1[num1Pointer] === nums2[num2Pointer]) {
      return nums1[num1Pointer];
    }

    if (nums1[num1Pointer] < nums2[num2Pointer]) {
      num1Pointer++;
    } else {
      num2Pointer++;
    }
  }
  return -1;
};

console.log(getCommon([1, 2, 3], [2, 4]));
console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5]));
console.log(getCommon([1, 2, 3, 6, 10], [10, 11, 12, 13]));
console.log(getCommon([10, 11, 12, 13], [1, 2, 3, 6, 10]));
console.log(getCommon([10, 11, 12, 13], [1]));
console.log(
  getCommon(
    [5, 15, 16, 20, 22, 39, 43, 44, 44, 55, 61, 62, 62, 64, 72, 73, 81, 88, 90, 95],
    [2, 8, 9, 11, 12, 13, 26, 29, 38, 49, 50, 51, 58, 63, 67, 72, 75, 82, 92, 96],
  ),
);
