class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const acc: number[] = []

        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                const summ = nums[i] + nums[j]

                console.log(i + "---" + j)


                if (summ === target) {
                    return acc.concat([i, j])
                }
            }
        }

        return null;
    }
}
