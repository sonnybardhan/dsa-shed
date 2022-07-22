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

  // rightSideView_DFS(node, view = [], level = 0) {
  //   //preorder NRL (adjusted, swapping R with L)

  //   if (!node) return view;

  //   if (level >= view.length) {
  //     view.push(node.val);
  //   }

  //   if (node.right) {
  //     this.rightSideView_DFS(node.right, view, level + 1);
  //   }

  //   if (node.left) {
  //     this.rightSideView_DFS(node.left, view, level + 1);
  //   }

  //   return view;
  // }

  rhs_DFS(node, view = [], level = 0) {
    if (!node) return view;

    if (level >= view.length) {
      view.push(node.value);
    }

    if (node.right) {
      this.rhs_DFS(node.right, view, level + 1);
    }

    if (node.left) {
      this.rhs_DFS(node.left, view, level + 1);
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

  // nodesInCompleteTree(node, count = 0, level = 0) {
  //   //not sure
  //   if (!node) return count;

  //   count += Math.ceil(level / 2);

  //   if (node.left) {
  //     count += this.nodesInCompleteTree(node.left, count, level + 1);
  //   }

  //   if (node.right) {
  //     count += this.nodesInCompleteTree(node.right, count, level + 1);
  //   }

  //   return count;
  // }

  nodesInCompleteTree(node, count = 0, level = 0) {
    if (!node) return 0;

    if (level > 0) {
      const numNodes = 2 ** level - 1;

      //nodes till the previous level
      count += 2 * (numNodes - 1);

      //adding current node;
      count += 1;
    }
  }

  binarySearch(arr, left, right, target) {
    if (!arr.length) return -1;

    let mid;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    while (left <= mid) {
      mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return arr[mid];
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  bSearchRightMostNode(arr, left, right) {
    if (!arr.length) return -1;

    let mid;

    while (left < right) {
      mid = Math.ceil((left + right) / 2);
      if (arr[mid] == null) {
        right = mid - 1;
      } else {
        //arr[mid] != null
        left = mid;
      }
    }
    return arr[left]; //or arr[right] ... same thing
  }

  getTreeHeight(root) {
    if (!root) return 0;

    return 1 + this.getTreeHeight(root.left);
  }

  isValidBinaryTree(node) {
    if (!node) return false;

    if (node.left && node.right) {
      if (node.left.value > node.value) {
        return false;
      }
      if (node.right.value < node.value) {
        return false;
      }
      if (node.left.value > node.right.value) {
        return false;
      }
      if (node.left.value > node.right.value) {
        return false;
      }

      const isLeftValid = this.isValidBinaryTree(node.left);
      const isRightValid = this.isValidBinaryTree(node.right);

      return isLeftValid && isRightValid;
    } else if (node.left) {
      if (node.left.value > node.value) {
        return false;
      }
      return this.isValidBinaryTree(node.left);
    } else if (node.right) {
      if (node.right.value < node.value) {
        return false;
      }
      return this.isValidBinaryTree(node.right);
    }

    //failing - [5, 4, 6, null, null, 3, 7];
    return true;
  }
}
