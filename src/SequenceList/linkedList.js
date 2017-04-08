function LinkedList() {
    this.$first = null;
    this.$last = null;
    this.$length = 0;
};

LinkedList.prototype = {
    addFirst: function(element) {
        var node = new $LinkedListNode(element);
        if(this.$length === 0) {
            this.$first = node;
            this.$last = node;
        } else {
            this.$first.previous = node;
            node.next = this.$first;
            this.$first = node;
        }
        this.$length++;
    },
    addLast: function(element) {
        var node = new $LinkedListNode(element);
        if(this.$length === 0) {
            this.$first = node;
            this.$last = node;
        } else {
            this.$last.next = node;
            node.previous = this.$last;
            this.$last = node;
        }
        this.$length++;
    },
    addBefore: function(elemBefore, element) {
        var node = new $LinkedListNode(element);
        node.previous = elemBefore.previous;
        node.next = elemBefore;
        elemBefore.previous.next = node;
        elemBefore.previous = node;
        this.$length++;
    },
    addAfter: function(elemAfter, element) {
        var node = new $LinkedListNode(element);
        node.previous = elemAfter;
        node.next = elemAfter.next;
        elemAfter.next.previous = node;
        elemAfter.next = node;
        this.$length++;
    },
    remove: function(element) {
        var p = this.$first;
        while(p !== null) {
            if(p === element) {
                if(p.previous !== null) {
                    p.previous.next = p.next;
                } else { // p is the first element
                    this.$first = p.next;
                }
                if(p.next !== null) {
                    p.next.previous = p.previous;
                } else { // p is the last element
                    this.$last = p.previous;
                }
                this.$length--;
                return;
            } else {
                p = p.next;
            }
        }
    },
    getElement: function(pos) {
        var p = this.$first;
        var i = 0;
        while (p != null) {
            if(i === pos) {
                return p;
            } else {
                p = p.next;
                i++;
            }
        }
        return null;
    },
    contains: function(element) {
        var p = this.$first;
        while(p !== null) {
            if(p.value == element) {
                return true;
            } else {
                p = p.next;
            }
        }
        return false;
    },
    clear: function() {
        this.$first = null;
        this.$last = null;
        this.$length = 0;
    },
    toString: function() {
        var n = [];
        var p = this.$first;
        while(p !== null) {
            n.push(p.value);
            p = p.next;
        }
        return n.join(',');
    }
};

Object.defineProperties(LinkedList.prototype, {
    'length': {
        get: function() {
            return this.$length;
        },
        configurable: false,
        enumerable: false
    },
    'first': {
        get: function() {
            return this.$first;
        },
        configurable: false,
        enumerable: false
    },
    'last': {
        get: function() {
            return this.$last;
        },
        configurable: false,
        enumerable: false
    }
});

function $LinkedListNode(element) {
    this.value = element;
    this.next = null;
    this.previous = null;
}

module.exports = LinkedList;