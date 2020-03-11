<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<style scoped>
  .modal {
    width: 800px;
    height: 600px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
    border-radius: 10px;
  }
</style>