class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const res: number[] = [];
        const count: { [key: string]: number } = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const item of nums) {
            count[item] = (count[item] || 0) + 1;
        }

        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
