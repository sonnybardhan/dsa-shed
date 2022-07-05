class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtHead(value) {
    if (!value) return null;
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    node.next = this.head;
    this.head = node;
    return this;
  }
  removeHead() {
    if (!this.head) return null;
    this.head = this.head.next;
    return this;
  }
  insertAtTail(value) {
    if (!value) return null;

    if (!this.head) {
      return this.insertAtHead(value);
    }
    const node = new Node(value);

    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
    return this;
  }
  reverse(node = this.head) {
    if (!node) {
      console.log('Empty list!');
      return null;
    }

    let curr = node;
    let prev = null;
    let next;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
    return this.head;
  }
  printList() {
    if (!this.head) {
      return null;
    }

    let curr = this.head;

    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
    return this;
  }
  detectCycle_floyd() {
    if (!this.head) {
      console.log('Empty list!');
      return false;
    }
    let slow = this.head;
    let fast = this.head;

    while (true) {
      if (slow === fast) {
        break;
      }

      slow = slow.next;
      fast = fast.next;

      if (!fast || !fast.next) {
        return false;
      } else {
        fast = fast.next;
      }
    }

    let start = this.head;
    let mid = slow;

    while (start !== mid) {
      start = start.next;
      mid = mid.next;
    }
    return start;
  }

  detectCycles_set() {
    if (!this.head) {
      console.log('Empty list!');
      return false;
    }
    const seenNodes = new Set();
    let curr = this.head;
    while (!seenNodes.has(curr)) {
      if (!curr.next) {
        return false;
      }
      seenNodes.add(curr);
      curr = curr.next;
    }
    return curr;
  }
}

const ll = new LinkedList();

ll.insertAtTail('1');
ll.insertAtTail('2');
ll.insertAtTail('3');
ll.insertAtTail('4');
ll.insertAtTail('5');
ll.insertAtTail('6');
ll.insertAtTail('7');
ll.insertAtTail('8');
// ll.insertAtHead('1');
// ll.insertAtHead('2');
// ll.insertAtHead('3');
// ll.insertAtHead('4');

// console.log('before reversal');
// console.log('================');
// ll.printList();

// ll.reverse();
// console.log('after reversal');
// console.log('================');
// ll.printList();
