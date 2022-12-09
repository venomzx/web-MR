import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import GAuth from 'vue-google-oauth2'

const gauthOption = {
  clientId: '542111201265-5ro4jl8ndlvqjc1ameos7i1j8i4gils3.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true
}

// Vue.use(GAuth, gauthOption)

createApp(App).use(router,GAuth, gauthOption).mount('#app')


