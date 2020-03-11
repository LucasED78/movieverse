<template>
  <ContentWrapper>
    <CardsList :movies="movies" :cardClickedHandler="cardClicked"/>
    <PagerRow v-if="movies.length">
      <Pager :pageClickedHandler="() => pageClicked('prev')" v-if="page > 1" content="Prev" />
      <Pager :pageClickedHandler="() => pageClicked('next')" content="Next" />
    </PagerRow>
  </ContentWrapper>
</template>

<script>
  import ContentWrapper from './ContentWrapper.vue';
  import CardsList from './Card/CardsList.vue';
  import PagerRow from './Pager/PagerRow.vue';
  import Pager from './Pager/Pager.vue';
  import MovieService from '../services/MovieService';

  export default {
    data(){
      return {
        movies: [],
        page: 1
      }
    },
    components: {
      ContentWrapper,
      CardsList,
      PagerRow,
      Pager,
    },
    methods: {
      cardClicked: function(id){
        console.log(id);
      },
      pageClicked: async function(action){
        action == 'next' ? this.page += 1 : this.page -= 1;

        try {
          const response = await MovieService.getAll(this.page);

          this.movies = response.data.results;
        } catch(e){
          console.log(e);
        }
      }
    },
    created: async function(){
      try {
        const response = await MovieService.getAll(this.page);

        this.movies = response.data.results;        
      } catch(e){
        console.log(e);
      }
    },
  }
</script>