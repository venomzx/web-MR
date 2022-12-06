<template>
  <div id="Login">
    <form>
        <label>Email</label>
        <input v-model="email" placeholder="Email"/>

        <label>Password</label>
        <input v-model="password" placeholder="Password"/>
        
        <button>Confirm</button>

        <button>Login in with google</button>
    </form>
  </div>
</template>

<script>
export default {
  name:"Login"
}
</script>

<style>

</style>