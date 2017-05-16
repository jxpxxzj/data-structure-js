function Token() {
    this.token = '';
    this.id = 0;
}

var keys = {
    '+': 1,
    '-': 2,
    '*': 3,
    '/': 4,
    '(': 5,
    ')': 6,
    '%': 7,
    '^': 8,
    'NUM': 9
};

function isNumber(ch) {
    return /^\d+$/.test(ch);
}

function isOperator(ch) {
    return ['+', '-', '*', '/', '%', '^', '(', ')'].indexOf(ch) !== -1;
}

function isBlank(ch) {
    return ch.trim() === '';
}

function Tokenize(expression) {
    var to = [];
    var ch = '';
    for (var i = 0; i < expression.length;) {
        var ti = new Token();
        ch = expression[i];

        if (isBlank(ch)) {
            i++;
            continue;
        }
        if (isNumber(ch) || ch === '.') {
            ti.token += ch;
            i++;
            if (i >= expression.length) {
                ti.id = keys.NUM;
                to.push(ti);
                return to;
            }
            ch = expression[i];
            while (isNumber(ch) || ch === '.') {
                ti.token += ch;
                i++;
                if (i >= expression.length) {
                    ti.id = keys.NUM;
                    to.push(ti);
                    return to;
                }
                ch = expression[i];
            }
            ti.id = keys.NUM;
            to.push(ti);
        } else if (isOperator(ch)) {
            ti.token += ch;
            ti.id = keys[ch];
            to.push(ti);
            i++;
        } else {
            throw new Error('Unexpected token: ' + ch);
        }
    }
    return to;
}

module.exports = Tokenize;
