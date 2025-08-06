/**
 *
 * Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
 * A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).
 *
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const rowSet = new Map(),
    colSet = new Map();
  length = grid.length;
  let ans = 0;
  for (let i = 0; i < length; i++) {
    let rowKey = "";
    let colKey = "";
    for (let j = 0; j < length; j++) {
      rowKey += grid[i][j] + ",";
      colKey += grid[j][i] + ",";
    }
    rowSet.set(rowKey, (rowSet.get(rowKey) ?? 0) + 1);
    colSet.set(colKey, (colSet.get(colKey) ?? 0) + 1);
  }
  for (let [key, value] of rowSet) {
    ans += value * (colSet.get(key) ?? 0);
  }
  return ans;
};

var equalPairs2 = function (grid) {
  let convertToKey = (arr) => {
    let key = "";
    for (const num of arr) {
      key += num + ",";
    }

    return key;
  };

  let dic = new Map();
  for (const arr of grid) {
    let key = convertToKey(arr);
    dic.set(key, (dic.get(key) || 0) + 1);
  }

  let dic2 = new Map();
  for (let col = 0; col < grid[0].length; col++) {
    let currentCol = [];
    for (let row = 0; row < grid.length; row++) {
      currentCol.push(grid[row][col]);
    }

    let key = convertToKey(currentCol);
    dic2.set(key, (dic2.get(key) || 0) + 1);
  }

  let ans = 0;
  for (const [key, val] of dic) {
    ans += val * dic2.get(key) || 0;
  }

  return ans;
};

/**
 * 
 * Example 1:

Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2:

Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]

 

Constraints:

    n == grid.length == grid[i].length
    1 <= n <= 200
    1 <= grid[i][j] <= 105

 * 
 * 
 */

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ]),
);
console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ]),
);

console.log(
  equalPairs([
    [7, 7, 7, 7],
    [7, 7, 7, 7],
    [7, 7, 7, 7],
    [7, 7, 7, 7],
  ]),
);
console.log(
  equalPairs([
    [11, 1],
    [1, 11],
  ]),
);
// [r1, c1], [r1,c2], [r1,c3], [r1,c4]
// [r2, c1], [r2,c2], [r2,c3], [r2,c4]
// [r3, c1], [r3,c2], [r3,c3], [r3,c4]
// [r4, c1], [r4,c2], [r4,c3], [r4,c4]
