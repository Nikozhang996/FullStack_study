const data = [
  {
    id: 39,
    title: "广州教学部",
    children: [
      { id: 45, title: "教务组", children: null },
      {
        id: 120,
        title: "师训处",
        children: [
          { id: 46, title: "师训处", children: null },
          {
            id: 56,
            title: "兼职组",
            children: [
              { id: 229, title: "兼职C00组", children: null },
              { id: 230, title: "兼职C01组", children: null },
              { id: 231, title: "兼职C02组", children: null },
              { id: 232, title: "兼职C03组", children: null },
              { id: 233, title: "兼职C04组", children: null },
              { id: 234, title: "兼职C05组", children: null },
              { id: 235, title: "兼职C06组", children: null },
              { id: 236, title: "兼职C07组", children: null },
              { id: 237, title: "兼职C08组", children: null },
              { id: 278, title: "兼职C09组", children: null }
            ]
          },
          { id: 344, title: "兼职demo管理组", children: null }
        ]
      }
    ]
  }
];

function handler(id, data) {
  function func(targetId, prevData = [], sourceData = []) {
    for (let i = 0; i < sourceData.length; i++) {
      const item = sourceData[i];
      const { id, title, children } = item;
      if (id === targetId) {
        return [...prevData, { id, title }];
      }
      if (Array.isArray(children) && children.length > 0) {
        prevData = [...prevData, { id, title }];
        return func(targetId, prevData, children);
      }
    }

    return [];
  }
  return func(id, [], data);
}

// console.log(handler(45, data));
console.log(handler(405, data));
