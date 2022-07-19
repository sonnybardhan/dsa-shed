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

  levelOrder(node) {
    if (!node) return [[]];
    const q = [node];
    const order = [];

    let currLevel = [];
    let childrenRemaining = q.length;

    while (q.length) {
      const currNode = q.shift();

      currLevel.push(currNode.value);

      if (currNode.left) {
        q.push(currNode.left);
      }

      if (currNode.right) {
        q.push(currNode.right);
      }

      childrenRemaining--;

      if (childrenRemaining === 0) {
        childrenRemaining = q.length;
        order.push(currLevel);
        currLevel = [];
      }
    }
    return order;
  }

  levelOrder2(node) {
    if (!node) return [[]];

    const order = [];
    const q = [node];
    let currentLevel = [];
    let childrenRemaining = 1;

    while (q.length) {
      const currNode = q.shift();

      currentLevel.push(currNode.value);

      if (currNode.left) {
        q.push(currNode.left);
      }

      if (currNode.right) {
        q.push(currNode.right);
      }

      childrenRemaining--;

      if (childrenRemaining === 0) {
        childrenRemaining = q.length;
        order.push(currentLevel);
        currLevel = [];
      }
    }

    return order;
  }

  levelOrder3(node) {
    if (!node) return [];

    const q = [node];
    const order = [];

    while (q.length) {
      let len = q.length;
      let count = 0;
      const currentLevelValues = [];

      while (count < len) {
        const currNode = q.shift();
        currentLevelValues.push(currNode);

        if (currNode.left) {
          q.push(currNode.left);
        }

        if (currNode.right) {
          q.push(currNode.right);
        }

        count++;
      }

      order.push(currentLevelValues);
    }

    return order;
  }
}
