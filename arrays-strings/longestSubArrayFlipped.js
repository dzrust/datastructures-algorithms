/*
    Example 2: You are given a binary string s (a string containing only "0" and "1"). You may choose up to one "0" and flip it to a "1". What is the length of the longest substring achievable that contains only "1"?
    For example, given s = "1101100111", the answer is 5. If you perform the flip at index 2, the string becomes 1111100111.
*/

function longestFlippedSubArray(s) {
  let left = 0,
    right = 0,
    length = s.length,
    ans = 0,
    cur = 0;
  for (; right < length; right++) {
    cur += s[right] === "0" ? 1 : 0;
    while (cur > 1) {
      cur -= s[left] === "0" ? 1 : 0;
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}

console.log(longestFlippedSubArray("1101100111"));
