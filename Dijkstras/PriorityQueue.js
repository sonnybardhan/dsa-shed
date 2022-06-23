class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

module.exports = class PriorityQueue {
  constructor() {
    this.items = [];
  }
  get length() {
    return this.items.length;
  }
  insert(value, priority) {
    const node = new Node(value, priority);

    this.items.push(node);

    if (this.items.length === 1) {
      return true;
    }
    this.bubbleUp();
    return true;
  }
  bubbleUp() {
    let idx = this.items.length - 1;
    let curr = this.items[idx];
    let parentIdx = Math.floor((idx - 1) / 2);
    let parent = this.items[parentIdx];

    while (idx > -1 && parentIdx > -1) {
      if (curr.priority < parent.priority) {
        this.items[parentIdx] = curr;
        this.items[idx] = parent;

        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
        curr = this.items[idx];
        parent = this.items[parentIdx];
      } else {
        break;
      }
    }

    console.log(this.items);
    return;
  }

  extractMin() {
    if (!this.items.length) {
      return null;
    }
    if (this.items.length === 1) {
      return this.items.pop();
    }
    // let len = this.items.length-1;
    let min = this.items[0];
    let last = this.items[this.items.length - 1];
    this.items[0] = last;
    this.items.pop();
    this.sink();
    // console.log('min: ', min);
    return min;
  }

  sink() {
    let idx = 0;
    let curr = this.items[idx];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let leftChild = this.items[leftIdx];
      let rightChild = this.items[rightIdx];
      let swap;

      if (leftChild && rightChild) {
        if (
          leftChild.priority < curr.priority &&
          rightChild.priority < curr.priority
        ) {
          swap = leftChild.priority < rightChild.priority ? leftIdx : rightIdx;
        } else if (leftChild.priority < curr.priority) {
          swap = leftIdx;
        } else if (rightChild.priority < curr.priority) {
          swap = rightIdx;
        }
      } else if (leftChild && leftChild.priority < curr.priority) {
        swap = leftIdx;
      } else if (rightChild && rightChild.priority < curr.priority) {
        swap = rightIdx;
      }

      if (!swap) break;
      this.items[idx] = this.items[swap];
      this.items[swap] = curr;
      idx = swap;
    }
    return;
  }
};

// const pq = new PriorityQueue();
// pq.insert('dog', 10)
// pq.insert('cat', 7)
// pq.insert('bird', 15)
// pq.insert('worm', 100)
// pq.insert('plant', 5)
// pq.insert('human', 1)
// // console.log(pq);

// pq.extractMin();
