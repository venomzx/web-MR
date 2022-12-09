<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div id="App">
    <div class="bg-web">
      <Navbar />

      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.bg-web {
  width: 100%;
  height: 100%;
  left: 0;
  background-color: rgb(119, 228, 213);
}
</style>
