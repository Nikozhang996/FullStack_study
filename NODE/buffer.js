let buf1 = new Buffer(10);
let buf2 = new Buffer([1, 2, 3, 4, 5, 50]);
let buf3 = new Buffer('USB', 'base64');

let buf4 = Buffer.from('珠峰培训')




function fn(...args) {
    return args.reduce((prev, next) => prev + next, 0);
}



// contact
const buf1_concat = 'BIO',
    buf2_concat = '卡洛斯';
// console.log(buf1_concat.concat(buf2_concat));
Buffer.myConcat = function (list, totalLength) {
    let tempBuffer = new Buffer;



}

// isBuffer

function fn(start, end, step) {
    let startMin = start.split(':')[0],
        startSec = start.split(':')[1],
        endMin = end.split(':')[0],
        endSec = end.split(':')[1],
        stepMin = step.split(':')[0],
        stepSec = step.split(':')[1];

    let minTemp = parseInt(startMin, 10),
        secTemp = parseInt(startSec, 10);

    let tempArr = [];

    let flag = 0;

    while (parseInt(minTemp, 10) < parseInt(endMin, 10)) {
        minTemp += parseInt(stepMin, 10);
        secTemp += parseInt(stepSec, 10);
        if (secTemp > 60) {
            minTemp++
            secTemp-=60;
        }
        tempArr.push(`${minTemp}:${secTemp}`)
    }




    return tempArr;
}


console.log(fn('08:00', '22:00', '00:30'));