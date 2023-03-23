<template>
  <v-app>
    <v-app-bar height="60">
      <v-btn router-link to="/" >Home</v-btn>
      <v-btn router-link to="/Login" >Login</v-btn>
      <v-btn router-link to="/QuestBoard">QuestBoard</v-btn>
      <v-btn router-link to="/LogEvent">Log</v-btn>
      <v-btn router-link to="/PlayerBoard">PlayerBoard</v-btn>
      <v-btn router-link to="/Party">Party</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
