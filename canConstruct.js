/**
 *
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ransomNoteCount = new Map(),
    ransomNoteLength = ransomNote.length,
    magazineLength = magazine.length;
  for (let i = 0; i < ransomNoteLength; i++) {
    ransomNoteCount.set(
      ransomNote[i],
      (ransomNoteCount.get(ransomNote[i]) ?? 0) + 1
    );
  }
  for (let i = 0; i < magazineLength; i++) {
    if (!ransomNoteCount.has(magazine[i])) continue;
    const newCount = ransomNoteCount.get(magazine[i]) - 1;
    if (newCount === 0) {
      ransomNoteCount.delete(magazine[i]);
    } else {
      ransomNoteCount.set(magazine[i], newCount);
    }
  }
  return ransomNoteCount.size === 0;
};

/**
 * 
 * 
 * Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

 

Constraints:

    1 <= ransomNote.length, magazine.length <= 105
    ransomNote and magazine consist of lowercase English letters.

 * 
 */

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
