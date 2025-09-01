var ListNode = function (val) {
    this.val = val;
    this.next = null;
};

var MyLinkedList = function () {
    this.head = null;
    this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (this.length <= index) {
        return -1;
    }
    let cur = this.head,
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
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let cur = this.head;
    while (cur && cur.next) {
        cur = cur.next;
    }
    const newNode = new ListNode(val);
    if (cur?.next) {
        cur.next.next = newNode;
    } else if (cur) {
        cur.next = newNode;
    } else {
        this.head = newNode;
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
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    let prev = this.head,
        cur = this.head,
        count = 0;
    while (cur && count < index) {
        prev = cur;
        cur = cur.next;
        count++;
    }
    const newNode = new ListNode(val);
    newNode.next = cur;
    if (!prev) {
        this.head = newNode;
    } else {
        prev.next = newNode;
    }
    this.length++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (this.length <= index || this.length === 0) return;
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
    let prev = this.head,
        cur = this.head,
        count = 0;
    while (cur && count < index) {
        prev = cur;
        cur = cur.next;
        count++;
    }
    if (!prev?.next) {
        this.head = null;
    } else {
        prev.next = prev.next.next;
    }
    this.length--;
};

const runTestCase = (funcsToRun, testCaseValues) => {
  const testCase = new MyLinkedList();
  funcsToRun.forEach((func, index) => {
    console.log(testCase[func](...testCaseValues[index]));
  });
};
// runTestCase(
//   [
//     "addAtHead",
//     "addAtHead",
//     "addAtHead",
//     "addAtIndex",
//     "deleteAtIndex",
//     "addAtHead",
//     "addAtTail",
//     "get",
//     "addAtHead",
//     "addAtIndex",
//     "addAtHead",
//   ],
//   [[7], [2], [1], [3, 0], [2], [6], [4], [4], [4], [5, 0], [6]],
// );

// runTestCase(["addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"], [[1], [3], [1, 2], [1], [0], [0]]);
// runTestCase(["addAtIndex", "addAtIndex", "addAtIndex", "get"], [[0, 10], [0, 20], [1, 30], [0]]);
runTestCase(
  [
    "addAtHead",
    "deleteAtIndex",
    "addAtHead",
    "addAtHead",
    "addAtHead",
    "addAtHead",
    "addAtHead",
    "addAtTail",
    "get",
    "deleteAtIndex",
    "deleteAtIndex",
  ],
  [[2], [1], [2], [7], [3], [2], [5], [5], [5], [6], [4]],
);
