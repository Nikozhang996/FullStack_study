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

