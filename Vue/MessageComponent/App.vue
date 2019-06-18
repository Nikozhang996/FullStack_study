<template>
  <div>
    <button @click="onShowMessage">点击调用</button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Message from './components/Message.js';

  Vue.use(Message,{a: 1, b: 2});

  export default {
    name: "App",
    created() {
      console.log(this.$message);
    },
    methods: {
      onShowMessage() {
        // this.$message.info({
        //   message: 'i am info',
        //   duration: 3000
        // })
        console.log(this.$message);
      }
    }
  }
</script>

<style scope>
  body, html {
    background-color: #666666;
    color: #00A7AA;
  }
</style>
