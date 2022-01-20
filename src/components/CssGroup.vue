<template>
  <transition-group v-bind:name="name">
    <slot/>
  </transition-group>
</template>

<script>
export default {
  name: 'CssGroup',
  props: ['name'],
};
</script>
