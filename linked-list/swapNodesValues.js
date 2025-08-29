const { logList } = require("../lib/LinkedListUtils");
const { SinglyLinkedList, UniDirectionListNode } = require("../lib/SinglyLinkedList");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodesValues = function (head, k) {
  let listLength = 0,
    frontNode = null,
    endNode = null,
    currentNode = head;
  // set the front node and end node in single pass
  while (currentNode) {
    listLength++;
    if (endNode !== null) {
      endNode = endNode.next;
    }
    // check if we have reached kth node
    if (listLength === k) {
      frontNode = currentNode;
      endNode = head;
    }
    currentNode = currentNode.next;
  }
  // swap the values of front node and end node
  swap(frontNode, endNode);
  return head;
};

const swap = (nodeA, nodeB) => {
  const temp = nodeA.val;
  nodeA.val = nodeB.val;
  nodeB.val = temp;
};

console.log(logList(swapNodesValues(new SinglyLinkedList([1, 2, 3, 4, 5]).getHead(), 2)));
console.log(logList(swapNodesValues(new SinglyLinkedList([7, 9, 6, 6, 7, 8, 3, 0, 9, 5]).getHead(), 5)));
console.log(logList(swapNodesValues(new SinglyLinkedList([1, 2]).getHead(), 1)));
console.log(logList(swapNodesValues(new SinglyLinkedList([90, 100]).getHead(), 2)));
console.log(logList(swapNodesValues(new SinglyLinkedList([1, 2, 3]).getHead(), 2)));
