"use strict";
/**
 * 2：函数
 */
{
    function sum(x, y) {
        return x + y;
    }
    var fn_1 = function (source, subString) {
        return source == subString;
    };
    function reverse(x) {
        if (typeof x === 'number') {
            console.log(Math.pow(x, 2));
        }
        else if (typeof x === 'string') {
            console.log("hello" + x);
        }
        else {
            console.log('error');
        }
        return 'hello';
    }
    reverse(10);
}
