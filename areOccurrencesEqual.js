/**
 * 
 * Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const charCount = new Map();
  for (let i = 0, { length } = s; i < length; i++) {
    charCount.set(s[i], (charCount.get(s[i]) ?? 0) + 1);
  }
  let count = charCount.get(s[0]);
  for (let [_, value] of charCount) {
    if (value !== count) {
      return false;
    }
  }
  return true;
};

/**
 * 
 * 
 * Example 1:

Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

Example 2:

Input: s = "aaabb"
Output: false
Explanation: The characters that appear in s are 'a' and 'b'.
'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

 

Constraints:

    1 <= s.length <= 1000
    s consists of lowercase English letters.

 * 
 */

console.log(areOccurrencesEqual("abacbc"));
console.log(areOccurrencesEqual("aaabb"));
