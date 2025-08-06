class BiDirectionalListNode {
  constructor(val) {
    this.val = val ?? 0;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head = null;
  constructor(arr) {
    this.head = new BiDirectionalListNode(arr[0].val ?? arr[0]);
    for (let i = 1, length = arr.length; i < length; i++) {
      this.addToEnd(new BiDirectionalListNode(arr[i].val ?? arr[i]));
    }
  }
  addToEnd = (nodeToAdd) => {
    nodeToAdd.next = tail;
    nodeToAdd.prev = tail.prev;
    tail.prev.next = nodeToAdd;
    tail.prev = nodeToAdd;
  };

  removeFromEnd = () => {
    if (head.next == tail) {
      return;
    }

    let nodeToRemove = tail.prev;
    nodeToRemove.prev.next = tail;
    tail.prev = nodeToRemove.prev;
  };

  addToStart = (nodeToAdd) => {
    nodeToAdd.prev = head;
    nodeToAdd.next = head.next;
    head.next.prev = nodeToAdd;
    head.next = nodeToAdd;
  };

  removeFromStart = () => {
    if (head.next == tail) {
      return;
    }

    let nodeToRemove = head.next;
    nodeToRemove.next.prev = head;
    head.next = nodeToRemove.next;
  };
}

module.exports = {
  BiDirectionalListNode,
  DoublyLinkedList
}
