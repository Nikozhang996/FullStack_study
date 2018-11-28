const fs = require('fs');

const readFilePromise = function (path, encoding, callback) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}


readFilePromise(`${__dirname}/data/name.txt`, 'utf8')
    .then(res => {
        return readFilePromise(`${__dirname}/data/${res}`, 'utf8')
    })
    .then(res => {
        return readFilePromise(`${__dirname}/data/${res}`, 'utf8')
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })