function longestSubArray(nums, k) {
  let left = 0,
    right = 0,
    cur = 0,
    ans = 0,
    length = nums.length;
  for (; right < length; right++) {
    cur += nums[right];
    while (cur > k) {
      cur -= nums[left];
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  //3. , 5
  return ans;
}

console.log(longestSubArray([3, 2, 1, 3, 1, 1], 5));
console.log(longestSubArray([3, 1, 2, 7, 4, 2, 1, 1, 5], 8));
