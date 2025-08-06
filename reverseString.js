/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        // "h"
        const temp = s[left];
        //"h" = "o"
        s[left] = s[right];
        //"o" = "h"
        s[right] = temp;
        //1
        left ++;
        //3
        right --;
        //["o","e","l","l","h"]
    }
};

console.log(reverseString(["h", "e", "l", "l", "o"]));