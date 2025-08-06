function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("abcdcba"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("apple"));
console.log(isPalindrome("appa"));
console.log(isPalindrome("jkkjjjak"));
console.log(isPalindrome("jkkjabjkkj"));
