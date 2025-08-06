/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramGroup = new Map(),
    length = strs.length;
  for (let i = 0; i < length; i++) {
    const wordKey = getWordKey(strs[i]);
    anagramGroup.set(wordKey, [...(anagramGroup.get(wordKey) ?? []), strs[i]]);
  }
  const ans = [];
  for ([key, value] of anagramGroup) {
    ans.push(value);
  }
  return ans;
};

var getWordKey = function (str) {
  const key = str.split("");
  key.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  return key.join("");
};

/**
 * 
 * Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]


Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.

 * 
 * 
 */

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
