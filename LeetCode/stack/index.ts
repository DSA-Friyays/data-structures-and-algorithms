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

// Find Minimum in Rotated Sorted Array

let leftPnt = 0;
let rightPnt = nums.length - 1;
let result = Infinity;

while (leftPnt < rightPnt) {
  const middle = Math.floor((leftPnt + rightPnt) / 2);
  result = Math.min(result, nums[middle]);
  if (nums[middle] > nums[rightPnt]) {
    leftPnt = middle + 1;
  } else {
    rightPnt = middle - 1;
  }
}
return Math.min(result, nums[leftPnt]);
