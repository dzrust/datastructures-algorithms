/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 0) return true;
  const parensStack = [s[0]],
    { length } = s,
    charMap = new Map([
      ["(", ")"],
      ["[", "]"],
      ["{", "}"],
    ]);
  for (let i = 1; i < length; i++) {
    if (")}]".includes(s[i]) && charMap.get(parensStack[parensStack.length - 1]) === s[i]) {
      // )
      parensStack.pop();
    } else {
      parensStack.push(s[i]);
    }
  }
  return parensStack.length === 0;
};

/**
 * 
 * 
 * Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

 * 
 */
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("([)]"));
