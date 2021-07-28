module.exports = function check(str, bracketsConfig) {
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
        if (kind > 0 && kind < 3) stack.push(kind);
        if (kind < 0) {
            if (stack.length == 0 || (kind + stack.pop()) != 0) return false;
        }
        if (kind == 0) {
            if (stack[stack.length - 1] == kind) stack.pop();
            else stack.push(kind);
        }
    }
    if (stack.length != 0) return false;
    return true;
}
