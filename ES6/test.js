const arr = [
  {
    id: 1,
    value: "111",
    child: [
      {
        id: 11,
        value: "222",
      },
      {
        id: 22,
        value: "333",
      },
      {
        id: 33,
        value: "444",
      },
    ],
  },
  {
    id: 2,
    value: "222",
    child: [
      {
        id: 22,
        value: "2222",
      },
      {
        id: 23,
        value: "2323",
      },
      {
        id: 24,
        value: "2424",
      },
    ],
  },
  {
    id: 3,
    value: "333",
    child: [
      {
        id: 33,
        value: "333",
      },
      {
        id: 34,
        value: "3434",
      },
      {
        id: 35,
        value: "3535",
      },
      {
        id: 36,
        value: "3636",
        child: [
          {
            id: 666,
            value: "666",
          },
        ],
      },
    ],
  },
];
let result = [];

function fn(arr, target) {
  arr.length > 0 &&
    arr.forEach((item) => {
      for (const key in item) {
        // console.log(key);

        if (key == "id") {
          result.push(item[key]);
        }
        if (key == "child") {
          fn(item[key]);
        }
        if (item[key] == target) {
          result.push(item[key]);
        } else {
          result = [];
        }
      }
    });
}

// fn(arr, 666)
// console.log(result);

function func(array = []) {
  let positive = [];
  let zero = [];
  let negative = [];

  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    const item = array[i];

    if (item === 0) {
      zero.push(item);
    } else if (item > 0) {
      positive.push(item);
    } else if (item < 0) {
      negative.push(item);
    }
  }

  const p = (positive.length / arrayLength).toFixed(6);
  const z = (zero.length / arrayLength).toFixed(6);
  const n = (negative.length / arrayLength).toFixed(6);

  console.log(p);
  console.log(n);
  console.log(z);
}

// func([1, 1, 0, -1, -1]);

function plusMinus(arr) {
  var length = arr.length;
  var a = (arr.filter((item) => item > 0).length / length).toFixed(6);
  var b = (arr.filter((item) => item < 0).length / length).toFixed(6);
  var c = (arr.filter((item) => item === 0).length / length).toFixed(6);
  console.log(a);
  console.log(b);
  console.log(c);
}

// plusMinus([-4, 3, -9, 0, 4, 1]);

function findMedian(arr) {
  arr.sort();

  if (arr.length & (2 === 0)) {
    const value = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    console.log(value);
    return value;
  } else {
    const value = arr[Math.floor(arr.length / 2)];
    console.log(value);
    return value;
  }
}
findMedian([0, 1, 2, 4, 6, 5, 3]);
// findMedian([0, 1, 2, 4, 6, 5, 3]);
