// https://leetcode.com/problems/decode-ways/

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

// memo object for optimization
