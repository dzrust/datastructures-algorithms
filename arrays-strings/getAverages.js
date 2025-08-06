/**
 * You are given a 0-indexed array nums of n integers, and an integer k.
 * The k-radius average for a subarray of nums centered at some index i
 * with the radius k is the average of all elements in nums between
 * the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.
 * Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.
 * The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.
 * For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
  if (k === 0) return nums;
  const itemCount = 2 * k + 1;
  const prefix = [nums[0]];
  for (let i = 1, length = nums.length; i < length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }
  const ans = [];
  for (let i = 0, length = nums.length; i < length; i++) {
    const startIndex = i - k,
      endIndex = i + k;
    if (startIndex < 0 || endIndex >= nums.length) {
      ans.push(-1);
    } else {
      ans.push(Math.trunc((prefix[endIndex] - prefix[startIndex] + nums[startIndex]) / itemCount));
    }
  }
  return ans;
};

var getAveragesOpt = function (nums, k) {
  if (k === 0) return nums;
  const itemCount = 2 * k + 1,
    ans = new Array(nums.length).fill(-1),
    length = nums.length;
  if (itemCount > length) {
    return ans;
  }
  let curr = 0;
  for (let i = 0; i < itemCount; i++) {
    curr += nums[i];
  }
  ans[k] = Math.floor(curr / itemCount);
  for (let i = itemCount; i < length; i++) {
    curr = curr - nums[i - itemCount] + nums[i];
    ans[i - k] = Math.floor(curr / itemCount);
  }
  return ans;
};

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));
console.log(getAverages([100000], 0));
console.log(getAverages([8], 100000));
console.log(getAverages([40527, 53696, 10730, 66491, 62141, 83909, 78635, 18560], 2));
//40527+53696+10730+66491+62141 =
