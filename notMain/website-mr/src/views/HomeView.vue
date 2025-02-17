<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{ this.ddd }}</p>
    <p>{{ this.due }}</p>
    <button @click="formatDate(this.due)">dsada</button>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import moment from 'moment'

export default {
  name: 'HomeView',
  data: () => ({
    due:"2023/05/13"
    ,ddd:"000"
  }),
  components: {
    HelloWorld
  },
  methods:{
    formatDate(date){
      return this.ddd = moment(date).format("DD/MM/YYYY")
    }
  },
}
</script>
