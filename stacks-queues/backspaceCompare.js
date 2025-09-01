/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return readInput(s) === readInput(t);
};

const readInput = (s) => {
  const sStack = [];
  for (const sChar of s) {
    if (sChar === "#") {
      sStack.pop();
    } else {
      sStack.push(sChar);
    }
  }
  return sStack.join("");
};

/**
 * 
 * Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

 * 
 * 
 */

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a#c", "b"));
