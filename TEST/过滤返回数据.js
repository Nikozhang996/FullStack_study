const arr = [{
  a: 1,
  b: 'zjk',
  c: 2
}, {
  a: 2,
  b: 'zjk',
  c: 2
}, {
  a: 3,
  b: 'zjk',
  c: 2
}, {
  a: 1,
  b: 'bio',
  c: 2
}, {
  a: 2,
  b: 'VLADIMIR',
  c: 2
}, ]


function fn(arr = [], handlerMap = {}) {
  if (!Array.isArray(arr)) {
    throw Error('arr非数组，请检查')
  }
  // if (handlerMap instanceof Object) {
  //   throw Error('Map非对象，请检查')
  // }

  // return arr.map((item, index) => {
  //   return {
  //     ...item,
  //     ...handlerMap1
  //   }
  // });


  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let tempRow = {};

    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        const initialValue = item[key];
        const filterValue = handlerMap[key] && handlerMap[key](initialValue, item, i);

        tempRow[key] = filterValue || initialValue;
      }
    }


    result.push(tempRow);
  }

  return result;
}


const result = fn(arr, {
  a(value, row, index) {
    return value ** 2;
  },
  b(value, row, index) {
    return `hello:${value}`
  },
  c(value, row, index) {
    console.log(index);
  }
})

console.log(result);
