const opens = ['(', '[', '{'];
const pairs = {
  '(': ')',
  '[': ']',
  '{': '}',
};

/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = [];
  for (const c of s.split('')) {
    if (opens.includes(c)) {
      stack.push(c);
    } else {
      const open = stack.pop();
      if (c !== pairs[open]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
