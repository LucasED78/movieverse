<template>
  <div>
    <CardsList :movies="movies" :cardClickedHandler="cardClicked"/>
  </div>
</template>

<script>
  import CardsList from './Card/CardsList.vue';
  import api from '../services/api.js';

  export default {
    data(){
      return {
        movies: [],
        page: 1
      }
    },
    components: {
      CardsList
    },
    methods: {
      cardClicked: function(id){
        console.log(id);
      }
    },
    created: async function(){
      try {
        const response = await api().get(`/discover/movie?page=${this.page}`);

        this.movies = response.data.results;
        
        console.log(this.movies);
      } catch(e){
        console.log(e);
      }
    },
  }
</script>