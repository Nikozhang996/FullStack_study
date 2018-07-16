/* 
__filename：文件路径
__dirname：文件目录
 */

process.nextTick(function () {
    console.log('nextTick');
}) 

setImmediate(function () {
    console.log('setImmediate');    
})

setTimeout(function () {
    console.log('setTimeout');        
})