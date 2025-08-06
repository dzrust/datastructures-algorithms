class SinglyLinkedList {
  head = null;
  constructor(arr) {
    head = new UniDirectionListNode(arr[0].val);
    for (let i = 1, length = arr.length; i < length; i++) {
      this.append(new UniDirectionListNode(arr[i].val));
    }
  }
  append = (nodeToAdd) => {
    let dummy = this.head;
    while (dummy.next) {
      dummy = dummy.next;
    }
    dummy.next = nodeToAdd;
  };
  deleteNode = (index) => {
    let dummy = this.head,
      count = 0;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    while (dummy && count !== index - 1) {
      dummy = dummy.next;
      index++;
    }
    dummy.next = dummy.next.next;
  };
}
class UniDirectionListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
