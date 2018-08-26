import React from 'react';
import { render } from 'react-dom'

function Componment(props) {
  const {title, content} = props;
  console.log(title, content);

  return (
    <div>
      <h3>{title},{content}</h3>
    </div>
  );
}

let bio = 'BIO';
let carlos = '卡洛斯';





// render是有优化机制的 只更新数据有变化的
function Clock(props) {
  return <h3> 呵呵：<span>{props.time}</span></h3>
}

setInterval(() => {
  render(<Clock time={new Date().toLocaleString()}/>, window.root);
}, 1000);



/*
* 什么是组件，组件是干什么的
* 组件的目的就是1：复用，2：方便维护，3：提高工作效率
* react中组件的声明方式，函数声明，类声明。通常用类声明比较多
* 组件的特点就是首字母大写
* 函数声明组件的缺点有：没有this，没有状态，没有生命周期
* */