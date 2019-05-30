<template>
  <div id="app">
    <functional-component :type="3" :time="(new Date()).toDateString()">
      <p slot="header">header</p>
      <p>default slot</p>
      <p slot="footer">footer</p>
    </functional-component>
  </div>
</template>

<script>
  import FunctionalComponent from './components/FunctionalComponent';

  export default {
    name: 'app',
    components: {
      FunctionalComponent
    }
  }
</script>

<style lang="scss">
  body {
    color: #ffffff;
    background-color: #666666;
  }
</style>
