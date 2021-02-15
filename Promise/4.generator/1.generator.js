const likeArray = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
  [Symbol.iterator]() {
    console.log(this);
    let flag = false;
    let index = 0;
    let that = this;
    return {
      next() {
        return {
          done: index === that.length,
          value: that[index++],
        };
      },
    };
  },
};

/**
 * * 表示这个函数是个生成器函数，一般配合yield使用
 */
const likeArray2 = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
  [Symbol.iterator]: function* () {
    while (index !== this.length) {
      yield this[index++];
    }
  },
};

function* gen(value) {
  yield value++;
  yield value++;
  yield value++;
  yield value++;
}

const it = gen(1);

let flag = false;

do {
  let { value, done } = it.next();
  flag = done;
  console.log(value);
} while (!flag);
