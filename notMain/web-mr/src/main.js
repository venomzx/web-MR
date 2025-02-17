import { createApp } from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router/router'

// Vue.use(Vuetify)

createApp(App).use(router,Vuetify).mount('#app')
