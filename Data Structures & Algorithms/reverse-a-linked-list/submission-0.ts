/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) return null;

        const values = [];
        let current = [];

        while (current) {
            values.push(current.val);
            current = current.next;
        }

        const newHead = new ListNode(values[values.length - 1]);
        let temp = newHead;

        for (let i = values.length - 2; i >= 0; i--) {
            temp.next = new ListNode(values[i]);
            temp = temp.next;
        }

        return newHead;
    }
}
