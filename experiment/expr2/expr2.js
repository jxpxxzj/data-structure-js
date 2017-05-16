var Lex = require('./tokenizer');
var Transpile = require('./transpiler');
var Calculate = require('./calculator');

var rl = require('readline-sync');

var str = rl.question('Input the expression: ');

var infix = Transpile(Lex(str).map(function(t) {
    return t.token;
}));

var result = Calculate(infix);

if (Number.isFinite(+result)) {
    console.log('Prefix Expression:', infix.join(' '));
    console.log('Result:', result);
} else {
    console.log('Irregular expression or result is Infinity.');
}
