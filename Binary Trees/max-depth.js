class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.nodes = [];
  }

  add(value) {}

  maxDepth(node, count = 0) {
    if (!node) return count;

    let leftCount = count + 1;
    let rightCount = count + 1;

    if (node.left) {
      this.maxDepth(node.left, leftCount);
    }

    if (node.right) {
      this.maxDepth(node.right, rightCount);
    }

    return Math.max(leftCount, rightCount);
  }
}
