class Graph {
  constructor() {
    this.adjecencyList = {};
  }

  addVertex(vertex) {
    if (!(vertex in this.adjecencyList)) {
      this.adjecencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!(vertex1 in this.adjecencyList)) {
      this.addVertex(vertex1);
    }
    if (!(vertex2 in this.adjecencyList)) {
      this.addVertex(vertex2);
    }

    this.adjecencyList[vertex1].add(vertex2);
    this.adjecencyList[vertex2].add(vertex1);
  }

  deleteEdge(vertex1, vertex2) {
    if (!(vertex1 in this.adjecencyList && vertex2 in this.adjecencyList))
      return;

    this.adjecencyList[vertex1].delete(vertex2);
    this.adjecencyList[vertex2].delete(vertex1);
  }

  deleteVertex2(vertex) {
    if (!(vertex in this.adjecencyList)) return;
    for (let setValue of this.adjecencyList[vertex]) {
      this.deleteEdge(setValue, vertex);
    }

    delete this.adjecencyList[vertex];
  }

  deleteVertex(vertex) {
    if (!(vertex in this.adjecencyList)) return;
    for (let key in this.adjecencyList) {
      if (this.adjecencyList[key]) {
        this.adjecencyList[key].delete(vertex);
      }
    }
    delete this.adjecencyList[vertex];
  }

  printGraph() {
    console.log(this.adjecencyList);
    for (let key in this.adjecencyList) {
      console.log(`${key} -->${Array.from(this.adjecencyList[key])}`);
    }
  }
}

const graphClass = new Graph();

graphClass.addVertex("A");
graphClass.addVertex("B");
graphClass.addVertex("C");
graphClass.addVertex("D");
graphClass.addVertex("F");
graphClass.addVertex("G");
graphClass.addEdge("A", "B");
graphClass.addEdge("B", "C");
graphClass.addEdge("A", "C");
graphClass.addEdge("B", "D");

graphClass.deleteVertex2("A");

console.log(graphClass.printGraph());
