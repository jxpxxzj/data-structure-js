var Lex = require('./lexer');
var Transpile = require('./transpiler');
var Calculate = require('./calculator');

var rl = require('readline-sync');

var str = rl.question('Input the expression: ');

var result = Calculate(Transpile(Lex(str).map(function(t) {
    return t.token;
})));

if (Number.isFinite(+result)) {
    console.log('Result:', result);
} else {
    console.log('Irregular expression or result is Infinity.');
}
