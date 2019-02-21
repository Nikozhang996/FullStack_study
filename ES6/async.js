// 原始数据
const arr = [{
    name: 'zjk',
    age: 20
  },
  {
    name: 'bio',
    age: 25
  },
  {
    name: 'vladimir',
    age: 30
  }
];
// 需插入数组
const list = [
  [{
      id: 1,
      value: 'teacher1'
    },
    {
      id: 2,
      value: 'teacher2'
    },
    {
      id: 3,
      value: 'teacher3'
    }
  ],
  [{
      id: 1,
      value: 'teacher1'
    },
    {
      id: 2,
      value: 'teacher2'
    },
    {
      id: 3,
      value: 'teacher3'
    }
  ],
  [{
      id: 1,
      value: 'teacher1'
    },
    {
      id: 2,
      value: 'teacher2'
    },
    {
      id: 3,
      value: 'teacher3'
    }
  ],
];
// 处理结果
let result = arr.map((item, index) => {
  return {
    ...item,
    teachers: list[index]
  }
});

// console.log(result);
const fs = require('fs');

const readFilePromise = function (path, encoding, callback) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

const urls = ['1.txt', '3.txt', '2.txt']
async function getSequenceData(urls) {
  let temp = [];
  // 并发读取异步数据
  const responsePromises = urls.map( url => {
    // const response =  readFilePromise(`${__dirname}/${url}`, 'utf-8');
    // return response;
    return readFilePromise(`${__dirname}/${url}`, 'utf-8')
  });
  // 按次序输出
  for (const item of responsePromises) {
    console.log(responsePromises);
    temp.push(await item);
  }
  return temp;
}

getSequenceData(urls).then(res => {
  console.log(res);
})
