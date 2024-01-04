// TODO: Question 4

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapPairs(head) {
    if (!head || !head.next) {
        return head;
    }

    
    const nextPairHead = head.next.next;

    
    const newHead = head.next;
    head.next.next = head;
    head.next = swapPairs(nextPairHead);

    return newHead;
}


const originalList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const swappedList = swapPairs(originalList);


function linkedListToArray(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}


console.log(linkedListToArray(swappedList));
