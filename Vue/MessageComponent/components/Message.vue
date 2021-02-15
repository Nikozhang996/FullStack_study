<template>
  <ul class="message" v-if="messages.length">
    <li v-for="m in messages" :key="m.id">{{ m.message }}</li>
  </ul>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    this.id = 0;
  },
  methods: {
    add(options) {
      let id = this.id++;
      let layer = { ...options, id };
      this.messages.push(layer);
      layer.timer = setTimeout(() => {
        this.remove(layer);
      }, options.duration);
    },
    remove(layer) {
      clearTimeout(layer.timer);
      this.messages = this.messages.filter((item) => {
        return item.id !== layer.id;
      });
    },
  },
};
</script>
