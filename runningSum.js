/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const prefixSum = [nums[0]];
    for (let i = 1, {length} = nums; i < length; i++) {
        prefixSum.push(nums[i] + prefixSum[prefixSum.length - 1]);
    }
    return prefixSum;
};

console.log(runningSum([1,2,3,4]));
console.log(runningSum([1,1,1,1,1]));
console.log(runningSum([3,1,2,10,1]));