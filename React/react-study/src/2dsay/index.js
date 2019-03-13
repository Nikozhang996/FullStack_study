import React from 'react';
import {
  render
} from 'react-dom';
// css
import '../index.css'

let str = 'string';
let num = 666;
let bol = true;
let und = undefined;
let nul = null;
const obj = {
  name: 'zjk',
  age: 20,
  hobby: ['photo', 'music', 'game']
};
const arr = [
  {
    name: 'zjk',
    age: 20,
    hobby: ['photo', 'music', 'game']
  },
  {
    name: 'bio',
    age: 666,
    hobby: ['photo', 'music', 'game']
  }
];


render(<div>
  <h1>Hello {str}</h1>
  <p>str {str}</p>
  <p>num {num}</p>
  <p>bol {bol}</p>
  <p>und {und}</p>
  <p>nul {nul}</p>
  <p>obj {Object.keys(obj).join(',')}</p>
  <ul>
    {arr.map((item, index) => {
      return <li key={index}>
        name:{item.name},age:{item.age}
        hobby:{item.hobby.join(',')}
      </li>;
    })}
  </ul>


</div>, document.getElementById('root'), function () {
  console.log('render success');
});