https://gitee.com/jw-speed/a2019_architecture_a9/tree/master/24.process

## 疑点

- [ ] stdout, stdin, stderr
- [ ] child_process 中 spawn, fork, execFile, exec 区别
- [ ] stdio 参数
- [ ] detached
- [ ] spawn 如何支持独立进程

## 笔记

- 集群内部原理利用多进程，利用多个 cpu 核心分担工作
- bat, cnd, sh 都可以使用 exec，内部同样基于 spawn
- 主子进程之间通信可以用 stream，ipc 的方式
- spawn，产卵（创建一个子进程），底层方法
- fork，叉子
- execFile，执行文件
- exec
- process.stdin，当前进程监听用户的输入-0
- process.stdout，用户标准输出-1
- process.stderr，用户的错误输出-2
- http server 可以 listen 指定端口外，还能监听指定服务
