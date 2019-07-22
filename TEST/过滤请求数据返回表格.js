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


function processRowData(arr = [], handlerMap = {}) {
  if (!Array.isArray(arr)) {
    throw Error('arr非数组，请检查')
  }
  if (!handlerMap instanceof Object) {
    throw Error('Map非对象，请检查')
  }

  return arr.map((raw, index, defaultArray) => {
    let tempRow = {};

    for (const key in raw) {
      if (raw.hasOwnProperty(key)) {
        const initialValue = raw[key];
        const filterValue = handlerMap[key] && handlerMap[key](initialValue, index, raw, defaultArray);

        tempRow[key] = filterValue || initialValue;
      }
    }

    return tempRow;
  });
}


const result = processRowData(arr, {
  a(initialValue, index, raw, defaultArray) {
    return initialValue ** 2;
  },
  b(initialValue, index, raw, defaultArray) {
    return `hello:${initialValue}`
  },
})

console.log(result);
