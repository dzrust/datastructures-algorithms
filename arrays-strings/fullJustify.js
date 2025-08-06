/**
 * 
 * Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
 * You should pack your words in a greedy approach; that is, pack as many words as you can in each line. 
 * Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
 * Extra spaces between words should be distributed as evenly as possible.
 *  If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
 * For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:

    A word is defined as a character sequence consisting of non-space characters only.
    Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
    The input array words contains at least one word.

 * 
 * 
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let ans = [],
    left = 0,
    right = 0,
    cur = 0,
    length = words.length;
  for (; right < length; right++) {
    cur += words[right].length === maxWidth ? words.length : words[right].length;
    if (cur > maxWidth) {
      ans.push(formatLine(false, words.slice(left, right), maxWidth, cur - words[right].length));
      cur = words[right].length;
      left = right;
    }
    cur++; // add room for a space afterwards
  }
  ans.push(formatLine(true, words.slice(left, right), maxWidth, cur));
  return ans;
};

const formatLine = (isLastLine, words, maxWidth, lineSize) => {
  if (isLastLine || words.length === 1) {
    let line = words.join(" ");
    line = line.padEnd(maxWidth, " ");
    return line;
  } else {
    const leftoverSpace = maxWidth - lineSize + 1;
    let spaceSize = Math.floor(leftoverSpace / (words.length - 1));
    spaceSize = Math.max(spaceSize, 0);
    let extraSpace = leftoverSpace % (words.length - 1);
    let line = "";
    for (let i = 0; i < words.length - 1; i++) {
      line += words[i].padEnd(words[i].length + spaceSize + 1, " ");
      if (extraSpace > 0) {
        line += " ";
        extraSpace--;
      }
    }
    line += words[words.length - 1];
    return line;
  }
};

/**
 * 
 * Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

Example 2:

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.

Example 3:

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
 * 
 * 
 */

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
console.log(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16));
console.log(
  fullJustify(
    [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do",
    ],
    20,
  ),
);
