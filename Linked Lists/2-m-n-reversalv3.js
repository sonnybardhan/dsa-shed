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

  mnReversal(m, n, node = this.head) {
    if (!node) {
      console.log('Empty list!');
      return null;
    }
    let start = null;
    let listSoFar = null;
    let tail = null;
    let next = null;
    let position = 1;
    let curr = node;
    let resetHead = m === 1 ? true : false;

    while (curr) {
      if (position === m - 1) {
        start = curr;
      }

      if (position === m) {
        tail = curr;
        for (let i = m; i <= n; i++) {
          if (i === n && resetHead) {
            this.head = curr;
          }
          next = curr.next;
          curr.next = listSoFar;
          listSoFar = curr;
          curr = next;
        }

        if (!resetHead) {
          start.next = listSoFar;
        }
        tail.next = curr;
        return this.printList();
      }
      position++;
      curr = curr.next;
    }
  }

  printList() {
    if (!this.head) {
      return null;
    }
    let str = '';
    let curr = this.head;

    while (curr) {
      str += curr.next ? curr.value + ' -> ' : curr.value;
      curr = curr.next;
    }
    console.log(str);
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

// console.log('before');
// ll.printList();

// ll.mnReversal(1, 7);
ll.mnReversal(2, 5);
// ll.mnReversal(1, 3);
// ll.mnReversal(3, 7);

// ll.mnReversal(2, 4);
// console.log('after');

/*
m=2, n=4
list => 1 -> 2 -> 3 -> 4 -> 5 -> null,
answer => 1 -> 4 -> 3 -> 2 -> 5 -> null

m=1, n=5
list => 1 -> 2 -> 3 -> 4 -> 5 -> null,
answer => 5 -> 2 -> 3 -> 4 -> 1 -> null,
actual answer => 5 -> 4 -> 3 -> 2 -> 1 -> null, ... but how?!

m=1, n=1
list => 1 -> null
answer => 1

m=0, n=0
list => null
answer => null



*/
