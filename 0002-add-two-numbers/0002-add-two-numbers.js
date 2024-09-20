/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy node to start the resulting list
    let current = dummyHead; // Pointer for the result list
    let carry = 0; // To handle carry from the sum

    // Loop until both lists are processed
    while (l1 !== null || l2 !== null) {
        // Get the values for the current nodes, or 0 if the node is null
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;

        // Compute the sum of the two digits and the carry
        let sum = carry + x + y;
        carry = Math.floor(sum / 10); // Update carry

        // Create a new node with the last digit of the sum
        current.next = new ListNode(sum % 10);
        current = current.next; // Move the pointer to the next node

        // Move to the next nodes in the input lists if they exist
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // If there's any carry left at the end, add a new node
    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next; // Return the result list starting from the first node
};
