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

let result = arr.map((item, index) => {
  return {
    ...item,
    teachers: list[index]
  }
});

// console.log(result);