var Stack = require('../src/StackAndQueue/stack');
var LinkedList = require('../src/SequenceList/linkedList');
var rl = require('readline-sync');

var expression = new Stack();

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

console.log('Expression Rule:');
console.log('op -> + | - | * | / | % | ^');
console.log('Expression -> [num]');
console.log('Expression -> [op] [num] [num]');
console.log('Expression -> [op] [Expression] [Expression]');
var expr = rl.question('Input the expression: ');
var arr = expr.split(' ');
for (var i = arr.length - 1; i >= 0; i--) {
    if (Number.isNaN(+arr[i])) { // is operator
        var num2 = expression.pop();
        var num1 = expression.pop();
        var result = calc(arr[i], num2, num1);
        expression.push(result);
    }
    if (Number.isFinite(+arr[i])) { // is number
        expression.push(arr[i]);
    }
}
var result = expression.pop();
if (Number.isFinite(+result)) {
    console.log('Result: ', result);
} else {
    console.log('Irregular expression or result is Infinity.');
}
