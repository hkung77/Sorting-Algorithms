class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(list) {
        let prevNode = null;
        for (let i = 0; i < list.length; i++) {
            const node = new LinkedListNode(list[i], null);
            if (prevNode) {
                prevNode.next = node;
            } else {
                this.head = node;
            }
            prevNode = node;
        }
    }

    insert(value, index) {
        const node = new LinkedListNode(value, null);
        let insertNode = this.head;
        let prevNode;
        for (let i = 0; i < index; i++) {
            prevNode = insertNode;
            insertNode = insertNode.next;
        }

        if (prevNode) {
            prevNode.next = node;
        }
        node.next = insertNode;
    }

    print() {
        let node = this.head;
        let printing = true;
        const response = [];
        while (printing) {
            response.push(node.value);
            if (node.next) {
                node = node.next;
            } else {
                printing = false;
            }
        }
        return response;
    }
}

const linkedList = new LinkedList([1,6,7,32]);
console.log(linkedList.print());
console.log(linkedList.insert(41, 2));
console.log(linkedList.print());