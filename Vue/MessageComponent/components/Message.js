import Vue from 'vue';
import MessageComponent from './Message';

function getInstance() {
  const vm = new Vue({
    info: {a: 1},
    render: h => h(MessageComponent)
  }).$mount();

  return {
    add(options) {
      console.log(vm);
    }
  }
}

let instance;
const getInst = () => {
  instance = instance || getInstance();
  return instance;
};

const Message = {
  info(options) {
    // getInst().add(options);
    console.log(options);
  },
  warning(options) {

  },
  success(options) {

  },
  error(options) {

  },
};


export {
  Message
};

let _Vue;
export default {
  install(Vue, option) {
    if (!_Vue) { // 防止用户多次use
      _Vue = Vue;
      let $message = {};
      Object.keys(Message).forEach(type => {
        $message[type] = Message[type];
      });
      ;
      Vue.prototype.$message = $message
    }
  }
}
