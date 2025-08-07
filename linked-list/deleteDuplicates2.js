/**
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head; // null or single element
  let temp = new UniDirectionListNode(-101),
    right = head,
    prev = temp;
  temp.next = head;
  while (right && right.next) {
    if (prev.next.val === right.next.val) {
      while (right && right.next && prev.next.val === right.next.val) {
        right = right.next;
      }
      right = right.next;
      prev.next = right;
    } else {
      prev = right;
      right = right.next;
    }
  }
  return temp.next;
};

/**
 * 
 * Example 1:

Input: head = [1,2,3,3,4,4,5]
               ^ 
Output: [1,2,5]

Example 2:

Input: head = [1,1,1,2,3]
               ^ 
Output: [2,3]

[1,1]
     ^

 

Constraints:

    The number of nodes in the list is in the range [0, 300].
    -100 <= Node.val <= 100
    The list is guaranteed to be sorted in ascending order.

 */

console.log(logList(deleteDuplicates(new SinglyLinkedList([1, 2, 3, 3, 4, 4, 5]).getHead())));
console.log(logList(deleteDuplicates(new SinglyLinkedList([1, 1, 1, 2, 3]).getHead())));
console.log(logList(deleteDuplicates(new SinglyLinkedList([]).getHead())));
console.log(logList(deleteDuplicates(new SinglyLinkedList([1]).getHead())));
console.log(logList(deleteDuplicates(new SinglyLinkedList([1, 1]).getHead())));
console.log(logList(deleteDuplicates(new SinglyLinkedList([1, 1, 2, 2]).getHead())));
console.log(logList(deleteDuplicates(new SinglyLinkedList([1, 1, 1, 2, 2, 3]).getHead())));
