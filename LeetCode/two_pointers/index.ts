// Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s: string): boolean {
  let leftPnt = 0;
  let rightPnt = s.length - 1;

  const isAlphanumeric = (str: string) => {
    if ((str || " ").charCodeAt(0) >= 65 && (str || " ").charCodeAt(0) <= 90)
      return true;
    if ((str || " ").charCodeAt(0) >= 97 && (str || " ").charCodeAt(0) <= 122)
      return true;
    if ((str || " ").charCodeAt(0) >= 48 && (str || " ").charCodeAt(0) <= 57)
      return true;
  };
  // "A man, a plan, a canal: Panama"

  while (leftPnt < rightPnt) {
    while (!isAlphanumeric(s[leftPnt]) && leftPnt < rightPnt) {
      leftPnt++;
    }
    while (!isAlphanumeric(s[rightPnt]) && leftPnt < rightPnt) {
      rightPnt--;
    }
    if (s[leftPnt].toLowerCase() === s[rightPnt].toLowerCase()) {
      leftPnt++;
      rightPnt--;
    } else {
      return false;
    }
  }
  return true;
}

// Two Sum II - Input Array Is Sorted

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

function twoSum(numbers: number[], target: number): number[] {
  // []
  /// diff = target - num[i]
  // [2, 7, 11, 15]
  //    l.     r

  let leftPnt = 0;
  let rightPnt = numbers.length - 1;

  while (leftPnt <= rightPnt) {
    const desiredNum = numbers[rightPnt] + numbers[leftPnt];
    if (desiredNum < target) {
      leftPnt++;
    } else if (desiredNum > target) {
      rightPnt--;
    }
    if (desiredNum === target) {
      return [leftPnt + 1, rightPnt + 1];
    }
  }
}
