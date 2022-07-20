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

  maxDepth2(node) {
    if (!node) return 0;
    return 1 + Math.max(this.maxDepth2(node.left), this.maxDepth2(node.right));
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

  rightSideView(node) {
    if (!node) return [];

    const q = [node];
    const view = [];

    while (q.length) {
      let len = q.length;
      let count = 0;
      let rightMost;

      while (count < len) {
        const currNode = q.shift();

        //be careful of implicit checks
        if (currNode.value != null) {
          rightMost = currNode.value;
        }

        if (currNode.left) {
          q.push(currNode.left);
        }

        if (currNode.right) {
          q.push(currNode.right);
        }

        count++;
      }
      view.push(rightMost);
    }

    return view;
  }

  rightSideView_DFS(node, view = [], level = 0) {
    //preorder NRL (adjusted, swapping R with L)

    if (!node) return view;

    if (level >= view.length) {
      view.push(node.val);
    }

    if (node.right) {
      this.rightSideView_DFS(node.right, view, level + 1);
    }

    if (node.left) {
      this.rightSideView_DFS(node.left, view, level + 1);
    }

    return view;
  }

  rhs_BFS(node) {
    if (!node) return [];

    const q = [node];
    const view = [];

    while (q.length) {
      const length = q.length;
      let count = 0;
      let currNode;

      while (count < length) {
        currNode = q.shift();

        if (currNode.left) {
          q.push(currNode.left);
        }

        if (currNode.right) {
          q.push(currNode.right);
        }

        count++;
      }
      view.push(currNode);
    }

    return view;
  }
}
