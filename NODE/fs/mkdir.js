const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

const pathUrl = "c/d/e/f/g";
const pathMap = [
  {
    id: "c",
    name: "C",
    children: [
      {
        id: "c1",
        name: "C1"
      },
      {
        id: "c2",
        name: "C2"
      },
      {
        id: "c3",
        name: "C3",
        children: [
          {
            id: "e1",
            name: "E1"
          },
          {
            id: "e2",
            name: "E2"
          },
          {
            id: "e3",
            name: "E3"
          }
        ]
      }
    ]
  },
  {
    id: "d",
    name: "D",
    children: [
      {
        id: "d1",
        name: "D1"
      },
      {
        id: "d2",
        name: "D2"
      },
      {
        id: "d3",
        name: "D3"
      }
    ]
  },
  {
    id: "e",
    name: "E",
    children: [
      {
        id: "e1",
        name: "E1"
      },
      {
        id: "e2",
        name: "E2"
      },
      {
        id: "e3",
        name: "E3"
      }
    ]
  }
];

// 解析树级路径
function parsePath(data) {
  console.log(data);
}

parsePath(pathMap);

// 同步创建
function mkdirSync(pathUrl) {
  const pathArr = pathUrl.split("/");
  for (let i = 0; i < pathArr.length; i++) {
    const currentPath = pathArr.slice(0, i + 1).join("/"),
      absPath = path.resolve(__dirname, currentPath);

    try {
      fs.accessSync(absPath);
    } catch (error) {
      fs.mkdirSync(absPath);
    }
  }
}
// 异步创建
function mkdir(pathUrl, callback) {
  // 分割路径
  const pathArr = pathUrl.split("/");

  // 递归创建指定目录文件夹
  function next(index) {
    // 递归先确定终止条件
    if (index === pathArr.length) return callback();
    // 获取当前路径
    const currentPath = pathArr.slice(0, ++index).join("/");
    const absPath = path.resolve(__dirname, currentPath);

    fs.access(absPath, (err, data) => {
      // 如果文件不存在，则在当前路径创建该目录，如果存在，创建下一层
      if (err) {
        fs.mkdir(absPath, function() {
          next(index); // 当前创建完毕后 创建下一次即可
        });
      } else {
        next(index);
      }
    });
  }

  next(0);
}

// mkdir(pathUrl, function() {
//   console.log("mkdir success");
// });
