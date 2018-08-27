import React, {Component } from 'react';
import ReactDOM, {render} from 'react-dom'


const el = (
  <h1>BIO卡洛斯</h1>
)

render(el, window.root);




/*
 * 使用类声明，class Clock extends Component
 * 可以使用ES7的静态类型属性语法，不需要加constructor和super
 * 更新视图需要使用this.setState方法
 * 绑定事件必须写大写
 * 事件可以用箭头函数解决this问题
 * 生命周期里的this都指向当前实例
 * 最后都需要使用render函数返回HTML结构
 * */