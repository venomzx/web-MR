<template>
  <div id="Login">
    <div class="login-container">
      <div class="login-box">
        <label class="text-login">Please login with KMITL account.</label
        ><br /><br />

        <!-- <button @click="login()" >Login with google</button> -->
        <div id="google-signin-button"></div>
        <br /><br />

        Login status: {{isLogin}}
        <!-- <button @click="Onsignup()">Sign up</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      isLogin: '',
      
    };
  },
  mounted() {
    gapi.signin2.render('google-signin-button', {
      onsuccess: this.onSignIn
    })
  },
  methods: {
    onSignIn (user) {
      const profile = user.getBasicProfile()
      console.log(profile)
    },
    async Logout() {
      const result = await this.$gAuth.signOut();
      this.isLogin = false;
      console.log("result", result);
    },
    async login() {
      const googleUser = await this.$gAuth.signIn();

      if(!googleUser) {
        return null;
      }
      console.log("googleUser", googleUser);
      // console.log("getID", googleUser.getID());
      // console.log("getBaseProfile", googleUser.getBasicProfile());
      // console.log("getAuthResponse", googleUser.getAuthResponse());
      // console.log(
      //   "getAuthResponse$G", 
      //   this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
      // );
      this.isLogin = this.$gAuth.getBasicProfile().getEmail();
    },
  },
};
</script>

<style scoped>
.text-login {
  font-size: 30px;
  color: blue;
}

.login-container {
  width: 100%;
  height: 100%;
  min-width: 1600px;
  min-height: 900px;
}

.login-box {
  width: 600px;
  height: 300px;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding-top: 300px;
  margin: auto;
}

button {
  font-size: large;
}
</style>