<template>
  <div class="cards__list">
    <MovieCard 
    v-for="movie in movies" :movie=movie @card-clicked="cardClickedHandler" />
  </div>
</template>

<script>
  import MovieCard from './MoviesCard.vue';

  export default {
    props: {
      movies: Array,
      cardClickedHandler: Function
    },
    components: {
      MovieCard
    }
  }
</script>

<style>
  .cards__list{
    width: 60vw;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }
</style>