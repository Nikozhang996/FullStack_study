import React, {Component } from 'react';
import ReactDOM, {render} from 'react-dom'
import PropTypes from 'prop-types';

class Person extends Component{
  /* 默认属性 */
  static defaultProps = {
    name: 'zjk',
    age: 20
  };
  /* 状态 */
  constructor() {
    console.log('create');
    super();
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    gender:PropTypes.oneOf(['男','女']).isRequired,
    hobby: PropTypes.arrayOf(PropTypes.string),
    pos: PropTypes.shape({
      x: PropTypes.number.isRequire,
      y: PropTypes.number.isRequire
    }),
    salary(obj, key, p) { // 自己校验;
      if (obj[key] > 5000) {
        console.log('收入真高');
      }
    }
  };
  componentWillUpdate() {
    console.log('isUpdate');
  }

  render() {
    console.log('render');
    const {name, age,gender, hobby, pos, salary} = this.props;
    return (<div>
      <p>{name}：{age}：{gender}</p>
      <ul>
        {
          hobby.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            );
          })
        }
      </ul>
      <p>{pos.x}：{pos.y}</p>
      <span>{salary}</span>
    </div>);
  }
}

let obj = {
  name: 'BIO卡洛斯',
  age: 30,
  gender: '男',
  hobby: ['code', 'photoshop', 'swimming'],
  pos: {
    x: 344,
    y: 833
  },
  salary: 8000
};
const el = (
  //可以解构的方式传入props，也可以单个传入
  <Person name={obj.name} gender={obj.gender} hobby={obj.hobby} pos={obj.pos}></Person>
);

render(el, window.root);




/*
 * React生命周期，与VUE大同小异
 * 分别为，构建时、挂载时、渲染时、更新时、完成挂载
 * shouldComponentUpdate控制组件是否实时更新
 * props属性、state状态，属性是别人传入的数据，状态是自身拥有的数据
 * */