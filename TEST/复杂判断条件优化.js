const actions = new Map([
  [
    1,
    function (params) {
      console.log(params);
    },
  ],
  [
    2,
    function (params) {
      console.log(2);
    },
  ],
  [
    3,
    function (params) {
      console.log(3);
    },
  ],
  [
    4,
    function (params) {
      console.log(4);
    },
  ],
]);

let fn = actions.get(1);
// fn('调用了方法1');

const actions_1 = new Map([
  [
    "fn_1",
    (val) => {
      console.log(`fn_1:${val}`);
    },
  ],
  [
    "fn_2",
    (val) => {
      console.log(`fn_2:${val}`);
    },
  ],
  [
    "fn_3",
    (val) => {
      console.log(`fn_3:${val}`);
    },
  ],
  [
    "fn_4",
    (val) => {
      console.log(`fn_4:${val}`);
    },
  ],
  [
    "default",
    function () {
      console.log(`没有！`);
    },
  ],
]);

function createFn(fn, num) {
  return actions_1.get(`${fn}_${num}`) || actions_1.get("default");
}

let fn_1 = createFn("fn", "4");
// fn_1('fn_x测试');

const actions_2 = new Map([
  [
    {
      name: "success",
      status: 1,
    },
    function () {
      console.log(`success:1`);
    },
  ],
  [
    {
      name: "success",
      status: 2,
    },
    function () {
      console.log(`success:2`);
    },
  ],
  [
    {
      name: "error",
      status: 1,
    },
    function () {
      console.log(`error:1`);
    },
  ],
  [
    {
      name: "error",
      status: 2,
    },
    function () {
      console.log(`error:2`);
    },
  ],
]);

function createFn1(name, status) {
  return [...actions_2].filter(([key, value]) => {
    return key.name == name && key.status == status;
  });
}

// let fn_2 = createFn1('success', '1');
// console.log(...fn_2);

const actions_3 = () => {
  const functionA = () => {
    /*do sth*/
  };
  const functionB = () => {
    /*do sth*/
  };
  return new Map([
    [
      {
        identity: "guest",
        status: 1,
      },
      functionA,
    ],
    [
      {
        identity: "guest",
        status: 2,
      },
      functionA,
    ],
    [
      {
        identity: "guest",
        status: 3,
      },
      functionA,
    ],
    [
      {
        identity: "guest",
        status: 4,
      },
      functionA,
    ],
    [
      {
        identity: "guest",
        status: 5,
      },
      functionB,
    ],
    //...
  ]);
};

function createFn2(name, status) {
  return Array.from(actions_3()).find((item) => {
    return item.name == name && item.status == status;
  });
  // return [...actions_2].filter(([key, value]) => {
  //   return key.name == name && key.status == status;
  // });
}

createFn2("guest", "1");

// https://mp.weixin.qq.com/s/k-c2A-0mrLPW-ebZ-0P3Ng
