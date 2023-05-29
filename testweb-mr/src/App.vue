<template>
  <v-app>

    <!-- <v-app-bar height="60" color="blue">
      <v-btn><v-icon>mdi-close</v-icon></v-btn>
      <v-btn router-link to="/" >Home</v-btn>
      <v-btn router-link to="/Login" >Login</v-btn>
      <v-btn router-link to="/QuestBoard">QuestBoard</v-btn>
      <v-btn router-link to="/LogEvent">Log</v-btn>
      <v-btn router-link to="/PlayerBoard">PlayerBoard</v-btn>
      <v-btn router-link to="/Party">Party</v-btn>
    </v-app-bar> -->
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/navigation/Navbar.vue';

export default {
  name: 'App',
  components:{
    Navbar,
  },
  created(){
    this.$store.dispatch("tryAutoLogin")
  },

  data: () => ({
    //
  }),
}
</script>
