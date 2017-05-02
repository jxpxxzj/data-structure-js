function TreeNode(val) {
    this.data = val;
    this.lChild = null;
    this.rChild = null;
}

function BinaryTree(val) {
    if (typeof val === 'undefined') {
        this.head = null;
    } else {
        this.head = new TreeNode(val);
    }
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
        n.lChild = node;
        node.lChild = n;
    },
    insertR: function(val, node) {
        var n = new TreeNode(val);
        n.rChild = node;
        node.rChild = n;
    },
    deleteL: function(node) {
        if (node === null || node.lChild === null) {
            return null;
        }
        var n = node.lChild;
        node.lChild = null;
        return n;
    },
    deleteR: function(node) {
        if (node === null || node.rChild === null) {
            return null;
        }
        var n = node.rChild;
        node.rChild = null;
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
            console.log(node.data + ' ');
            this.inOrder(node.rChild);
        }
    },
    preOrder: function(node) {
        if (this.isEmpty) {
            var err = new Error('Tree is empty');
            throw err;
        }
        if (node !== null) {
            console.log(node.data + ' ');
            this.inOrder(node.lChild);
            this.inOrder(node.rChild);
        }
    },
    postOrder: function(node) {
        if (this.isEmpty) {
            var err = new Error('Tree is empty');
            throw err;
        }
        if (node !== null) {
            this.inOrder(node.lChild);
            this.inOrder(node.rChild);
            console.log(node.data + ' ');
        }
    }
};
Object.defineProperty(BinaryTree.prototype, 'isEmpty', {
    get: function() {
        return this.head !== null;
    }
});
