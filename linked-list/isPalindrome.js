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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head,
    fast = head;
  const sentinel = new UniDirectionListNode(-1);
  let count = 1;
  while (fast && fast.next) {
    const newNode = new UniDirectionListNode(slow.val);
    newNode.next = sentinel.next;
    sentinel.next = newNode;
    slow = slow.next;
    fast = fast.next.next;
    count += 2;
  }
  if (fast === null) {
    count ++;
  }
  console.log(count);
  let reverseCur = sentinel.next;
  console.log(logList(reverseCur));
  console.log(logList(fast === null ? slow : slow.next));
  if (fast !== null) {
    slow = slow.next;
  }
  while (slow && reverseCur) {
    if (slow.val !== reverseCur.val) {
      return false;
    }
    slow = slow.next;
    reverseCur = reverseCur.next;
  }
  return true;
};

console.log(isPalindrome(new SinglyLinkedList([1, 2]).getHead()));
console.log(isPalindrome(new SinglyLinkedList([1, 2, 2, 1]).getHead()));
console.log(isPalindrome(new SinglyLinkedList([1, 0, 0]).getHead()));
console.log(isPalindrome(new SinglyLinkedList([0, 1, 0]).getHead()));
console.log(isPalindrome(new SinglyLinkedList([1, 2, 2, 2, 1]).getHead()));
