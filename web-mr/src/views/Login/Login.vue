<template>
  <div id="Login">
    <div class="login-container">
      <div class="login-box">
        <h3>Login with KMITL Account</h3>
        <v-btn>button</v-btn>
        <div></div>

        <button class="login-button"> Login with Google </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      buttonV: false,
    };
  },
  methods: {
    bb() {
        console.log("LOGGGGGGGGGG")
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.login-box {
  display: flex;
  width: 25%;
  height: 400px;
  background-color: aqua;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-button {
  width: 100px;
  height: 60px;
  border-radius: 12px;
}


</style>