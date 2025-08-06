/**
 * Given a string s, reverse the order of characters in each word
 * within a sentence while still preserving whitespace and initial word order.
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let ans = s.split(""), // Mr Ding
    left = 0,
    right = 0,
    length = s.length; //7
  for (; right < length; right++) {
    if (ans[right] === " ") {
      reverseSubPart(ans, left, right);
      left = right + 1;
    }
  }
  if (left < right) {
    reverseSubPart(ans, left, right);
  }
  return ans.join("");
};

var reverseSubPart = function (ans, left, right) {
  for (let start = left, end = right - 1; start < end; start++) {
    const temp = ans[start];
    ans[start] = ans[end];
    ans[end] = temp;
    end--;
  }
};

var reverseWordsBrute = function (s) {
  return s
    .split(" ")
    .map(function (part) {
      let newPart = part.split("");
      for (let left = 0, right = newPart.length - 1; left < right; left++) {
        const temp = newPart[left];
        newPart[left] = newPart[right];
        newPart[right] = temp;
        right--;
      }
      console.log(part);
      return newPart.join("");
    })
    .join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("Mr Ding"));
