import Vue from 'vue'
import VueResourse from 'vue-resource'
import App from './App.vue'

Vue.use(VueResourse);

new Vue({
  el: '#app',
  render: h => h(App),
});


