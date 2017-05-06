var Stack = require('../../src/StackAndQueue/stack');

function calc(op, num1, num2) {
    switch (op) {
    case '+':
        return (+num1) + (+num2);
    case '-':
        return (+num1) - (+num2);
    case '*':
        return (+num1) * (+num2);
    case '/':
        return (+num1) / (+num2);
    case '^':
        return Math.pow((+num1), (+num2));
    case '%':
        return (+num1) % (+num2);
    default:
        break;
    }
}

function Calculate(perfix) {
    var expression = new Stack();
    for (var i = perfix.length - 1; i >= 0; i--) {
        if (Number.isNaN(+perfix[i])) { // is operator
            var num2 = expression.pop();
            var num1 = expression.pop();
            var result = calc(perfix[i], num2, num1);
            expression.push(result);
        }
        if (Number.isFinite(+perfix[i])) { // is number
            expression.push(perfix[i]);
        }
    }
    return expression.pop();
}

module.exports = Calculate;
