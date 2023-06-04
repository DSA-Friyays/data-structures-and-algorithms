// Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    /// movement
    prev = curr;
    curr = temp;
  }
  return prev;
}

// Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
  }

  return dummy.next;
}

// Reorder List
function reorderList(head: ListNode | null): void {
  if (!head || !head.next) {
    return;
  }
  let slowPnt = head;
  let fastPnt = head.next;

  while (fastPnt && fastPnt.next) {
    slowPnt = slowPnt.next;
    fastPnt = fastPnt.next.next;
  }

  let second = slowPnt.next;
  let prev = null;
  slowPnt.next = null;
  while (second) {
    const temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  //
  let firstPrt = head;
  let secondPrt = prev;
  while (secondPrt) {
    const temp1 = firstPrt.next;
    const temp2 = secondPrt.next;

    firstPrt.next = secondPrt;
    secondPrt.next = temp1;

    firstPrt = temp1;
    secondPrt = temp2;
  }
}

// Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Follow up: Could you do this in one pass?
//  1 -> 2 -> 3 -> 4 -> 5
//  1 -> 2 -> 3 -> 5
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  while (n > 0 && fast.next) {
    fast = fast.next;
    n--;
  }

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}

// Linked List Cycle
function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
