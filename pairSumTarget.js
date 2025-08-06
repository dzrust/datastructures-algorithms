function pairSumTarget(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const curr = nums[left] + nums[right];
        if (curr === target) {
            return true;
        }
        if (curr > target) {
            right--;
        } else {
            left++;
        }

    }
    return false;
}

console.log(pairSumTarget([1, 2, 3, 4, 6, 8, 9, 14, 15], 13));