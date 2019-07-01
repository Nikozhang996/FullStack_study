const a = [
  {
    id: 35,
    name: "CR 部",
    type: 1,
    children: [
      {
        id: 54,
        name: "CR01",
        type: 1,
        children: [
          { id: 108, name: "高成杰", type: 2, children: [] },
          {
            id: 256,
            name: "袁庆林",
            type: 2,
            children: []
          },
          { id: 949, name: "测试CR", type: 2, children: [] }
        ]
      },
      {
        id: 73,
        name: "CR02测试",
        type: 1,
        children: [{ id: 646, name: "班主任17", type: 2, children: [] }]
      },
      { id: 330, name: "马坤银", type: 2, children: [] }
    ]
  },
  {
    id: 55,
    name: "广州CR",
    type: 1,
    children: [
      {
        id: 76,
        name: "广州CR_子级",
        type: 1,
        children: [
          { id: 88, name: "测试修改2222", type: 1, children: [] },
          {
            id: 89,
            name: "123456",
            type: 1,
            children: []
          },
          { id: 640, name: "班主任", type: 2, children: [] }
        ]
      },
      { id: 241, name: "南志燕", type: 2, children: [] },
      {
        id: 434,
        name: "邱群",
        type: 2,
        children: []
      },
      { id: 454, name: "TMK主管测试", type: 2, children: [] },
      {
        id: 554,
        name: "Tina班主任账号",
        type: 2,
        children: []
      },
      { id: 707, name: "Z班主任", type: 2, children: [] },
      {
        id: 849,
        name: "蒋一一",
        type: 2,
        children: [],
        leaf: true
      },
      { id: 850, name: "蒋二二", type: 2, children: [] },
      {
        id: 854,
        name: "XX班主任",
        type: 2,
        children: []
      },
      { id: 2313, name: "班主任负责人XX", type: 2, children: [] }
    ]
  }
];

function func(data) {
  let tempArr = [];
  // 遍历数组
  data.forEach(function(item) {
    let temp = {};
    //  遍历对象
    for (const key in item) {
      const value = item[key];
      if (key !== "children") {
        temp[key] = value;
      } else if (key === "children" && value.length > 0) {
        // 重点！！！
        temp[key] = func(value);
      }
    }

    tempArr.push(temp);
  });
  return tempArr;
}

const result = func(a);

console.log(result);
