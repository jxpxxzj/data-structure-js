var Stack = require('../../src/StackAndQueue/stack');

var opers = {
    '(': 100,
    ')': 900,
    '+': 100,
    '-': 100,
    '*': 200,
    '/': 200,
    '%': 200,
    '^': 200
};

function isOperator(op) {
    return opers[op] !== undefined;
}

function Transpile(infix) {
    var stk = new Stack(); // operator stack
    var pfx = [];
    for (var i = infix.length - 1; i >= 0; i--) { // scan from right to left
        if (!isOperator(infix[i])) { // is number
            pfx.push(infix[i]);
        } else { // is operator
            if (infix[i] === ')') { // is right bracket
                stk.push(infix[i]);
            } else if (infix[i] === '(') { // is left bracket
                // pop operator until right bracket
                while (stk.length !== 0) {
                    if (stk.top === ')') {
                        stk.pop();
                        break;
                    } else {
                        pfx.push(stk.pop());
                    }
                }
            } else { // is other operator
                while ((stk.length !== 0) && (stk.top !== ')') && (opers[stk.top] > opers[infix[i]])) { // prefer higher operator
                    pfx.push(stk.pop());
                }
                // push current opeartor
                stk.push(infix[i]);
            }
        }
    }
    while (stk.length !== 0) {
        pfx.push(stk.pop());
    }
    pfx.reverse();
    return pfx;
}

module.exports = Transpile;
