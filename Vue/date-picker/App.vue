<template>
  <div id="app">
    <date-picker :value="123"></date-picker>
  </div>
</template>

<script>
  import DatePicker from "./components/DatePicker";

  export default {
    components: {
      DatePicker
    },
    props: {},
    data() {
      return {};
    },
    methods: {
      func() {
        console.log(this);
      }
    }
  };
</script>

<style lang="stylus">
  body {
    color: #ffffff;
    background-color: #666666;
  }
</style>
