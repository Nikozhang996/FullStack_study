/* 
手写一个require，文件模块都是相对路径
第一步：要解析出一个绝对路径
第二步：如果文件不存在，添加.js .json .node
第三步：上缓存里通过名字查看一下有没有加载过
第四步：创建一个模块，模块里有个this.exports的对象
第五步；把模块放到缓存中
第六步：记载这个模块，根据文件后缀加载
 */

const path = require('path');
const fs = require('fs');
const vm = require('vm');

function Module(id) {
    this.id = id;
    this.exports = {}; //模块导出的结果
}

// exports = module.exports
Module.wrapper = [];
Module.wrap = function (script) {};
Module._extensions = {};
Module._resolveFilename = function (relativePath) {};
Module._cache = {};
Module.prototype.load = function (filename) {

}

function req(p) {
    // 解析出绝对路径
    try {
        const filename = Module._resolveFilename(p);
        // 查询缓存中是否存在
        if (Module._cache[filename]) {
            // 第一次肯定没缓存
            return Module._cache[filename].exports;
        } else {
            const module = new Module(filename);
            module.load(filename); //加载自己
            Module._cache[filename] = module;
            return module.exports;
        }
    } catch (err) {
        console.log(err);
    }
}