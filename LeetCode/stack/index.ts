// Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
function isValid(s: string): boolean {
  const pMap = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (pMap[s[i]]) {
      if (stack[stack.length - 1] === pMap[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
