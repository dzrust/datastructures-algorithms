const { SinglyLinkedList } = require("../lib/SinglyLinkedList.js");
/**
 * Given the head of a singly linked list and two integers left and right where left <= right,
 * reverse the nodes of the list from position left to position right, and return the reversed list.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // Check edge case: linked list has 0 or 1 nodes, just return
  if (!head || !head.next || right - left === 0) {
    return head;
  }
  let splitNode = null,
    ogHead = head;
  let cur = 1;
  while (head && cur < left) {
    splitNode = head;
    head = head.next;
    cur++;
  }
  let [dummy, tail] = reverseList(head, right - left);
  if (splitNode) {
    splitNode.next = dummy;
  } else {
    splitNode = dummy;
    ogHead = dummy;
  }

  while (dummy && dummy.next) {
    dummy = dummy.next;
  }
  if (tail) {
    dummy.next = tail;
  }
  return ogHead;
};

let reverseList = (head, length) => {
  let prev = null,
    nextNode = null;
  let curr = head;
  let count = 0;
  while (curr && count <= length) {
    nextNode = curr.next; // first, make sure we don't lose the next node
    curr.next = prev; // reverse the direction of the pointer
    prev = curr; // set the current node to prev for the next node
    curr = nextNode; // move on
    count++;
  }
  return [prev, nextNode];
};

let logList = (head) => {
  let dummy = head,
    ans = [];
  while (dummy) {
    ans.push(dummy.val);
    dummy = dummy.next;
  }
  return ans;
};

/**
 * Example 1:

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
node -> 2
node.next -> 3
node.next -> 3
node.next
 [1,2,3,4,5]
 [1,3,2,4,5]
 [1,4,3,2,5]

Constraints:

    The number of nodes in the list is n.
    1 <= n <= 500
    -500 <= Node.val <= 500
    1 <= left <= right <= n

 
Follow up: Could you do it in one pass?
 */
console.log(logList(reverseBetween(new SinglyLinkedList([1, 2, 3, 4, 5]).getHead(), 2, 4)));
console.log(logList(reverseBetween(new SinglyLinkedList([5]).getHead(), 1, 1)));
console.log(logList(reverseBetween(new SinglyLinkedList([]).getHead(), 1, 1)));
console.log(logList(reverseBetween(new SinglyLinkedList([3, 5]).getHead(), 1, 1)));
console.log(logList(reverseBetween(new SinglyLinkedList([3, 5]).getHead(), 1, 2)));
