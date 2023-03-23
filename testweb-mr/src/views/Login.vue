<template>
  <v-main>
    <v-container justify="center">
      <v-row justify="center">
        <v-form>
          <v-row height="100">
            <p>Login with KMITL Email</p>
          </v-row>
          <v-row>

            <!-- <GoogleLogin :callback="callback"/> -->
            <v-btn color="red" @click="login">Login sus</v-btn>

            <v-btn color="blue" @click="Signout">Signout</v-btn>
          </v-row>
        </v-form>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
// const callback = (response) => {
//   // This callback will be triggered when the user selects or login to
//   // his Google account from the popup
//   console.log("Handle the response", response)
//   // console.log(response.credential)
// }

import { googleTokenLogin } from "vue3-google-login"

const login = () => {
  googleTokenLogin().then((response) => {
    console.log("Handle the response", response)
    console.log(response.access_token)
  })
}
</script>

<script>
export default {
  name: "Login",
  data: () => ({

    UserName: ""
  }),
  methods: {
    
  },
  created() {

  }
};
</script>