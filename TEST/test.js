const url = 'https://www.vipthink.cn/index/ad/ad_index/adId/10821?callback=http://track.sigmob.cn/track?c%3DCiRmOWVkMmI4ZC02MGYzLTExZTktOWY0YS0wMDE2M2UwYzIzZDQiATEqC2UwMDAxYzc1ZjRhOiMKAjUyEgQ0NzMwGgUxMzM2MyADKIgnMIgnUgM3NzhaAzI4MkgBUAFafwokODUwQ0M0N0UtMkM2Qy00RTBELTlDRUItNEM1QjYzMTQ3MjkxEiQ3QzhBN0IwRi1BMEMxLTQ2OUQtOUMwMy00MDlBN0ZGMUREN0MaBDEyMzJKJDg1MENDNDdFLTJDNkMtNEUwRC05Q0VCLTRDNUI2MzE0NzI5MVIFQXBwbGViBDEyNDFqDDYxLjQ5LjUxLjE1Ng%26e%3Dactive%26p%3DOML9xjIE2GpXa5Auktzzng#'

let start = url.indexOf('?') + 1;

let result = url.slice(start, -1);

let obj  = new URL(url);

console.log(obj.searchParams);
