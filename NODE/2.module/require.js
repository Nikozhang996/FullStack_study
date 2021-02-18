/*
手写一个require，文件模块都是相对路径
第一步：要解析出一个绝对路径
第二步：如果文件不存在，添加.js .json .node
第三步：上缓存里通过名字查看一下有没有加载过
第四步：创建一个模块，模块里有个this.exports的对象
第五步；把模块放到缓存中
第六步：记载这个模块，根据文件后缀加载
 */

const path = require("path");
const fs = require("fs");
const vm = require("vm");

function Module(id) {
  this.id = id;
  this.exports = {}; //模块导出的结果
}

// exports = module.exports
Module.wrapper = ["(function(exports,module,require){", "\n})"];
Module.wrap = function (script) {
  const [start, end] = Module.wrapper;
  return start + script + end;
};
Module._extensions = {
  ".js"(module) {
    const str = fs.readFileSync(module.id, "utf-8"); // 读取文件内容
    const fnStr = Module.wrap(str); // 返回的是函数字符串
    const hanlder = vm.runInThisContext(fnStr); // 让产生的函数执行
    hanlder.call(module.exports, module.exports, module, req); // 会在内部把结果赋值到exports属性上
  },
  ".json"(module) {
    const str = fs.readFileSync(module.id, "utf-8"); // 读取文件内容
    const json = JSON.parse(str);
    module.exports = json;
  },
  ".txt"(module) {
    console.log(module);
    return;
  },
};
Module._resolveFilename = function (relativePath) {
  const p = path.resolve(__dirname, relativePath); // 把转入的相对路径转为绝对路径
  const exists = fs.existsSync(p); // 如果有路径，则直接返回路径
  if (exists) {
    return p;
  }

  const keys = Object.keys(this._extensions); // 生成后缀名数组
  let r = false;
  for (const key of keys) {
    // 循环后缀，拼接好文件路径
    const realPath = path + key;
    let exists = fs.existsSync(realPath);
    if (exists) {
      r = realPath;
      break;
    }
  }
  if (!r) throw new Error("文件不存在");
  return r;
};
Module._cache = {};
Module.prototype.load = function (filename) {
  let extension = path.extname(filename); // 获取文件后缀名
  Module._extensions[extension](this);
};

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

let test = req("./async.js");
console.log(test);
