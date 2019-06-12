// 模拟一个简单的列表数据
const users = [
  {
    firstName: "Bob",
    lastName: "Doe",
    age: 37
  },
  {
    firstName: "Rita",
    lastName: "Smith",
    age: 21
  },
  {
    firstName: "Rick",
    lastName: "Fish",
    age: 28
  },
  {
    firstName: "Betty",
    lastName: "Bird",
    age: 44
  },
  {
    firstName: "Joe",
    lastName: "Grover",
    age: 22
  },
  {
    firstName: "Jill",
    lastName: "Pill",
    age: 19
  },
  {
    firstName: "Sam",
    lastName: "Smith",
    age: 22
  }
];

/* 直接使用回调函数 */
{
  const result = users
    // 首先筛选岁月在[20,30]之间
    .filter(user => user.age >= 20 && user.age <= 30)
    // 然后作姓名拼接
    .map(user => `${user.firstName}-${user.lastName}`)
    // 筛选名称长度小于10的
    .filter(name => name.length < 10);
}

/* 独立抽象函数，方便测试 */
{
  // 筛选岁月在[20,30]之间
  function isInTwenties(user) {
    return user.age >= 20 && user.age < 30;
  }

  // 姓名拼接生成一个全名
  function fullNameHandler(user) {
    return `${user.firstName}-${user.lastName}`;
  }

  // 筛选名称长度小于10的
  function isAtLeastTenChars(name) {
    return name.length < 10;
  }

  // 返回处理后的结果
  const result = users
    .filter(isInTwenties)
    .map(fullNameHandler)
    .filter(isAtLeastTenChars);
}

/* 使用reduce */
{
  // 筛选岁月在[20,30]之间
  function isInTwenties(user) {
    return user.age >= 20 && user.age < 30;
  }

  // 姓名拼接生成一个全名
  function fullNameHandler(user) {
    return `${user.firstName}-${user.lastName}`;
  }

  // 筛选名称长度小于10的
  function isAtLeastTenChars(name) {
    return name.length < 10;
  }
  const result = users.reduce((accumulator, user) => {
    // 生成所有人的全名
    const fullName = fullNameHandler(user);

    // 一次遍历所有数据，把适用项推入accumulator
    if (isInTwenties(user) && isAtLeastTenChars(fullName)) {
      accumulator.push(fullName);
    }
    //  Always return the accumulator (for the next iteration)
    return accumulator;
  }, []);

  // console.log(result);
}
/* ******************************************************************************** */
{
  const fruits = [
    {
      name: "apples",
      quantity: 2
    },
    {
      name: "bananas",
      quantity: 0
    },
    {
      name: "cherries",
      quantity: 5
    }
  ];
  const result = fruits.reduce((total, item) => {
    total += item.quantity;

    return total;
  }, 0);
}

/* ******************************************************************************** */

{
  const arr = [
    {
      price: 1,
      count: 2
    },
    {
      price: 2,
      count: 3
    },
    {
      price: 3,
      count: 5
    }
  ];

  const result = arr.reduce(
    (count, item, index, arr) => (count += item.price * item.count),
    0
  );
}

/* ******************************************************************************** */

{
  const arr = [
    {
      a: 123,
      b: 243,
      c: 43
    },
    {
      a: 123,
      b: 243,
      c: 43
    },
    {
      a: 123,
      b: 243,
      c: 43
    },
    {
      a: 123,
      b: 243,
      c: 43
    }
  ];

  function fn(...args) {
    function handleReduceDefaultValue(params) {
      let temp = params.constructor;
      args.forEach(item => (temp[item] = 0));
      return temp;
    }
    return arr.reduce((result, item, index, arr) => {
      result[args[0]] += item[args[0]];

      return result;
    }, handleReduceDefaultValue(args));
  }

  function getSumsHandler(target) {
    return arr.reduce((total, item, index, arr) => {
      console.log(item[target]);
      total += item[target];
      return total;
    }, 0);
  }

  // console.log(getSumsHandler('a'))
}

/* 将数组转化为对象 */
{
  const userList = [
    {
      id: 1,
      username: "john",
      sex: 1,
      email: "john@163.com"
    },
    {
      id: 2,
      username: "jerry",
      sex: 1,
      email: "jerry@163.com"
    },
    {
      id: 3,
      username: "nancy",
      sex: 0,
      email: ""
    }
  ];

  function func(arr, key = "id") {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
      result[userList[i][key]] = userList[i];
    }
    return result;
  }

  function keyBy(arr, key = "id") {
    return arr.reduce(function(result, item, index, arr) {
      return {
        ...result,
        [item[key]]: item
      };
    }, {});
  }

  //   console.log(keyBy(userList));
}

/* 将小数组展开成大数组 */
{
  const fileLines = [
    "Inspector Algar,Inspector Bardle,Mr. Barker,Inspector Barton",
    "Inspector Baynes,Inspector Bradstreet,Inspector Sam Brown",
    "Monsieur Dubugue,Birdy Edwards,Inspector Forbes,Inspector Forrester",
    "Inspector Gregory,Inspector Tobias Gregson,Inspector Hill",
    "Inspector Stanley Hopkins,Inspector Athelney Jones"
  ];

  function func(arr) {
    return arr.reduce((result, item, index, arr) => {
      return [...result, ...item.split(",")];
    }, []);
  }

  console.log(func(fileLines));
}
