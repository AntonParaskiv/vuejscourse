import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import store from './store'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDfoMebM60KkBiOL0pmK3CfhJKOtzQmw5w',
      authDomain: 'itc-ads-26740.firebaseapp.com',
      databaseURL: 'https://itc-ads-26740.firebaseio.com',
      projectId: 'itc-ads-26740',
      storageBucket: 'itc-ads-26740.appspot.com',
      messagingSenderId: '3392568668',
      appId: '1:3392568668:web:0f9df5af8b12078c399599'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
