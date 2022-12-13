import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router/index'


import GoogleSignInPlugin from "vue3-google-signin"

// ---------------------

import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '450388980877-eb9peglpkkdn3v48vd40kfdhjd12st5a.apps.googleusercontent.com',
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: false
}

// ---------------------
const app = createApp(App)

app.use(router,GAuth, gauthOption)
app.mount('#app')


