class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        const openChars = ['(', '{', '[']
        const closeChars = [')', '}', ']']

        for (let str of s) {
            if (openChars.includes(str)) {
                stack.push(str)
            }

            if (closeChars.includes(str)) {
                switch (str) {
                     case ')':
                       if (stack[stack.length - 1] === '(') {
                        stack.pop()
                        break
                       } else {
                        return false
                       }

                     case '}':
                       if (stack[stack.length - 1] === '{') {
                        stack.pop()
                        break
                       } else {
                        return false
                       }
                    
                     case ']':
                       if (stack[stack.length - 1] === '[') {
                        stack.pop()
                        break
                       } else {
                        return false
                       }
                }                    
            }
        }

        return stack.length === 0
    }
}


