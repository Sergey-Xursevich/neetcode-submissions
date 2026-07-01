class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const obj: { [key: string]: string[] } = {} 

        for (let word of strs) {
            const sWord = word.toLocaleLowerCase().split("").sort().join("")
            obj[sWord] = obj[sWord] ? [...obj[sWord], word] : [word]
        }

        return Object.values(obj)
    }
}
