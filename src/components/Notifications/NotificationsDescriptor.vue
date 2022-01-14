<template>
  <div class = "notifications_descriptor">
    <div class="notifications_descriptor_container">
      <transition name="notify-animation">
        <h1>Хуйня</h1>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationsDescriptor',
};
</script>

<style lang="scss" scoped>
.notify-animation{
  &-enter{
    opacity: 0;
    &-active{
      transition: opacity ease 700ms;
    }
    &-to{
      opacity: 1;
    }
  }

  &-leave{
    opacity: 1;
    &-active{
      transition: opacity ease 1000ms;
    }
    &-to{
      opacity: 0;
    }
  }
}
</style>
