/**
 * Given an array of integers nums, you start with an initial positive value startValue.
 * In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
 * Return the minimum positive value of startValue such that the step by step sum is never less than 1.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let total = 1, ans = 1;
    for (let i = 0, length = nums.length; i < length; i ++) { // i = 2
        total += nums[i]; // 3 += -3 -> 0
        if (total <= 0) { // 0 <= 0
            ans += 1 - total; // 4 += 1 = 5
            total += 1 - total; // 0 + 1 = 1
        }
    }
    return ans;
};

console.log(minStartValue([-3,2,-3,4,2]))
console.log(minStartValue([1,2]))
console.log(minStartValue([1,-2,-3]))