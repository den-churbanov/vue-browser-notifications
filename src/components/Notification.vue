<template>
  <transition name="notification-animation">
    <div class="notification">
      <div class="notification__container">
        <span class="button button_close" @click = "onCloseNotification"/>
        <p class="notification__header">{{notifyInfo.header}}</p>
        <p class="notification__message">{{notifyInfo.message}}</p>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Notification',
  props: {
    notifyInfo: {
      type: Object,
      default() {
        return {
          header: 'Заголовок',
          message: 'Сообщение',
          showCloseButton: true,
        };
      },
    },
    onCloseNotification: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.notification{
  &__container{  }
  &__header{  }
  &__message{}
  &-fade {
    &-enter {
      opacity: 0;

      &-active {
        transition: opacity ease 700ms;
      }

      &-to {
        opacity: 1;
      }
    }

    &-leave {
      opacity: 1;

      &-active {
        transition: opacity ease 1000ms;
      }

      &-to {
        opacity: 0;
      }
    }
  }
}

</style>
