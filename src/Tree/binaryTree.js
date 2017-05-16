// consider remove it?
var process = require('process');

function TreeNode(val) {
    this.data = val;
    this.lChild = null;
    this.rChild = null;
}

function BinaryTree(val) {
    if (typeof val === 'undefined') {
        this.head = null;
        this.$length = 0;
    } else {
        this.head = new TreeNode(val);
        this.$length = 1;
    }
    this.$orderarr = [];
}

BinaryTree.prototype = {
    getLChild: function(node) {
        return node.lChild;
    },
    getRChild: function(node) {
        return node.rChild;
    },
    insertL: function(val, node) {
        var n = new TreeNode(val);
        node.lChild = n;
        this.$length++;
    },
    insertR: function(val, node) {
        var n = new TreeNode(val);
        node.rChild = n;
        this.$length++;
    },
    deleteL: function(node) {
        if (node === null || node.lChild === null) {
            return null;
        }
        var n = node.lChild;
        node.lChild = null;
        this.$length--;
        return n;
    },
    deleteR: function(node) {
        if (node === null || node.rChild === null) {
            return null;
        }
        var n = node.rChild;
        node.rChild = null;
        this.$length--;
        return n;
    },
    search: function(root, val) {
        var p = root;
        if (p === null) {
            return null;
        }
        if (p.data === val) {
            return p;
        }
        if (p.lChild !== null) {
            return this.search(p.lChild, val);
        }
        if (p.rChild !== null) {
            return this.search(p.rChild, val);
        }
        return null;
    },
    isLeaf: function(node) {
        return (node !== null) && (node.lChild === null) && (node.rChild === null);
    },
    inOrder: function(node) {
        if (this.isEmpty) {
            var err = new Error('Tree is empty');
            throw err;
        }
        if (node !== null) {
            this.inOrder(node.lChild);
            process.stdout.write(node.data + ' ');
            this.inOrder(node.rChild);
        }
    },
    preOrder: function(node) {
        if (this.isEmpty) {
            var err = new Error('Tree is empty');
            throw err;
        }
        if (node !== null) {
            process.stdout.write(node.data + ' ');
            this.preOrder(node.lChild);
            this.preOrder(node.rChild);
        }
    },
    postOrder: function(node) {
        if (this.isEmpty) {
            var err = new Error('Tree is empty');
            throw err;
        }
        if (node !== null) {
            this.postOrder(node.lChild);
            this.postOrder(node.rChild);
            process.stdout.write(node.data + ' ');
        }
    }
};
Object.defineProperties(BinaryTree.prototype, {
    'isEmpty': {
        get: function() {
            return this.head === null;
        }
    },
    'length': {
        get: function() {
            return this.$length;
        }
    }
});

module.exports = BinaryTree;
