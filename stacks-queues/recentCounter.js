var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  while (this.queue.length > 0 && t > this.queue.at(0) + 3000) {
    this.queue.shift();
  }
  this.queue.push(t);
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

/**
 * 
 * Example 1:

Input
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
Output
[null, 1, 2, 3, 3]

Explanation
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3

 */
const runTestCase = (testValues) => {
  const test = new RecentCounter();
  for (const testCase of testValues) {
    console.log(test.ping(testCase[0]));
  }
};
// runTestCase([[1], [100], [3001], [3002]]);
runTestCase([[642], [1849], [4921], [5936], [5957]]);
