import Vue from 'vue/dist/vue.esm';
import Test from './components/Test.vue';

const app = new Vue({
  el: '#root',
  template: '<Test/>',
  components: {
    Test: Test
  }
})

app.$mount();