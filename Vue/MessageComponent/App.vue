<template>
  <div>
    <button @click="showMessage">点我弹层</button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Message from './components/Message';

  Vue.use(Message, {duration: 1000}); // 使用一个插件，我们内部需要提供一个install方法
  export default {
    name: 'parent',
    methods: {
      showMessage() {
        // console.log(this.$message);
        this.$message.info({
          message: '我很帅1',
          duration: 500
        });
      }
    }
  }
</script>
<style scoped>
  body, html {
    color: #ffffff;
    background-color: #666666;
  }
</style>
