function compare(a, b) {
    return a > b;
}

function bubbleSort(arr, comparer) {
    comparer = comparer || compare;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i; j < arr.length - 1; j++) {
            if (comparer(arr[i], arr[j])) {
                var t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
                flag = true;
            }
        }
    }
}

function quickSort(arr, l, r, comparer) {
    comparer = comparer || compare;
    if (l >= r) return;
    var mid = Math.round((l + r) / 2);
    var x = arr[mid];
    var i = l;
    var j = r;
    while (i<j) {
        while (arr[i] < x) i++;
        while (arr[j] > x) j--;
        if (i<=j) {
            var t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
            i++;
            j--;
        }
    }
    quickSort(arr, l, j, comparer);
    quickSort(arr, i, r, comparer);
}

Array.prototype.findMax = function () {
    return this.reduce(function (pre, cur) {
        return pre > cur ? pre : cur;
    });
}

Array.prototype.findMin = function () {
    return this.reduce(function (pre, cur) {
        return pre < cur ? pre : cur;
    });
}

Array.prototype.average = function () {
    var sum = this.reduce(function (pre, cur) {
        return cur + pre;
    });
    return sum / this.length;
}

Array.range = function(l,r, step) {
    var arr = [];
    var step = step || 1;
    for(var i = l; i <= r; i+=step) {
        arr.push(i);
    }
    return arr;
}

Array.rangeRight = function(r, l, step) {
    var arr = [];
    var step = step || 1;
    for(var i = r; i >= l; i-=step) {
        arr.push(i);
    }
    return arr;
}

function benchmark(comparer, arrayLength, testCount) {
    arrayLength = arrayLength || 10000;
    testCount = testCount || 10;
    function time(arr) {
        function generate() {
            var arr = [];
            for (var i = 0; i<arrayLength; i++) {
                arr.push(Math.round(Math.random() * 100));
            }
            return arr;
        }
        arr = arr || generate();
        console.log('Sorting:', arr.slice(0,10), 'Length:', arr.length);
        const arrobj = {
            arr: arr,
            arr2: arr.slice()
        };
        function timeQS() {
            var begin = process.uptime();
            quickSort(arrobj.arr, 0, arrobj.arr.length, comparer);
            var end = process.uptime();
            return Math.round((end-begin) * 1000);
        }

        function timeBS() {
            var begin = process.uptime();
            bubbleSort(arrobj.arr, comparer);
            var end = process.uptime();
            return Math.round((end-begin) * 1000);
        }
        
        return {
            quickSort: timeQS,
            bubbleSort: timeBS
        };
    }

    (function runBench() {
        function log(qs, bs) {
            function result(arr) {
                if (typeof arr === 'object') {
                    if(arr.length === 1) {
                        return {
                            time: arr[0]
                        }
                    } 
                    if (arr.length > 1) {
                        return {
                            best: arr.findMin(),
                            worst: arr.findMax(),
                            avg: arr.average()
                        }
                    }
                } else {
                    return {
                        time: arr
                    }
                }
            }
            console.log({
                QuickSort: result(qs),
                bubbleSort: result(bs)
            });
        }
        console.log('Order algorithm benchmark - Arrays include %d elements', arrayLength);
        console.log('Normal benchmark - Random array - %d times:', testCount);
        (function normalBench() {
            var timeQS = [];
            var timeBS = [];
            var func;
            for(var i = 0; i<testCount; i++) {
                func = time();
                timeQS.push(func.quickSort());
                timeBS.push(func.bubbleSort());
            }
            log(timeQS, timeBS);
        })();

        console.log('Special benchmark - Ordered array:');
        (function specialBench() {
            var func = time(Array.range(1,arrayLength));
            log(func.quickSort(), func.bubbleSort());

            func = time(Array.rangeRight(arrayLength, 1));
            log(func.quickSort(), func.bubbleSort());
        })();

    })();
}

benchmark(compare, 20000, 20);
