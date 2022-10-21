class Node:
    def __init__(self, value: int):
        next: Node | None
        self.value: int = value
        self.next: Node | None = None

    def __str__(self):
        return f"{self.value} -> {self.next}"


class LinkeList:
    def __init__(self):
        self.tail: Node | None
        self.head: Node | None
        self.length: int = 0
        self.head = None
        self.tail = self.head
        # self.tail = self.head
        # self.tail = self.head

    def view(self):
        curr = self.head
        print(curr)

    def append(self, value: int):
        newNode = Node(value)
        if not self.head:
            self.head = newNode
            self.tail = newNode
            self.length += 1
            return
        self.tail.next = newNode
        self.tail = newNode
        self.length += 1
        return

    def prepend(self, value: int):
        newNode = Node(value)
        if not self.head:
            self.head = newNode
            self.tail = newNode
            self.length += 1
            return
        newNode.next = self.head
        self.head = newNode
        self.length += 1
        return

    def pop(self):
        curr = self.head
        target = self.tail
        if curr == self.tail:
            self.head = None
            self.tail = None
            return target
        while curr and curr.next != self.tail:
            curr = curr.next
        curr.next = None
        self.tail = curr
        self.length -= 1
        return target

    def reverse(self):
        prev = None
        curr = self.head
        self.tail = self.head
        next = curr.next
        while curr:
            curr.next = prev
            prev = curr
            curr = next
            next = next.next if next else None
        self.head = prev
        return


my_list = LinkeList()
my_list.append(23)
my_list.append(467)
my_list.prepend(89)
my_list.append(235)
print(my_list.pop().value)
my_list.view()
my_list.reverse()
my_list.view()
print(my_list.tail)
