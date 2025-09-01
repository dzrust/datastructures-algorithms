/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  if (s.length === 0) return "";
  const stack = [s[0]],
    { length } = s;
  for (let i = 1; i < length; i++) {
    if (stack.length > 0 && Math.abs(s[i].charCodeAt(0) - stack[stack.length - 1].charCodeAt(0)) === 32) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

/**
 * 
 * Example 1:

Input: s = "leEeetcode"
Output: "leetcode"
Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".

Example 2:

Input: s = "abBAcC"
Output: ""
Explanation: We have many possible scenarios, and all lead to the same answer. For example:
"abBAcC" --> "aAcC" --> "cC" --> ""
"abBAcC" --> "abBA" --> "aA" --> ""

Example 3:

Input: s = "s"
Output: "s"

 * 
 */

console.log(makeGood("leEeetcode"));
console.log(makeGood("abBAcC"));
console.log(makeGood("lEEtcooode"));
console.log(makeGood("Pp"));
