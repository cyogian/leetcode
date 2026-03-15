class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
      }
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @url https://leetcode.com/problems/add-two-numbers/
 * @return {ListNode}
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // Create a dummy head to simplify building the new list
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    // Continue as long as there are digits to add or a remaining carry
    while (l1 !== null || l2 !== null || carry > 0) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        // Calculate sum and carry
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        
        // Create the next node with the single digit (sum % 10)
        current.next = new ListNode(sum % 10);
        
        // Move pointers forward
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;
};