/**
 * 
 * You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.

Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.
 * 
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  const pairMap = new Map(),
    length = cards.length;
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < length; i++) {
    if (pairMap.has(cards[i])) {
      ans = Math.min(ans, i - pairMap.get(cards[i]) + 1);
    }
    pairMap.set(cards[i], i);
  }
  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
};

/**
 * 
 * Example 1:

Input: cards = [3,4,2,3,4,7]
Output: 4
Explanation: We can pick up the cards [3,4,2,3] which contain a matching pair of cards with value 3. Note that picking up the cards [4,2,3,4] is also optimal.

Example 2:

Input: cards = [1,0,5,3]
Output: -1
Explanation: There is no way to pick up a set of consecutive cards that contain a pair of matching cards.

 

Constraints:

    1 <= cards.length <= 105

 * 
 */

console.log(minimumCardPickup([3, 4, 2, 3, 4, 7]));
console.log(minimumCardPickup([1, 0, 5, 3]));
