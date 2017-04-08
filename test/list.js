var List = require('../src/SequenceList/list');
var Assert = require('assert');
describe('List', function() {
    var test = new List();

    describe('#append()', function() {
        before(function() {
            test.append(1);
            test.append(2);
            test.append(3);
        });
        it('should contain 3 elements', function() {
            Assert.equal(test.length, 3);
        });
    });

    describe('#find()', function() {
        it('should get right index', function() {
            Assert.equal(test.find(2), 1);
        });
        it('should not find the element', function() {
            Assert.equal(test.find(4), -1);
        });
    });

    describe('#contains()', function() {
        it('should contains element', function() {
            Assert.equal(test.contains(2), true);
        });
        it('should not contains element', function() {
            Assert.equal(test.contains(4), false);
        });
    });

    describe('#getElement()', function() {
        it('should get the right element', function () {
            Assert.equal(test.getElement(1), 2);
        });
        it('should get null', function() {
            Assert.equal(test.getElement(4), null);
        });
    });

    describe('#remove()', function() {
        before(function() {
            test.remove(2);
        });
        it('should contains 2 elements', function() {
            Assert.equal(test.length, 2);
        });
        it('should nod get the deleted element', function() {
            Assert.equal(test.find(2), -1);
        });
        it('should get right element', function() {
            Assert.equal(test.getElement(1), 3);
        });

        before(function() {
            test.remove(4);
        });
        it('should remove nothing', function() {
            Assert.equal(test.length, 2);
        });
    });

    describe('#insert()', function() {
        before(function() {
            test.insert(2, 1);
        });
        it('should contains 3 elements', function() {
            Assert.equal(test.length, 3);
        });
        it('should get right element', function() {
            Assert.equal(test.find(2), 1);
            Assert.equal(test.getElement(1), 2);
        });
    });

    describe('#toString()', function() {
        it('should get right string', function() {
            Assert.equal(test.toString(), '1,2,3');
        });
    });

    describe('#clear()', function() {
        before(function() {
            test.clear();
        });
        it('should contains 0 element', function() {
            Assert.equal(test.length, 0);
        });
    });
});
