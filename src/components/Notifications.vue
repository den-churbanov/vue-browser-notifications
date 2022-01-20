<template>
  <div class="notifications__group">
    <component
      :is="componentName"
      :name="animationName"
      @after-leave="clean"
    >

    </component>
  </div>
</template>

<script>
import CssGroup from '@/components/CssGroup.vue';
import { defaults } from '@/defaults';
import { events } from '@/components/events';

/**
 * @typedef INotifyInfo
 * @property {number} id
 * @property {string} title
 * @property {string} message
 * @property {number} timerDuration - in seconds
 * @property {boolean} pauseOnHover
 * */
export default {
  name: 'Notifications',
  components: {
    CssGroup,
  },
  props: {
    group: {
      type: String,
      default: 'notify-group',
    },
    width: {
      type: [Number, String],
      default: 300,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    position: {
      type: [String, Array],
      default: () => defaults.position,
    },
    animationType: {
      type: String,
      default: defaults.cssAnimation,
      validator(value) {
        return defaults.AnimationType.values().includes(value);
      },
    },
    animationName: {
      type: String,
      default: defaults.cssAnimation,
    },
    pauseOnHover: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      list: [],
      timer: null,
    };
  },
  mounted() {
    events.$on('show', this.showNotify);
    events.$on('close', this.closeNotify);
  },
  computed: {
    componentName() {
      return 'CssGroup';
    },
  },
  methods: {
    showNotify() {

    },
    closeNotify() {

    },
    destroy() {

    },
  },
};
</script>

<style lang="scss" scoped>

</style>
