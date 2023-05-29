import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import vue3GoogleLogin from 'vue3-google-login'


loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(vue3GoogleLogin, {
    clientId: '320233672341-dfueb086tq4or815f0rrdhm6pvm5p0bm.apps.googleusercontent.com'
  })
  .mount('#app')
