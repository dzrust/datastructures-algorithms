/**
 *
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
 * You can use each character in text at most once. Return the maximum number of instances that can be formed.
 *
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const counts = new Map("balloon".split("").map((ch) => [ch, 0])),
    length = text.length;
  let i = 0,
    ans = 0;
  for (; i < length; i++) {
    if ("balloon".includes(text[i])) {
      ans++;
      counts.set(text[i], (counts.get(text[i]) ?? 0) + 1);
    }
  }
  for (let [key, value] of counts) {
    let newValue = value;
    if (["l", "o"].includes(key)) {
      newValue = Math.floor(value / 2);
    }
    ans = Math.min(ans, newValue);
  }
  return ans;
};

/**
 * 
 * Example 1:

Input: text = "nlaebolko"
Output: 1

Example 2:

Input: text = "loonbalxballpoon"
Output: 2

Example 3:

Input: text = "leetcode"
Output: 0

 * 
 * 
 */
console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("leetcode"));
console.log(maxNumberOfBalloons("balon"));
