import Vue from "vue";
import MessageComponent from "./Message.vue";
// 获取当前组件的实例
let getInstance = () => {
  let vm = new Vue({
    info: {a: 1},
    render: h => h(MessageComponent)
  }).$mount(); // 会在内存中进行挂载
  // 获取他的儿子，就一个儿子
  let component = vm.$children[0];
  return {
    add(options) {
      component.add(options);
      // console.log(component);
    }
  };
  // vm.$el
};
// 单例模式
let instance;
let getInst = () => {
  // 返回唯一的实例
  instance = instance || getInstance();
  return instance;
};
const Message = {
  info(options) {
    getInst().add(options);
  },
  warn(options) {
    console.log(options);
  },
  success(options) {
    console.log(options);
  },
  error(options) {
    console.log(options);
  }
};
export {Message};
let _Vue;
export default {
  // 写插件的原理
  install(Vue, options) {
    // options 选项代表的是 use的第二个参数
    if (!_Vue) {
      // 防止用户多次use
      _Vue = Vue;
      let $message = {};
      Object.keys(Message).forEach(type => {
        $message[type] = Message[type];
      });
      Vue.prototype.$message = $message;
    }
    // vue 遍历组件的特点
    Vue.mixin({
      beforeCreate() {
        // 在所有的组件中都增加了这个方法
        if (this.$options.info) {
          // console.log(this.$options.name);
          this._info = this.$options.info;
        } else {
          console.log(this.$options.name);
          this._info = this.$parent && this.$parent._info;
        }
      }
    });
  }
};
