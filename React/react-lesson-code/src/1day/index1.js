import React from 'react';
import ReactDOM from 'react-dom';

/* 
jsx == javascript + xml

jsx 有一些不一样的属性 
    class => className
    for =>htmlFor 
    style dangerouslyInnerHTML(xss 攻击)

jsx元素/react元素 用<号标识 看到{ 会认为里面装的是js代码
 */


let bio = '刘表还是很可爱的'
// let el = <h1>{bio}</h1>

const el = (
  <div>
    <h1>BIO卡洛斯</h1>
    <label htmlFor="username">用户名</label>
    <input type="text" id="username"/>
    <div style={{color: 'red'}}>hello wold</div>

    <div dangerouslySetInnerHTML={{__html: bio}}></div>
    <div>{bio}</div>
  </div>
);

/***************************************************************/

let obj = {
  name: 'ZJK',
  age: 20,
  address: '广州市海珠区'
};

function funcStr(val) {
  return val;
}

const el1 = (
  <React.Fragment>
    <div>{bio}</div>
    <div>{obj.name},{obj.age}</div>
    <div>{funcStr('可以传入函数中渲染')}</div>
    <div>{true ? 'true' : 'false'}</div>
  </React.Fragment>
);

/***************************************************************/
const arr = [1, 2, 3, 4, 5, 6];
// 添加一个li key的要求最好不要用数组的索引 一般用id  dom-diff
const el2 = (
  /*arr.map((item, index) => (
    <li key={index}>{index}</li>
  ))*/
);

ReactDOM.render(el2, window.root);

/*
* 总结：
* JSX = Javascript+XML
* 编写JSX需要注意用()和{}号
* 一些JS关键字需要替换，class=>className,for=>htmlFor
* 可以把String,Number,渲染成字符串，也可以使用function，遍历数组与对象。
* 遍历需要加key
* */

















