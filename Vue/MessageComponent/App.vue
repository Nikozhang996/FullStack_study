<template>
  <div>
    <button @click="onShowMessage">点击调用</button>
    <test></test>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Message from './components/Message.js';

  Vue.use(Message);

  import Test from './components/Test';

  export default {
    name: "App",
    components: {
      Test,
      // Message,
    },
    created() {
      console.log(this.$message);
    },
    methods: {
      onShowMessage() {
        this.$message.info({
          message: 'i am info',
          duration: 3000
        })
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
