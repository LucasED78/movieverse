<template>
  <article class="card">
    <slot></slot>
  </article>
</template>

<script>
  export default {
    props: {
      title: String,
    }
  }
</script>

<style scoped>
  .card {
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 0px grey;
    transition: box-shadow 0.5s;
    cursor: pointer;
  }

  .card:hover {
    box-shadow: 0px 0px 8px 0px grey;
  }
</style>