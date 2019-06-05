<template>
  <div class="date-picker">{{value}}</div>
</template>
<script>
  export default {
    props: {
      value: {
        type: [String, Number],
        require: true
      }
    },
    data() {
      return {};
    }
  };
</script>
<style lang="stylus" scoped>
  .date-picker {
    font-size: 28px;
  }
</style>


