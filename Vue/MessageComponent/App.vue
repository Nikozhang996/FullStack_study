<template>
  <div>
    <button @click="onShowMessage">点击调用</button>
  </div>
</template>

<script>
  // import Message from './components/Message';
  import Test from './components/Test';

  export default {
    name: "App",
    components: {
      Test,
      // Message,
    },
    methods: {
      onShowMessage() {
        console.log(this);
        this.$message.info({
          message: 'i am info',
          duration: 3000
        })
      }
    }
  }
</script>

<style scoped>
  body,html {
    background-color: #666666;
    color: #00A7AA;
  }
</style>
