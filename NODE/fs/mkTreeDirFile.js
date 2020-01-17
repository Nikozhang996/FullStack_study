const fsPromise = require("fs").promises;
const path = require("path");

async function mkTreeDirFile(targetPath, config) {
  try {
    await fsPromise.access(targetPath);
    const mkdirPathArr = config.map(function(item) {
      return { ...item, path: path.resolve(targetPath, item.name) };
    });
    for (const item of mkdirPathArr) {
      if (item.type === "dir" && item.children) {
        await mkTreeDirFile(item.path, item.children);
      } else if (item.type === "dir") {
        await fsPromise.mkdir(item.path);
      } else {
        await fsPromise.writeFile(path.resolve(item.name, "txt"), "123456");
      }
    }
  } catch (error) {
    await fsPromise.mkdir(targetPath);
  }

  return "success";
}

const pathMap = [
  {
    id: "c",
    name: "C",
    type: "dir",
    children: [
      {
        id: "c1",
        name: "C1",
        type: "dir"
      },
      {
        id: "c2",
        type: "file",
        name: "C2"
      },
      {
        id: "c3",
        name: "C3",
        type: "dir",
        children: [
          {
            id: "e1",
            type: "file",
            name: "E1"
          },
          {
            id: "e2",
            type: "file",
            name: "E2"
          },
          {
            id: "e3",
            type: "file",
            name: "E3"
          }
        ]
      }
    ]
  },
  {
    id: "d",
    name: "D",
    type: "dir",
    children: [
      {
        id: "d1",
        type: "file",
        name: "D1"
      },
      {
        id: "d2",
        type: "file",
        name: "D2"
      },
      {
        id: "d3",
        type: "file",
        name: "D3"
      }
    ]
  },
  {
    id: "e",
    name: "E",
    type: "dir",
    children: [
      {
        id: "e1",
        type: "file",
        name: "E1"
      },
      {
        id: "e2",
        type: "file",
        name: "E2"
      },
      {
        id: "e3",
        type: "file",
        name: "E3"
      }
    ]
  }
];
mkTreeDirFile(path.resolve(__dirname, "./test-dir"), pathMap)
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
