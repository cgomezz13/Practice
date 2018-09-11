/* pairs = {'(':')', '0': '1'} */

// Iterative
function isBalanced(string, pairs) {
  let stack = [];

  for (var i = 0; i < string.length; i++) {
    if (pairs[string[i]]) {
      stack.push(string[i]);
    } else if (Object.values(pairs).includes(string[i])) {
      if (pairs[stack.pop()] !== string[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Recursive
function isBalancedRec(string, pairs, stack = []) {
  // if first character is a open brace, push to stack and call recursively on rest of string
  if (pairs[string[0]]) {
    stack.push(string[0]);
    return isBalancedRec(string.slice(1), pairs, stack); // recursive call
    // else if the first character of string is a closing brace
  } else if (Object.values(pairs).includes(string[0])) {
    // AND last of stack is matching open brace, continue with recursive call
    if (pairs[stack.pop()] === string[0]) {
      return isBalancedRec(string.slice(1), pairs, stack);
      // if last of stack is not matching closing brace, return false
    } else {
      return false;
    }
    // if not opening nor closing brace and there are still values in string,
    // continue with recursive call.
  } else if (string.length !== 0) {
    return isBalancedRec(string.slice(1), pairs, stack);
  }

  // if stack is empty, return true, else return false
  return stack.length === 0;
}
