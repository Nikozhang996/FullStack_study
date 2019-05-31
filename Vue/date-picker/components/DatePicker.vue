<template>
  <div>{{value}}</div>
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
</style>


