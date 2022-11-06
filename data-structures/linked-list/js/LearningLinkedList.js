class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  preprend(value) {
    const node = new Node(value);
    if (this.getSize === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.getSize === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  print() {
    let curr = this.head;
    let listValue = " ";
    while (curr) {
      listValue += `${curr.value}`;
      curr = curr.next;
    }
    return listValue;
  }

  insert(value, index) {
    if (index < 0 || index > this.getSize()) {
      return null;
    } else if (index === 0) {
      this.preprend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index; i++) {
        prev = prev.next;
      }
      node.next = prev.next;

      prev.next = node;
    }
    this.size++;
  }

  delete(value, index) {
    if (index < 0 || index > this.getSize()) {
      return null;
    } else if (index === 0) {
      this.preprend(value);
    } else {
      let deletedNode;
      let prev = this.head;
      for (let i = 0; i < index; i++) {
        prev = prev.next;
      }
      node.next = prev.next;

      prev.next = node;
    }
    this.size--;
  }
}

const linkList = new LinkedList();

console.log(linkList.getSize());
console.log(linkList.getSize());

console.log(linkList.getSize());
linkList.preprend(1);
linkList.preprend(0);
linkList.preprend(1);
linkList.preprend(1);
linkList.preprend(1);
console.log(linkList.getSize());

//linkList.append(1)
console.log(linkList);
console.log(linkList.getSize());

//console.log(linkList.insert(8, 1))
console.log(linkList.getSize());
console.log(linkList.print());
