class DoublyLinkedList {
  head = null;
  constructor(arr) {
    head = new BiDirectionalListNode(arr[0].val);
    for (let i = 1, length = arr.length; i < length; i++) {
      this.addToEnd(new BiDirectionalListNode(arr[i].val));
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
class BiDirectionalListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
