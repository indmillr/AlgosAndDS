/*
A linked list has pointers to the head, the tail, and the length
Piece of data - val
Reference to next node - next
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        
    }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");