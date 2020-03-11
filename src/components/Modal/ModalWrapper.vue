<template>
  <div class="modal__wrapper" @click="backdropClickedHandler">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      backdropClickedHandler: Function
    }
  }
</script>

<style scoped>
  .modal__wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.8);
  }
</style>