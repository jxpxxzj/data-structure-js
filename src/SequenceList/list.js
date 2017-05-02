function List() {
    this.$containArray = [];
    this.$length = 0;
}

List.prototype = {
    append: function(element) {
        this.$containArray[this.$length++] = element;
    },
    remove: function(element) {
        var pos = this.find(element);
        if (pos !== -1) {
            for (var i = pos + 1; i < this.$length; i++) {
                this.$containArray[i - 1] = this.$containArray[i];
            }
            this.$length--;
            this.$containArray.length --;
        }
    },
    find: function(element) {
        for (var i = 0; i < this.$length; i++) {
            if (this.$containArray[i] === element) {
                return i;
            }
        }
        return -1;
    },
    insert: function(element, pos) {
        for (var i = this.$length; i > pos; i--) {
            this.$containArray[i] = this.$containArray[i - 1];
        }
        this.$containArray[pos] = element;
        this.$length++;
    },
    toString: function() {
        return this.$containArray.join(',');
    },
    clear: function() {
        this.$containArray = [];
        this.$length = 0;
    },
    contains: function(element) {
        return this.find(element) !== -1;
    },
    getElement: function(pos) {
        return this.$containArray[pos];
    }
};

Object.defineProperty(List.prototype, 'length', {
    get: function() {
        return this.$length;
    },
    configurable: false,
    enumerable: false
});

module.exports = List;
