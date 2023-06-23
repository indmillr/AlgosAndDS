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

/* GET
-- accept an index
-- if index is < 0 or >= length, return null
-- loop through list until index is reached and return the node at that index
*/

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== idx) {
            current = current.next;
            counter++;
        }
        return current;
    }

/* SET
-- accept a value and an index
-- use get() to find the specific node
-- if the node is not found, return false
-- if the node is found, set the value of that node to the value passed to the function and return true
*/

    set(idx, val) {
        foundNode = this.get(idx);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

/* INSERT
-- if index is < 0 or > length, return false
-- if index = length, push() a new node
-- if index = 0, unshift() a new node
-- otherwise, use get() to access index - 1
-- set the next prop on that node to be the new node
-- set the next prop on the new node to be the previous next
-- increment the length
-- return true
*/

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === this.length) return this.push(val);
        if (idx === 0) return this.unshift(val);
       
        newNode = new Node(val);
        let prev = this.get(idx - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

/* REMOVE
-- if index is < 0 or > length, return undefined
-- if index = length -1, pop()
-- if index = 0, shift()
-- otherwise, use get() to access index - 1
-- set the next prop on that node to be the next of the next node
-- decrement the length
-- return value of removed node
*/

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        let prevNode = this.get(idx - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

/* REVERSE
-- swap the head and tail
-- create a var called next
-- create a var called prev
-- create a var called node and initialize it to the head prop
-- loop through the list
-- set next to be the next prop on whatever node is
-- set the next prop on the node to be whatever prev is
-- set prev to be the value of the node var
-- set the node var to be the value of the next var
*/

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
