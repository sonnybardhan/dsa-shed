class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  cosntructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtHead(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this.head;
    }
    node.next = this.head;
    this.head.previous = node;
    this.head = node;
    // this.head.previous = null;
    return this.head;
  }

  insertAtTail(value) {
    if (!this.tail) {
      return this.insertAtHead(value);
    }
    const node = new Node(value);
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
    // this.tail.next = null;
    return this.head;
  }

  removeHead() {
    if (!this.head) {
      console.log('Empty list!');
      return null;
    }
    this.head = this.head.next;
    this.head.previous = null;
    return this.head;
  }

  removeTail() {
    if (!this.tail) {
      console.log('Empty list!');
      return null;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    return this.head;
  }

  printList() {
    if (!this.head) {
      console.log('Empty list!');
      return null;
    }

    let curr = this.head;
    let str = '';

    while (curr) {
      str += curr.next ? `${curr.value} -> ` : curr.value;
      curr = curr.next;
    }
    console.log(str);
    return;
  }

  printReverseList() {
    if (!this.tail) {
      console.log('Empty list!');
      return null;
    }

    let curr = this.tail;
    let str = '';

    while (curr) {
      str += curr.previous ? `${curr.value} -> ` : curr.value;
      curr = curr.previous;
    }
    console.log('PRINTING IN REVERSE: ');
    console.log(str);
    return;
  }
}

const doubly = new DoublyLinkedList();
// doubly.insertAtTail('1x');
// doubly.insertAtTail('2x');
// doubly.insertAtTail('3x');
// doubly.insertAtTail('4x');
// doubly.insertAtTail('5x');
// doubly.insertAtTail('6x');
// doubly.insertAtTail('7x');
// doubly.insertAtHead('1');
// doubly.insertAtHead('2');
// doubly.insertAtHead('3');
// doubly.insertAtHead('4');
// doubly.insertAtHead('5');
// doubly.insertAtHead('6');
// doubly.insertAtHead('7');
// doubly.printList();
// doubly.printReverseList();

console.log(doubly);
