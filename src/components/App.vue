<template>
  <ContentWrapper>
    <InputRow>
      <MverseRadio 
        content="movies" 
        name="mvradio" 
        identifier="movies" 
        :radioClickedHandler="() => radioClicked('movies')" />
      <MverseRadio 
        content="series" 
        name="mvradio" 
        identifier="series" 
        :radioClickedHandler="() => radioClicked('series')" />
    </InputRow>

    <CardsList :movies="movies" :cardClickedHandler="cardClicked"/>

    <PagerRow v-if="movies.length">
      <Pager 
        :pageClickedHandler="() => pageClicked('prev')" 
        v-if="page > 1" 
        content="Prev" />

      <Pager 
        :pageClickedHandler="() => pageClicked('next')" 
        content="Next" />
    </PagerRow>

    <Loading v-if="loading" />
  </ContentWrapper>
</template>

<script>
  import ContentWrapper from './ContentWrapper.vue';
  import CardsList from './Card/CardsList.vue';
  import PagerRow from './Pager/PagerRow.vue';
  import Pager from './Pager/Pager.vue';
  import Loading from './Loading/Loading.vue';
  import InputRow from './Radio/InputRow.vue';
  import MverseRadio from './Radio/MverseRadio.vue';
  import MovieService from '../services/MovieService';

  export default {
    data(){
      return {
        selected: 'movies',
        movies: [],
        page: 1,
        loading: false
      }
    },
    components: {
      ContentWrapper,
      CardsList,
      PagerRow,
      Pager,
      Loading,
      InputRow,
      MverseRadio,
    },
    methods: {
      cardClicked: function(id){
        console.log(id);
      },
      pageClicked: async function(action){
        action == 'next' ? this.page += 1 : this.page -= 1;

        this.fetchData();
      },
      radioClicked: function(type){
        this.selected = type;
        this.movies = [];
        this.fetchData();
      },
      fetchData: async function(){
        try {
          this.loading = true;
          const response = this.selected == 'movies' 
            ? await MovieService.getAllMovies(this.page) 
            : await MovieService.getAllSeries(this.page);

          this.movies = response.data.results;
          this.loading = false;  
        } catch(e){
          console.log(e);
          this.loading = false;
        }
      }
    },
    created: async function(){
      this.fetchData();
    },
  }
</script>