<template>
  <div id="Navbar">
    <div class="navbar-container">
      <div class="navbar-menu">
        <div class="navbar-item">
          <ul>
            <router-link to="/Login">Login</router-link>
            <router-link to="/QuestBoard">QuestBoard</router-link>
          </ul>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style>
.navbar-container{
  position: fixed;
  top: 0;
  left: 0;
  display:flex;
  width: 100%;
  height: 60px;
  
  background-color: crimson;
}
</style>