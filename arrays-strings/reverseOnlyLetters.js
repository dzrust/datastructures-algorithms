/**
 *
 * Given a string s, reverse the string according to the following rules:
 * All the characters that are not English letters remain in the same position.
 * All the English letters (lowercase or uppercase) should be reversed.
 * Return s after reversing it.
 *
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const ans = [];
  for (
    let left = 0, right = s.length - 1, length = s.length;
    left < length;
    left++
  ) {
    if (isAlpha(s[left])) {
      while (!isAlpha(s[right])) {
        right--;
      }
      ans.push(s[right]);
      right--;
    } else {
      ans.push(s[left]);
    }
  }
  return ans.join("");
};

var isAlpha = function (sc) {
  return /[a-z]/i.test(sc);
};
console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("a-bcd"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
console.log(reverseOnlyLetters("Test1ng-Leet=cde-Q!"));
console.log(reverseOnlyLetters("_Test1ng-Leet=code-Q!"));
console.log(reverseOnlyLetters("?6C40E"));
