/**
 * Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.
 *
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  const ans = [],
    counts = new Map();
  for (let i = 0, lengthI = nums.length; i < lengthI; i++) {
    for (let j = 0, lengthJ = nums[i].length; j < lengthJ; j++) {
      const count = (counts.get(nums[i][j]) ?? 0) + 1;
      counts.set(nums[i][j], count);
      if (count === lengthI) {
        ans.push(nums[i][j]);
      }
    }
  }
  return ans.sort((a, b) => a - b);
};

/**
 * Example 1:

Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
Output: [3,4]
Explanation: 
The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].

Example 2:

Input: nums = [[1,2,3],[4,5,6]]
Output: []
Explanation: 
There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].

 * 
 * 
 * 
 */
console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);
console.log(
  intersection([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
