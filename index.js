// TODO: Question 1 

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeSortedLists(linked_list1, linked_list2) {
    if (!linked_list1) {
        return linked_list2;
    }
    if (!linked_list2) {
        return linked_list1;
    }

    if (linked_list1.val < linked_list2.val) {
        linked_list1.next = mergeSortedLists(linked_list1.next, linked_list2);
        return linked_list1;
    } else {
        linked_list2.next = mergeSortedLists(linked_list1, linked_list2.next);
        return linked_list2;
    }
}


const linked_list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
const linked_list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergedList = mergeSortedLists(linked_list1, linked_list2);


function linkedListToArray(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}


console.log(linkedListToArray(mergedList));

