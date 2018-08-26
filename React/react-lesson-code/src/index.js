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


// let bio = '刘表还是很可爱的'
// let el = <h1>{bio}</h1>

const el = (
    <div>
        <h1></h1>
    </div>
)

ReactDOM.render(el, window.root)