/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0, right = 1;
    const result = [];
    while (right < nums.length && left >= 0) {
        if (nums[right] < 0) { //3 < 0
            right ++; // 2
            left ++;// 1
            continue;
        }

        if (Math.abs(nums[left]) >= Math.abs(nums[right])) { //3  > 2
            result.push(Math.pow(nums[right], 2)); // [4,]
            right ++; // 3
            continue;
        } else if (Math.abs(nums[left]) < Math.abs(nums[right])) { //3  < 2
            result.push(Math.pow(nums[left], 2)); // []
            left --; // 
        }
    }
    while (left >= 0) {
        result.push(Math.pow(nums[left], 2));
        left --;
    }
    while (right < nums.length) { // 4 < 5
        result.push(Math.pow(nums[right], 2)); //[0,1,9,16,100]
        right++;
    }
    return result;
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));