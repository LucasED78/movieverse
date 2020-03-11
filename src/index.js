import Vue from 'vue/dist/vue.esm';
import App from './components/App.vue';
import './global.css';

const app = new Vue({
  el: '#root',
  template: '<App />',
  components: {
    App
  }
})

app.$mount();