class QueueFromStacks {
  constructor() {
    this.primary = [];
    this.secondary = [];
  }

  enqueue(value) {
    this.primary.push(value);
    return;
  }

  dequeue() {
    while (this.primary.length) {
      this.secondary.push(this.primary.pop());
    }

    const lastItem = this.secondary.pop();

    while (this.secondary.length) {
      this.primary.push(this.secondary.pop());
    }

    return lastItem;
  }

  peek() {
    while (this.primary.length > 1) {
      this.secondary.push(this.primary.pop());
    }
    const lastItem = this.primary.pop();

    this.secondary.push(lastItem);

    while (this.secondary.length) {
      this.primary.push(this.secondary.pop());
    }
    return lastItem;
  }

  empty() {
    return this.primary.length === 0;
  }
}

const q = new QueueFromStacks();

console.log(q.empty()); //true

q.enqueue('1');
q.enqueue('2');
q.enqueue('3');
q.enqueue('4');
q.enqueue('5');
q.enqueue('6');
q.enqueue('7');

console.log(q.peek()); //1

q.dequeue();
console.log(q.peek()); //2

q.dequeue();
console.log(q.peek()); //3

console.log(q.empty()); //false
