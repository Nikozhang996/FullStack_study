const arr = [{
        id: 1,
        value: '111',
        child: [{
                id: 11,
                value: '222',
            },
            {
                id: 22,
                value: '333',
            },
            {
                id: 33,
                value: '444',
            },
        ]
    },
    {
        id: 2,
        value: '222',
        child: [{
                id: 22,
                value: '2222',
            },
            {
                id: 23,
                value: '2323',
            },
            {
                id: 24,
                value: '2424',
            },
        ]
    },
    {
        id: 3,
        value: '333',
        child: [{
                id: 33,
                value: '333',
            },
            {
                id: 34,
                value: '3434',
            },
            {
                id: 35,
                value: '3535',
            },
            {
                id: 36,
                value: '3636',
                child: [{
                    id: 666,
                    value: '666',
                }]
            }
        ]
    },
];
let result = [];

function fn(arr, target) {
    arr.forEach(item => {
        for (const key in item) {
            // console.log(key);

            if (key == 'id') {
                result.push(item[key])
            }
            if (key == 'child') {
                fn(item[key]);
            }
            if (item[key] == target) {
                result.push(item[key])
            } else {
                result = []
            }
        }
    });
}

fn(arr, 666)
console.log(result);