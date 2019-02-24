/**
 * createElement
 * @param {String} type 
 * @param {Object} props 
 * @param {Array|String} children 
 */
function createElement(type, props = {}, children) {
  let ref, key;
  if ('ref' in props) {
    ref = props['ref'];
    props['ref'] = undefined;
  }
  if ('key' in props) {
    key = props['key'];
    props['key'] = undefined;
  }
  return {
    type,
    props: {
      ...props,
      children: children.length <= 1 ? (children[0] || '') : children
    },
    ref,
    key
  }
}



/**
 * <div id='box' class='box'>
  <h1 id='title'>Hello</h1>
  <div class='content'>
    world
    <span>666666666</span>
  </div>
</div>

React.createElement(
  'div', {
    id: 'box',
    'class': 'box'
  },
  React.createElement(
    'h1', {
      id: 'title'
    },
    'Hello'
  ),
  React.createElement(
    'div', {
      'class': 'content'
    },
    'world',
    React.createElement(
      'span',
      null,
      '666666666'
    )
  )
);
 */