const PQ = require('./PriorityQueue.js');

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = [];
    }
    return;
  }
  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      console.log('Invalid vertex/vertices');
      return;
    }
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
    return;
  }

  shortestPath(start = Object.keys(this.adjacencyList)[0], end) {
    const distances = {};
    const previous = {};
    // const pq = new PriorityQueue();
    const pq = new PQ();

    for (let node of Object.keys(this.adjacencyList)) {
      if (node === start) {
        distances[node] = 0;
        pq.insert(node, 0);
      } else {
        distances[node] = Infinity;
        pq.insert(node, Infinity);
      }
      previous[node] = null;
    }

    while (pq.length) {
      // const {value: currNode} = pq.dequeue();
      const { value: currNode } = pq.extractMin();

      for (let vertex of this.adjacencyList[currNode]) {
        const currDistance = vertex.weight + distances[currNode];

        const prevDistance = distances[vertex.node];

        if (currDistance < prevDistance) {
          //update distances
          distances[vertex.node] = currDistance;
          //update previous with currNode
          previous[vertex.node] = currNode;
          //insert new distance in priorityQueue
          pq.insert(vertex.node, currDistance);
        }
      }
    }

    //contruct actual path
    if (end) {
      const path = [];
      path.push(end);
      let next = previous[end];

      while (next) {
        path.push(next);
        next = previous[next];
      }
      console.log('path: ', path.reverse());

      console.log('total distance ', distances[end]);
    } else {
      console.log(previous);
    }
    return;
  }
}

// const pq = new PriorityQueue();
// pq.enqueue('a', 4)
// pq.enqueue('b', 5)
// pq.enqueue('c', 2)
// pq.enqueue('d', 3)
// pq.enqueue('e', 1)
// pq.enqueue('f', 1)

// console.log(pq);

const g = new WeightedGraph();
g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addVertex('f');
g.addEdge('a', 'b', 4);
g.addEdge('a', 'c', 2);
g.addEdge('b', 'e', 3);
g.addEdge('c', 'd', 2);
g.addEdge('c', 'f', 4);
g.addEdge('d', 'e', 3);
g.addEdge('d', 'f', 1);
g.addEdge('f', 'e', 1);
console.log(g);
console.log(g.adjacencyList);
g.shortestPath('a', 'e');

// const pq = new PQ();
// pq.insert('dog', 10)
// pq.insert('cat', 7)
// pq.insert('bird', 15)
// pq.insert('worm', 100)
// pq.insert('plant', 5)
// pq.insert('human', 1)
// // console.log(pq);

// pq.extractMin();
