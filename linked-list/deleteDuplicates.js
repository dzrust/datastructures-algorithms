/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let pnter = head;
  while (pnter && pnter.next) {
    if (pnter.val === pnter.next.val) {
      pnter.next = pnter.next.next;
    } else {
      pnter = pnter.next;
    }
  }
  return head;
};

//[1,1,2]
/**
 * head -> 1 -> 1 -> 1
 * pntr -> head
 * ------------
 * pntr -> 1
 * pntr.next -> 1
 * ------------
 *
 */
