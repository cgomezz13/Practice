# Decode Ways

## Problem

A message containing letters from A-Z is being encoded to numbers using the following mapping: <br />
'A' -> 1<br />
'B' -> 2<br />
...<br />
'Z' -> 26<br />
Given a non-empty string containing only digits, determine the total number of ways to decode it.

### Example

Input: "226" <br />
Output: 3 <br />
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

## Solution

```javascript
function numDecodings(s, memo = {}) {
  if (s in memo) return memo[s];
  if (s[0] === "0") return 0;
  if (s.length === 0) return 1;

  let sum = 0;
  sum += numDecodings(s.slice(1), memo);
  if (Number(s[0] + s[1]) <= 26) {
    sum += numDecodings(s.slice(2), memo);
  }

  memo[s] = sum;
  return sum;
}
```

## Explanation

The string passed in to this method is a string of numbers. When looking at every index in the string, we must consider whether the string composed of the current index and the index+1 can be decoded to something valid. We have to explore several paths for each string. Anything between 1 and 26 will be valid for decoding. <br />

This felt very recursive. The `sum` variable will collect the different ways to decode the given string.
As a base case I know that if the string begins with `0` there is no valid way to decode the string, so `return 0` for that path. At every recursive call, I sliced one character from the string and two characters if the first two characters formed a number in between 1 and 26. The other base case checks if at some point the string is empty (as a result of recursively calling the `numDecodings` function while slicing the original string). If the string is empty, I know we have found a valid way of decoding the string.

The time complexity of this approach is about O(2<sup>s</sup>), where `s` is the length of the string passed into the function. This approach was not good enough if the string passed in is long, the time limit is exceeded. Therefore, I optimized this by memoizing the function. I created a memo object that saves every substring and it's resulting value. Therefore, if the same substring is reached multiple times, there is no need to continue slicing the string until the very end to find whether it can properly be decoded. The first line checks whether the substring already exists in the memo object. If so, we can return early. If the string was not found, it is saved into the memo object before the sum returns. This improves our time complexity.
