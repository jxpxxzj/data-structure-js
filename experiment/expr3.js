var BinaryTree = require('../src/Tree/binaryTree');
var rl = require('readline-sync');

var root = rl.question('Root element: ');
var elements = rl.question('Input other 10 elements: ').split(' ');

// It's a bit hack...
/* Tree Structure
            a(root)
      b           c
  f      g      d   e
h     i           j    k

inOrder:
h f b i g a d j c e k
7 5 1 8 6 0 3 9 2 4 10   
*/

// Tree creation
var tree = new BinaryTree(root);

var a = tree.head;

tree.insertL(elements[0], a); // b
tree.insertR(elements[1], a); // c
var b = tree.getLChild(a);
var c = tree.getRChild(a);

tree.insertL(elements[2], c); // d
tree.insertR(elements[3], c); // e
var d = tree.getLChild(c);
var e = tree.getRChild(c);

tree.insertL(elements[4], b); // f
tree.insertR(elements[5], b); // g
var f = tree.getLChild(b);
var g = tree.getRChild(b);

tree.insertL(elements[6], f); // h
tree.insertL(elements[7], g); // i
tree.insertR(elements[8], d); // j
tree.insertR(elements[9], e); // k

console.log('PreOrder:');
tree.preOrder(a);
console.log('\nInOrder:');
tree.inOrder(a);
console.log('\nPostOrder:');
tree.postOrder(a);

(function () {
    // travel
    var stack = [a];
    var travelresult = []
    // check
    var in1 = 0;
    var in2 = 0;
    var leaf = 0;
    var length = 0;
    var min = Number.MAX_VALUE;
    var max = Number.MIN_VALUE;
    function check(node) {
        if(+node.data > max) {
            max = node.data;
        }
        if(+node.data < min) {
            min = node.data;
        }
        if(tree.isLeaf(node)) {
            leaf++;
            return;
        }
        if((node.lChild !== null) && (node.rChild !== null)) {
            in2++;
            return;
        }
        in1++;
    }
    (function travel() {
        while(stack.length !== 0) {
            var node = stack.pop()
            travelresult[node.data] = true;
            length++;
            check(node);
            if(!travelresult[node.data]) {
                stack.push(node);
            }
            if(node.lChild !== null && !travelresult[node.lChild.data]) {
                stack.push(node.lChild);
            }
            if(node.rChild !== null && !travelresult[node.rChild.data]) {
                stack.push(node.rChild);
            }
        }
    })(a);
    var o = {
        'Length': length,
        'In1': in1,
        'In2': in2,
        'Leaf': leaf,
        'Min': +min,
        'Max': +max
    };
    console.log('\n', o);
})();

module.exports = tree;