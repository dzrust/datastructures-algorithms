var ListNode = function (val) {
  this.val = val;
  this.next = null;
};

var MyLinkedList = function () {
  this.head = new ListNode(-1);
  this.tail = null;
  this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (this.length < index) {
    return -1;
  }
  let cur = this.head.next,
    count = 0;
  while (cur && count < index) {
    cur = cur.next;
    count++;
  }
  return cur ? cur.val : -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const temp = new ListNode(val);
  temp.next = this.head.next;
  this.head.next = temp;
  if (this.tail === null) {
    this.tail = temp;
  }
  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const temp = new ListNode(val);
  if (!this.tail) {
    this.head.next = temp;
    this.tail = temp;
  } else {
    this.tail.next = temp;
    this.tail = temp;
  }
  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (this.length < index) return;
  let prev = this.head,
    cur = this.head.next,
    count = 0;
  while (cur && count < index) {
    prev = cur;
    cur = cur.next;
    count++;
  }
  const newNode = new ListNode(val);
  prev.next = newNode;
  prev.next.next = cur;
  if (this.length === index) {
    this.tail = newNode;
  }
  this.length++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.length < index || this.length === 0) return;
  let prev = this.head,
    cur = this.head.next,
    count = 0;
  while (cur && count < index) {
    prev = cur;
    cur = cur.next;
    count++;
  }
  prev.next = prev.next.next;
  if (this.length === index + 1) {
    this.tail = prev.next;
  }
  this.length--;
  if (this.length === 0) {
    this.tail = null;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const testCase = new MyLinkedList();
const funcs = [
  "addAtHead",
  "addAtHead",
  "addAtHead",
  "addAtIndex",
  "deleteAtIndex",
  "addAtHead",
  "addAtTail",
  "get",
  "addAtHead",
  "addAtIndex",
  "addAtHead",
];
const values = [[7], [2], [1], [3, 0], [2], [6], [4], [4], [4], [5, 0], [6]];
funcs.forEach((func, index) => {
  console.log(testCase[func](...values[index]));
});
