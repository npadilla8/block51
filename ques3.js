// TODO: Question 3 

// To remove the nodes with specific value from linked list
// We can use the removeNodesWithValus recursive funtion
// This function takes the head of a linked list and a yarget value as parameters

class ListNode {
    constructor(value, next = null) {
        this.vaue = value;
        this.next = next;
    }
}

function removeNodesWithValue(head, targetValue) {
    if (!head) {
        return null;
    }

    
    head.next = removeNodesWithValue(head.next, targetValue);

    
    return head.val === targetValue ? head.next : head;
}


const originalList = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
const modifiedList = removeNodesWithValue(originalList, 6);


function linkedListToArray(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}


console.log(linkedListToArray(modifiedList));

