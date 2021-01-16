let total = 0;

for (let i = 0; i < 1000 * 1000; i++) {
  total += i;
}

process.stdout.write(String(total));

// process.stdout.write('儿子'+process.pid+total+''); // string or buffer

// process.on('message',function (data) {
//     console.log(data);
//     process.send('我是儿子');
//     // process.nextTick(()=>{
//     //     process.exit();
//     // })
// })
