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

/* PUSH
-- write a function that accepts a value
-- create a new node using the value passed to the function
-- if there is no head property on the list, set the head and tail to be the
newly created node
-- otherwise, set the next property on the tail to be the new node and set the 
tail property on the list to be the newly created node
-- increment the length by 1
*/

    push(val) {
        // create a new node using the value passed to the function
        let newNode = new Node(val);
        // if there is no head property, set the head and tail to the new node
        if (!this.head) {
            this.head = newNode; 
            this.tail = this.head;
        } else {
            // set the next prop on the tail to the new node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // increment the length by 1
        this.length++;
        return this;
    }

/* POP
-- if there are no nodes in the list, return undefined
-- loop through the list until the tail is reached
-- set the next property of the 2nd to last node to be null
-- set the tail to be the 2nd to last node
-- decrement the length of the list by 1
-- return the value of the node removed
*/

    pop() {
        // if no nodes on the list, return undefined
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        // loop through until tail is reached
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // set tail to be 2nd to last node
        this.tail = newTail;
        // set next prop of the 2nd to last node to null
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

/* SHIFT
-- if there are no nodes, return undefined
-- store the current head prop in a variable
-- set the head prop to be the current head's next prop
-- decrement length by 1
-- return the value of the removed node
*/

    shift() {
        // if no nodes, return undefined
        if (!this.head) return undefined;
        // store the current head
        let currentHead = this.head;
        // set the head prop to the next prop
        this.head = currentHead.next;
        // decrement length
        this.length--;
        return currentHead;
    }

/* UNSHIFT
-- accept a value
-- create a new node using the passed value
-- if no head prop, set head and tail to be the newly created node
-- otherwise, set the newly created node's next prop to be the current head prop on the list
-- set the head prop on the list to be that newly created node
-- increment the length by 1
-- return the linked list 
*/

    unshift(val) {
        let newNode = new Node(val);
        if (!head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }

}