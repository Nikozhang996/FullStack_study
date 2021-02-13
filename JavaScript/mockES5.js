const arr = [1, 2, 3, 4, 5, 6];

const obj = {};

function mockForEach(array, callback, context) {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      callback.call(context || this, element, i, array);
    }
  }
}

function mockMap(array, callback, context) {
  let temp = [];

  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      temp.push(callback.call(context || this, element, i, array));
    }
  }

  return temp;
}

function mockEvery(array, callback, context) {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      const result = callback.call(context || this, element, i, array);

      if (result === false) {
        return false;
      }
    }
  }

  return true;
}

function mockSome(array, callback, context) {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      const result = callback.call(context || this, element, i, array);

      if (result === true) {
        return true;
      }
    }
  }

  return false;
}

function mockFilter(array, callback, context) {
  let temp = [];

  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      const result = callback.call(context || this, element, i, array);

      if (result === true) {
        temp.push(element);
      }
    }
  }

  return temp;
}

function mockReduce(array, callback, context) {
  let result = array[0];

  if (Array.isArray(array)) {
    for (let i = 1; i < array.length; i++) {
      result = callback.call(context || this, result, array[i], i, array);
    }
  }

  return result;
}

console.log(
  mockReduce(arr, (result, item, index) => {
    console.log(result, item, index);
  })
);
