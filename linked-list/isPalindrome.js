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
var isPalindrome = function(head) {
    let cur = head.next;
    const reversedListTail = new UniDirectionListNode(head.val), sentinel = new UniDirectionListNode(-1);
    sentinel.next = reversedListTail;
    while (cur) {
        const newNode = new UniDirectionListNode(cur.val);
        newNode.next = sentinel.next;
        sentinel.next = newNode;
        cur = cur.next;
    }
    cur = head;
    let reverseCur = sentinel.next;
    while (cur && reverseCur) {
        if (cur.val !== reverseCur.val) {
            return false;
        }
        cur = cur.next;
        reverseCur = reverseCur.newNode
    }
    return true;
};

console.log(isPalindrome(new SinglyLinkedList([1, 2]).getHead()));
console.log(isPalindrome(new SinglyLinkedList([1,2,2,1]).getHead()));