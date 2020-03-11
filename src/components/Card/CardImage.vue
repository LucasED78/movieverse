<template>
  <div>
    <img class="card__img"  :src="url" />
  </div>
</template>

<script>
  export default {
    props: {
      height: {
        type: String,
        default: "50px"
      },
      url: String
    }
  }
</script>

<style>
  .card__img {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
</style>