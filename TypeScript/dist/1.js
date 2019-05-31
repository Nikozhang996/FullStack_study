"use strict";
/**
 * 数据类型
 * @author zhang
 * @date 2018年12月17日17点36分
 */
//  基础类型
var num = 20;
var str = 'zjk';
var bol = true;
var arr = ['array'];
var arr2 = [1, 2, 3, 5];
var obj = {
    name: 'zjk',
    age: 20,
    hobbys: [],
};
var fn = function (params) {
    return params;
};
// 元组类型(类似于解构赋值)
var fullname = ['niko', 'zhang'];
// 枚举类型，事先考虑某一个变量的所有的可能的值，尽量用自然语言中的单词表示它的每一个值，比如性别、月份、星期、颜色、单位、学历
var ORDER_STATUS;
(function (ORDER_STATUS) {
    ORDER_STATUS["status_1"] = "\u672A\u4ED8\u6B3E";
    ORDER_STATUS["status_2"] = "\u5DF2\u4ED8\u6B3E";
    ORDER_STATUS["status_3"] = "\u5DF2\u5B8C\u6210";
})(ORDER_STATUS || (ORDER_STATUS = {}));
// null和undefined，null 和 undefined 是其它类型的子类型，可以赋值给其它类型
var x;
x = 1;
x = undefined;
x = null;
// volid类型，void表示没有任何类型，一般用于定义方法的时候方法没有返回值
function handler(params) {
    console.log(Math.pow(params, 2));
    // return params ** 2;
}
// never类型，never是其它类型(null undefined)的子类型，代表不会出现的值
{
    var x_1;
}
