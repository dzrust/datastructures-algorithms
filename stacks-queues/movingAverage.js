/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.maxSize = size;
  this.window = [];
  this.runningSum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.window.length === this.maxSize) {
    this.runningSum -= this.window.shift();
  }
  this.runningSum += val;
  this.window.push(val);
  return this.runningSum / this.window.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

/**
 * Example 1:

Input
["MovingAverage", "next", "next", "next", "next"]
[[3], [1], [10], [3], [5]]
Output
[null, 1.0, 5.5, 4.66667, 6.0]

Explanation
MovingAverage movingAverage = new MovingAverage(3);
movingAverage.next(1); // return 1.0 = 1 / 1
movingAverage.next(10); // return 5.5 = (1 + 10) / 2
movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3

 */

const runTestCase = (testCaseValues) => {
  const { length } = testCaseValues;
  const testCase = new MovingAverage(testCaseValues[0][0]);
  for (let i = 1; i < length; i++) {
    console.log(testCase.next(testCaseValues[i][0]));
  }
};

runTestCase([[3], [1], [10], [3], [5]]);
