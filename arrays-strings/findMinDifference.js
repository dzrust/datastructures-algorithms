/**
 * Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const sortedList = timePoints
    .map((time) => {
      const [hour, minute] = time.split(":");
      return parseInt(hour, 10) * 60 + parseInt(minute, 10);
    })
    .sort((a, b) => a - b);
  const timeA = sortedList[0];
  const timeB = sortedList[sortedList.length - 1];
  let ans = Math.min(Math.abs(timeA - timeB), 1440 + timeA - timeB);
  for (let i = 0; i < sortedList.length - 1; i++) {
    const timeDiff = sortedList[i] - sortedList[i + 1];
    let temp = Math.min(Math.abs(timeDiff), 1440 + timeDiff);
    ans = Math.min(ans, temp);
  }
  return ans;
};
/**
 * 
 * Example 1:

Input: timePoints = ["23:59",   "00:00"]
                    //1439, 1,   0, 1440
Output: 1

Example 2:

Input: timePoints = ["00:00","23:59","00:00"]
Output: 0


 * Example 1:

Input: timePoints = ["23:59",      "15:29",     "16:13"]
                    //1439, 1, ,   929, 511     973, 467
Output: 1

 

Constraints:

    2 <= timePoints.length <= 2 * 104
    timePoints[i] is in the format "HH:MM".

 * 
 * 
 */

console.log(findMinDifference(["23:59", "00:00"]));
console.log(findMinDifference(["00:00", "23:59", "00:00"]));
console.log(findMinDifference(["23:59", "15:29", "16:13"]));
console.log(findMinDifference(["01:01", "02:01", "03:00"]));
console.log(findMinDifference(["02:39", "10:26", "21:43"]));
