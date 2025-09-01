/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [], {length} = s;
    for (let i = 0; i < length; i++) {
        if (s[i] === stack[stack.length - 1]) {
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

Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

Example 2:

Input: s = "azxxzy"
Output: "ay"

 * 
 */

console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));
console.log(removeDuplicates("aa"));
console.log(removeDuplicates("aba"));
console.log(removeDuplicates("a"));
console.log(removeDuplicates("abbabbabbabba"));
console.log(removeDuplicates("abbbaabbbaabbbaabbba"));