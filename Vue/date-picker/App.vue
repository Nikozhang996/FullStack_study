<template>
  <div>
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
  }
};
</script>
<style lang="stylus" scoped>
body {
  color: #ffffff;
  background-color: #666666;
}
</style>


