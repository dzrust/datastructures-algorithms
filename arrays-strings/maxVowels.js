/**
 *
 * Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
 * Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
 *
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let left = 0,
    right = 0,
    cur = 0,
    length = s.length;
  for (; right < k; right++) {
    if (isVowel(s[right])) {
      cur++;
    }
  }
  let ans = cur;
  for (; right < length; right++) {
    if (isVowel(s[left])) {
      cur--;
    }
    if (isVowel(s[right])) {
      cur++;
    }
    ans = Math.max(ans, cur);
    left++;
  }

  return ans;
};

const vowels = ["a", "e", "i", "o", "u"];
const isVowel = (ch) => vowels.includes(ch);

/**
 * 
 * Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.

 * 
 */

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));

console.log(maxVowels("leetcode", 0));
console.log(maxVowels("xdghggsdv", 10));
console.log(maxVowels("xdghaggsdv", 10));
console.log(maxVowels("abciiidef", 1));
