var LinkedList = require('../SequenceList/linkedList');

function Stack() {
    this.$linkedList = new LinkedList();
}

Stack.prototype = {
    push: function(element) {
        this.$linkedList.addFirst(element);
    },
    pop: function() {
        if (this.$linkedList.length !== 0) {
            var value = this.top;
            this.$linkedList.remove(this.$linkedList.first);
            return value;
        } else {
            return null;
        }
    },
    clear: function() {
        this.$linkedList.clear();
    },
    toString: function() {
        return this.$linkedList.toString();
    }
};

Object.defineProperties(Stack.prototype, {
    'length': {
        get: function() {
            return this.$linkedList.length;
        },
        enumerable: false,
        configurable: false
    },
    'top': {
        get: function() {
            if (this.length !== 0) {
                return this.$linkedList.first.value;
            } else {
                return null;
            }
        },
        enumerable: false,
        configurable: false
    }
});

module.exports = Stack;
