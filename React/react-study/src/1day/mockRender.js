/**
 * render
 * @param {Object} obj 需要挂载的对象
 * @param {DOM} container 需要插入的容器
 * @param {Function} callBack 回调函数
 */
export default render(obj = {}, container, callBack) {
  let {
    type,
    props
  } = obj;
  // 根据type创建一个元素
  let element = document.createElement(type);
  for (const attr in props) {
    if (!props.hasOwnProperty(attr)) break;
    // 获取属性值
    let value = props[attr];

    switch (attr.toUpperCase()) {
      case 'CLASSNAME':
        element.setAttribute('class', value);
        break;
      case 'STYLE':
        for (const styleAttr in value) {
          if (value.hasOwnProperty(styleAttr)) {
            // 添加style属性直接赋值即可
            element['style'][styleAttr] = value[styleAttr];
          }
        }
        break;
      case 'CHILDREN':
        /*
         * 可能是一个值：可能是字符串也可能是一个JSX对象
         * 可能是一个数组：数组中的每一项可能是字符串也可能是JSX对象
         */
        //->首先把一个值也变为数组，这样后期统一操作数组即可
        !(value instanceof Array) ? value = [value]: null;
        value.forEach((child, index) => {
          if (typeof child == 'string') {
            const text = document.createTextNode(child);
            element.appendChild(text);
          } else {
            render(child, element);
          }
        });

        break;
      default:
        // 处理普通值
        element.setAttribute(attr, value);
        break;
    }
  }

  console.log(element);

  // 插入最终结果
  container.appendChild(element);
  // 如果存在回调函数则执行
  callBack && callBack();
}