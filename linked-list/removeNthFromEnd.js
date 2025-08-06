/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { logList } = require("../lib/LinkedListUtils");
const { SinglyLinkedList, UniDirectionListNode } = require("../lib/SinglyLinkedList");

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new UniDirectionListNode(0);
  dummy.next = head;
  let slow = dummy,
    fast = dummy,
    count = 1;
  while (fast && count <= n + 1) {
    fast = fast.next;
    count++;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return dummy.next;
};

function removeNthFromEnd2(head, n) {
  let dummy = new UniDirectionListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;
  // Advances first pointer so that the gap between first and second is n nodes apart
  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }
  // Move first to the end, maintaining the gap
  while (first) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
}

/**
 * Example 1:

Input: head = [1,2,3,4,5], n = 2
               ^   ^
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
               ^ ^
Output: [1]

 

Constraints:

    The number of nodes in the list is sz.
    1 <= sz <= 30
    0 <= Node.val <= 100
    1 <= n <= sz
 */

console.log(logList(removeNthFromEnd(new SinglyLinkedList([1, 2, 3, 4, 5]).getHead(), 2)));
console.log(logList(removeNthFromEnd(new SinglyLinkedList([1]).getHead(), 1)));
console.log(logList(removeNthFromEnd(new SinglyLinkedList([1, 2]).getHead(), 1)));
console.log(logList(removeNthFromEnd(new SinglyLinkedList([1, 2, 3]).getHead(), 3)));
