<template>
  <div class="home">
    <h1>HOME</h1>
  </div>
</template>

<script>

  export default {
    name: 'home',
    beforeRouteEnter(to, from, next) {
      console.log('beforeRouteEnter');
    },
    beforeRouteUpdate(to, from, next) {
      console.log('beforeRouteUpdate');
    },
    beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave');
    }

  }
</script>
