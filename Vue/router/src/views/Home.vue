<template>
  <div class="home">
    <h1 @click="onClick">HOME</h1>
  </div>
</template>

<script>

  export default {
    name: 'home',
    beforeRouteEnter(to, from, next) {
      console.log('beforeRouteEnter');
      next();
    },
    beforeRouteUpdate(to, from, next) {
      console.log('beforeRouteUpdate');
    },
    beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave');
      next();
    },
methods:{
  onClick(event) {
    console.log(this.$route); // 属性
    console.log(this.$router);  // 方法
    /**
     * beforeHook?
     * afterHook?
     * */
  }
}
  }
</script>
