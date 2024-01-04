// TODO: Question 2

class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function reverseLinkedList(head) {
    if (!head || !head.next) {
        return head;
    }

    
    const reversedList = reverseLinkedList(head.next);

   
    head.next.next = head;
    head.next = null;

    return reversedList;
}


const originalList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const reversedList = reverseLinkedList(originalList);


function linkedListToArray(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}


console.log(linkedListToArray(reversedList));
