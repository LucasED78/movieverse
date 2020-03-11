<template>
  <div class="card__wrapper" @click="$emit('card-clicked', movie.id)">
    <Card>
      <CardImage :url="fullImgUrl" height="100px" />
      <div class="card__content">
        <CardTitle :title=movie.title />
        <CardDescription :content="movie.overview" />
      </div>
    </Card>
  </div>
</template>

<script>
  import Card from './Card.vue';
  import CardTitle from './CardTitle.vue';
  import CardDescription from './CardDescription.vue';
  import CardImage from './CardImage.vue';

  export default {
    props: {
      movie: Object
    },
    components: {
      Card,
      CardTitle,
      CardDescription,
      CardImage
    },
    computed: {
      fullImgUrl(){
        return `https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.movie.poster_path}`
      }
    }
  }
</script>

<style>
  .card__wrapper {
    width: 250px;
    margin: 10px;
  }

  .card__content {
    padding: 10px;
  }
</style>