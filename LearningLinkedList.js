class Node{
    constructor(value, next){
        {
            this.value = value,
            this.next = next
        }
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value, null)
        this.tail = this.head
        this.length = 1
    }


    append(value){
        const newNode = new Node(value, null)

        this.tail.next = newNode
        this.tail = newNode
        this.length += 1
        return this
    }

    // prepend(value){
    //     const newNode = new Node(value, null)

    //     this.head
    // }
}

const myLinkedList = new LinkedList(85)

console.log(myLinkedList)

myLinkedList.append(9)

console.log(myLinkedList)