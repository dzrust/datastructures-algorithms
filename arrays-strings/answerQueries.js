/**
 * Example 1: Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit,
 * return a boolean array that represents the answer to each query. A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.
 * For example, given nums = [1, 6, 3, 2, 7, 2], queries = [[0, 3], [2, 5], [2, 4]], and limit = 13,
 * the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12].
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @param {number} limit
 * @return {boolean[]}
 */
var answerQueries = function (nums, queries, limit) {
  const prefix = [nums[0]];
  for (let i = 1, length = nums.length; i < length; i++) {
    prefix.push(prefix[prefix.length - 1] + nums[i]);
  }
  const answer = [];
  for ([x,y] of queries) {
    const current = prefix[y] - prefix[x] + nums[x];
    answer.push(current < limit);
  }
  return answer;
};

console.log(answerQueries([1, 6, 3, 2, 7, 2], [[0, 3], [2, 5], [2, 4]], 13));