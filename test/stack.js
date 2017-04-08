var Stack = require('../src/StackAndQueue/stack');
var Assert = require('assert');

describe('Stack', function() {
    var test = new Stack();
    describe('#push()', function() {
        before(function () {
            test.push(1);
            test.push(2);
            test.push(3);
        });
        it('should contains 3 elements', function() {
            Assert.equal(test.length, 3);
        });
        it('top should be 3', function () {
            Assert.equal(test.top, 3);
        });
    });

    describe('#pop()', function () {
        var value = 0;
        before(function () {
            value = test.pop();
        });

        it('value should be 3', function() {
            Assert.equal(value, 3);
        });

        it('should contains 2 elements', function () {
            Assert.equal(test.length, 2);
        });
    });

    describe('#toString()', function() {
        it('should get right string', function() {
            Assert.equal(test.toString(), '2,1');
        });
    });

    describe('#clear()', function () {
        var value = 0;
        before(function () {
            test.clear();
            value = test.pop();
        });

        it('should contains 0 element', function () {
            Assert.equal(test.length, 0);
        });

        it('top should be null', function () {
            Assert.equal(test.top, null);
        });

        it('should pop null', function () {
            Assert.equal(value, null);
        });
    });
});