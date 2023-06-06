//  o
// /  \
//   o      o
//  / \    / \
// o   o  o   o

// 1. Create a node class that has properties for the value stored in the node, the left child node, and the right child node.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newVal = new TreeNode(value);
    if (this.isEmpty()) {
      this.root = newVal;
    } else {
      this.insertNode(this.root, newVal);
    }
  }
  // if incoming item is less than the root's value, we add to the left.
  // if incoming item is greater than root's value, we add to the right.
  insertNode(root, node) {
    if (root.value < node.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root, value) {
    if (root) {
      console.log("root", root.value);
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        console.log("root", root.left);
        this.search(root.left, value);
      } else {
        console.log("root", root.right);
        this.search(root.right, value);
      }
    }
  }
  searchTrav(root, value) {
    if (root.value === value) {
      return true;
    } else {
      this.searchTrav(root.value, value);
    }
  }
}

const bst = new Tree();

console.log(bst.insert(6));
console.log(bst.insert(7));
console.log(bst.insert(2));
console.log(bst.insert(4));
console.log(bst.insert(5));
console.log(bst.root);
console.log(bst.search(bst.root, 7));
