<template>
  <div class="App">
    <!-- bar -->
    <!-- <Sidebar /> -->
    <Navbar />
    
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
import Sidebar from './components/Navbar/Sidebar.vue'
export default {
  name: 'App',
  components: {
    // Sidebar,
     Navbar
  }
}
</script>

<style >

</style>
