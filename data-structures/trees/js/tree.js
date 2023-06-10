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
    // 6           7
    if (root.value > node.value) {
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
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log("->", root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log("->", root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log("->", root.value);
    }
  }

  breathFirst() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root) return;
    if (root.left === null) {
      console.log(root.value);
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root) return;
    if (root.right === null) {
      console.log(root.value);
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      return root;
    } else if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      // the last scenario is when the node have a left and a right child,
      // using the inorder successesor, which is the min value of the right hand side of the tree
      right.value = this.min(root.right);
      //////////////////////////////////////
      //                             18           19
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new Tree();

console.log(bst.insert(6));
console.log(bst.insert(7));
console.log(bst.insert(2));
console.log(bst.insert(1));
console.log(bst.insert(5));
console.log(bst.insert(6));
console.log(bst.insert(8));
console.log(bst.root);
console.log(bst.search(bst.root, 4));
console.log(bst.preOrder(bst.root));
console.log(bst.inOrder(bst.root));
console.log(bst.postOrder(bst.root));
console.log(bst.breathFirst());
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
