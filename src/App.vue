<template>
  <div id="app">
    <Notifications />
  </div>
</template>

<script>
import Notifications from '@/components/Notifications.vue';

export default {
  name: 'App',
  components: {
    Notifications,
  },
};

</script>

<style lang="scss">
.color-primary {
  color: $primary;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
