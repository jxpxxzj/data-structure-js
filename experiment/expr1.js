var List = require('../src/SequenceList/list');
var rl = require('readline-sync');

function elem(n, p) {
    this.num = n;
    this.pow = p;
}
elem.prototype.toString = function() {
    var n = '';
    if (this.num === 1) {
        n = '';
    } else if (this.num === -1) {
        n = '-';
    } else {
        n = this.num;
    }
    return n + 'x^' + this.pow;
};

function Expression() {
    List.call(this);
}
Expression.prototype = new List();
Expression.prototype.toString = function() {
    var str = '';
    this.sort();
    for (var i = 0; i < this.length; i++) {
        if (this.getElement(i).num === 0) continue;
        if (this.getElement(i).num < 0) {
            str += this.getElement(i).toString();
        } else {
            if (i !== 0) {
                str += '+';
            }
            str += this.getElement(i).toString();
        }
    }
    return str;
};
Expression.prototype.sort = function() {
    this.$containArray.sort(function(a, b) {
        return a.pow - b.pow;
    });
};
Expression.prototype.plus = function(expr) {
    var result = new Expression();
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < expr.length; j++) {
            var elemi = this.getElement(i);
            var elemj = expr.getElement(j);
            if (elemi.pow === elemj.pow) {
                if ((elemi.num + elemj.num) !== 0) {
                    result.append(new elem(elemi.num + elemj.num, elemi.pow));
                }
                elemi.num = 0;
                elemj.num = 0;
            }
        }
    }
    for (var i = 0; i < this.length; i++) {
        if (this.getElement(i).num !== 0) {
            result.append(this.getElement(i));
        }
    }
    for (var i = 0; i < expr.length; i++) {
        if (expr.getElement(i).num !== 0) {
            result.append(expr.getElement(i));
        }
    }
    result.sort();
    return result;
};

var exp1 = new Expression();
var exp2 = new Expression();

var cnt1 = rl.question('input the element count of the first expression [count]: ');
for (var i = 0; i < cnt1; i++) {
    var str = rl.question('input element [number] [power]: ');
    var num = str.split(' ')[0];
    var pow = str.split(' ')[1];
    var s = new elem(+num, +pow);
    exp1.append(s);
}

var cnt2 = rl.question('input the element count of the second expression [count]: ');
for (var i = 0; i < cnt2; i++) {
    var str = rl.question('input element [number] [power]: ');
    var num = str.split(' ')[0];
    var pow = str.split(' ')[1];
    var s = new elem(+num, +pow);
    exp2.append(s);
}

console.log('first expression:', exp1.toString());
console.log('second expression:', exp2.toString());
console.log('result:', exp1.plus(exp2).toString());
