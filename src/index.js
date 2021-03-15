module.exports = function check(str, bracketsConfig) {
  /*for (let key of str) {
    if (bracketsConfig[0].indexOf(key) != -1)
  }*/
  // your solution
  let kindOfBrackets = (bracket) => {
    switch (bracket) {
      case '(': return 1;
      case ')': return -1;
      case '[': return 2;
      case ']': return -2;
      case '|': return 0;
      default: 3;
    }
  }
  
  let stack = [];
  for (let key of str) {
    let kind = kindOfBrackets(key);
    if (kind > -1 && kind < 3) stack.push(kind);
    else {
      if (stack.length == 0 || kind + stack.pop() != 0) return false;
    }
  }
  if (stack.length != 0) return false;
  return true;

}
