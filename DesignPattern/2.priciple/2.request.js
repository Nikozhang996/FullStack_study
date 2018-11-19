/**
 * 1.对修改关闭，对扩展开放
 * 2.单一职责
 */

const initPromise = function () {
    return new Promise((resolve, reject) => {
        const flag = Math.floor(Math.random() * 100);

        setTimeout(() => {
            if (flag % 2) {
                resolve('返回成功')
            } else {
                reject('返回失败')
            }
        }, 1000);
    });
}

// 检查状态码
function checkStatus(response) {
    if (response.code >= 200 && response.code < 300) {
        return response;
    } else {
        throw new Error('响应结果不正确');
    }
}

// 检查
function checkCode(data) {
    if (data.code == 0) {
        return data;
    } else {
        throw new Error('响应结果不正确');
    }
}
// 把响应体转成json
function parseJSON(response) {
    return response.json();
}
// {code:0,data,error}
function request(url, options) {
    /**
     * 1.判断响应的状态码是不是2XX，如果不是的话也认为是错误
     * 2.把响应体转成JSON对象
     */
    fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(checkCode)
}

request('https://dev.vipthink.net/api_admin.php/api/student/index', {
    
})








/* 
initPromise
    .then(res => {
        console.log(res);
        return res + 1;
    })
    .then(res => {
        console.log(res);
        return res + 2;
    })
    .then(res => {
        console.log(res);
        return res + 3;
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

async function fn() {
    try {
        let result = await initPromise;

        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
fn();

 */