<template>
  <p class="card__description">
    {{ limitedContent }}
  </p>
</template>

<script>
  export default {
    props: {
      content: String
    },
    computed: {
      limitedContent: function(){
        return this.content.substring(0, 50) + '...';
      }
    }
  }
</script>

<style scoped>
  .card__description {
    color: lightgrey;
    line-height: calc(14px * 1,5);
    margin: 0;
  }
</style>