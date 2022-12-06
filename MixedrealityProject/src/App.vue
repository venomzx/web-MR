<script setup>
// import Navbar from './components/Navbar.vue';
</script>

<template>
  <div id="App">
    <!-- <Navbar /> -->
    <p>APPPPPPPP</p>

    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/Login">Login</router-link></li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
