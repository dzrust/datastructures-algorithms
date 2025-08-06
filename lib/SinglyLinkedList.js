class UniDirectionListNode {
  constructor(val) {
    this.val = val ?? 0;
    this.next = null;
  }
}

class SinglyLinkedList {
  head = new UniDirectionListNode(-1);
  constructor(arr) {
    for (let i = 0, length = arr.length; i < length; i++) {
      this.append(new UniDirectionListNode(arr[i]?.val ?? arr[i]));
    }
  }
  getHead = () => this.head.next;
  append = (nodeToAdd) => {
    let dummy = this.getHead();
    if (!dummy) {
      this.head.next = nodeToAdd;
      return;
    }
    while (dummy && dummy.next) {
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

module.exports = {
  UniDirectionListNode,
  SinglyLinkedList,
};
