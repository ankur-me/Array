function decodeString(s) {
    let stack = [];
    let currentString = "";
    let currentNum = 0;

    for (let char of s) {
        if (!isNaN(char)) {
            // If the character is a number, update the current number
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            // Push the current number and string onto the stack
            stack.push(currentString);
            stack.push(currentNum);
            currentString = "";
            currentNum = 0;
        } else if (char === ']') {
            // Pop the number and previous string from the stack
            let num = stack.pop();
            let prevString = stack.pop();
            currentString = prevString + currentString.repeat(num);
        } else {
            // Append the character to the current string
            currentString += char;
        }
    }

    return currentString;
}

// Example Usage
// console.log(decodeString("3[a]2[bc]")); // Output: "aaabcbc"
// console.log(decodeString("3[a2[c]]"));  // Output: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"

function evalRPN(tokens) {
    debugger;
    const stack = [];

    for (let token of tokens) {
        if (!isNaN(token)) {
            // If the token is a number, push it onto the stack
            stack.push(Number(token));
        } else {
            // If the token is an operator, pop two numbers from the stack
            const b = stack.pop();
            const a = stack.pop();
            let result;

            // Perform the operation and push the result back onto the stack
            switch (token) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    // Ensure the division result is truncated towards zero
                    result = Math.trunc(a / b);
                    break;
                default:
                    throw new Error("Invalid operator");
            }
            stack.push(result);
        }
    }

    // The final result will be the only element left in the stack
    return stack.pop();
}

// Example Usage
console.log(evalRPN(["2", "1", "+", "3", "*"])); // Output: 9
// console.log(evalRPN(["4", "13", "5", "/", "+"])); // Output: 6
// console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // Output: 22

