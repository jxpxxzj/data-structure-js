var LinkedList = require('../src/SequenceList/linkedList');
var Assert = require('assert');

describe('LinkedList', function() {
    var test = new LinkedList();
    describe('#addFirst()', function() {
        before(function () {
            test.addFirst(3);
            test.addFirst(2);
            test.addFirst(1);
        });

        it('should contains 3 element', function() {
            Assert.equal(test.length, 3);
        });

        it('first element should be 1', function() {
            Assert.equal(test.getElement(0).value, 1);
            Assert.equal(test.first.value, 1);
        });
    });

    describe('#clear()', function() {
        before(function () {
            test.clear();
        });

        it('should contains 0 element', function() {
            Assert.equal(test.length, 0);
        });
    });

    describe('#addLast()', function() {
        before(function () {
            test.addLast(1);
            test.addLast(2);
            test.addLast(3);
        });

        it('should contains 3 elements', function() {
            Assert.equal(test.length, 3);
        });

        it('last element should be 3', function() {
            Assert.equal(test.getElement(2).value, 3);
            Assert.equal(test.last.value, 3);
        });
    });

    describe('#addBefore()', function() {
        before(function() {
            var beforeNode = test.getElement(1);
            test.addBefore(beforeNode, -1);
            test.addBefore(beforeNode, -2);
            test.addBefore(beforeNode, -3);
        });

        it('should contains 6 elements', function () {
            Assert.equal(test.length, 6);
        });

        it('the second element', function() {
            Assert.equal(test.getElement(1).value, -1);
        });

        it('the forth element', function() {
            Assert.equal(test.getElement(3).value, -3);
        });
    });

    describe('#addAfter()', function() {
        before(function () {
            var afterNode = test.getElement(0);
            test.addAfter(afterNode, -3);
            test.addAfter(afterNode, -2);
            test.addAfter(afterNode, -1);
        });

        it('should contains 9 elements', function() {
            Assert.equal(test.length, 9);
        });

        it('the second element', function() {
            Assert.equal(test.getElement(1).value, -1);
        });

        it('the forth element', function() {
            Assert.equal(test.getElement(3).value, -3);
        });
    });

    describe('#remove()', function() {
        before(function () {
            var removeNodeA = test.getElement(7);
            var removeNodeB = test.first;
            var removeNodeC = test.last;
            test.remove(removeNodeA);
            test.remove(removeNodeB);
            test.remove(removeNodeC);
        });

        it('should contains 6 elements', function() {
            Assert.equal(test.length, 6);
        });

        it('should not contains removed element', function() {
            Assert.equal(test.contains(2), false);
        });

        it('the first element', function () {
            Assert.equal(test.first.value, -1);
        });

        it('the last element', function () {
            Assert.equal(test.last.value, -3);
        });

        it('the 4th element', function() {
            Assert.equal(test.getElement(3).value, -1);
        });
    });

    describe('#toString()', function() {
        it('should get right string', function() {
            Assert.equal(test.toString(), '-1,-2,-3,-1,-2,-3');
        });
    });

    describe('#getElement()', function() {
        it('should get element', function() {
            Assert.equal(test.getElement(0).value, -1);
        });

        it('should not get element', function() {
            Assert.equal(test.getElement(11), null);
        });
    });

    describe('#contains()', function() {
        it('should contains element', function() {
            Assert.equal(test.contains(-1), true);
        });
        it('should not contains element', function() {
            Assert.equal(test.contains(7), false);
        });
    });

});