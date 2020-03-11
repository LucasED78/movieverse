<template>
  <button class="pager__button" @click="pageClickedHandler">
    {{ content }}
  </button>
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
        required: true
      },
      pageClickedHandler: Function
    }
  }
</script>

<style scoped>
  .pager__button {
    height: 50px;
    min-width: 6rem;
    border: none;
    color: white;
    background-color: #6D6EF9;
    text-transform: uppercase;
    font-weight: lighter;
    font-size: .8rem;
    letter-spacing: 2px;
    text-align: center;
    transition: box-shadow 0.5s;
    cursor: pointer;
    outline: none;
  }

  .pager__button:hover {
    box-shadow: 0px 0px 10px #6D6EF9;
  }

  .pager__button:not(:first-of-type) { margin: 0 10px; }
</style>