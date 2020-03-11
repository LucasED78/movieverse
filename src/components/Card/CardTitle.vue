<template>
  <h3 class="card__title">{{ title }}</h3>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style scoped>
  .card__title {
    font-size: 1rem;
    margin: 10px 0;
  }
</style>