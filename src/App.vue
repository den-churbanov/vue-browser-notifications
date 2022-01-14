<template>
  <div id="app">
    <NotificationsDescriptor></NotificationsDescriptor>
  </div>
</template>

<script>
import NotificationsDescriptor from '@/components/Notifications/NotificationsDescriptor.vue';

export default {
  name: 'App',
  components: {
    NotificationsDescriptor,
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
