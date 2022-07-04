class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
    this.child = null;
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

  // addChild(parentValue, child){
  // 	if (!this.head) {
  //     console.log('Empty list!');
  //     return null;
  //   }

  //   let curr = this.head;

  //   while (curr) {
  //     if(curr.value === parentValue){

  // 		}
  //     curr = curr.next;
  //   }
  //   console.log(str);
  //   return;
  // }

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

  merge(node = this.head) {
    if (!node) {
      console.log('Empty list!');
      return null;
    }

    let curr = node;
    let nextToCurr = [];

    while (curr) {
      if (curr.child) {
        nextToCurr.push(curr.next);
        curr.next = curr.child;
        curr.child.previous = curr;
        curr = curr.child;
      } else if (!curr.next) {
        if (nextToCurr.length) {
          const nextNode = nextToCurr.pop();
          curr.next = nextNode;
          nextNode.previous = curr;
          curr = nextNode;
        } else {
          return this.head;
        }
      } else {
        curr = curr.next;
      }
    }

    return this.head;
  }

  mergeMultiple(node = this.head) {
    if (!node) {
      console.log('Empty list');
      return null;
    }

    let curr = node;

    while (curr) {
      if (curr.child) {
        let next = curr.next;
        let child = curr.child;
        child.previous = curr;

        while (child.next) {
          child = child.next;
        }

        child.next = next;
        next.previous = child;

        curr.next = child;
        curr.child = null;
      }
      curr = curr.next;
    }

    return node;
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
