const fs = require('fs');

/* 
 * 观察者模式、发布订阅两者有本质不同
 * 先把需要订阅的内容保存到队列里，当发布时让队列中的任务依次执行即可
 */

let school = {};

let Dep = {
    arr: [],
    on(fn) {
        this.arr.push(fn);
    },
    emit() {
        if (Object.keys(school).length === 3) {
            this.arr.forEach(fn => fn());
        }
    }
}

// 订阅
Dep.on(function () {
    console.log('代码执行前');
});
Dep.on(function () {
    console.log(school);
});
Dep.on(function () {
    console.log('代码执行结束了');
});

// 每次执行完发布事件
fs.readFile(`${__dirname}/data/name.txt`, 'utf8', function (err, data) {
    school.name = data;
    Dep.emit();
});
fs.readFile(`${__dirname}/data/age.txt`, 'utf8', function (err, data) {
    school.age = data;
    Dep.emit();
});
fs.readFile(`${__dirname}/data/address.txt`, 'utf8', function (err, data) {
    school.address = data;
    Dep.emit();
});