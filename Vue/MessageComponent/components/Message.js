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
    getInst().add(options);
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

let _vue;
export default {
  install(Vue, option) {
    if (!_vue) {
      _vue = Vue;
      let $message = {};
      Object.keys(Message).forEach(type => {
        $message[type] = Message[type];
      });
      Vue.prototype.$message = $message;
    }
  }
}
