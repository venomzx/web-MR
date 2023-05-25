<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="4">
          <div class="d-flex flex-column mb-6 bg-surface-variant">
            <v-sheet class="ma-4 pa-2 bg-surface-variant ">CS Gamification - Mixed Reality</v-sheet>
            <v-sheet class="ma-4 pa-2 bg-surface-variant ">Please login with KMITL account.</v-sheet>
            <!-- <GoogleLogin :callback="callback"/> -->
            <v-btn class="mt-0 mb-0 ml-6  mr-6 pa-2" color="red" @click="onLogin">Login</v-btn>
            <v-btn class="mt-2 mb-4 ml-6 mr-6 pa-2" color="blue" @click="onSignUp">Sign up</v-btn>
            {{ "Token :" + this.$store.state.user_token }}
          </div>
        </v-col>
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
</script>

<script>
import axios from 'axios'
import { googleTokenLogin } from "vue3-google-login"

// Set URL Backend
const URL = ""

export default {
  name: "Login",
  data: () => ({
    UserToken: []
  }),
  methods: {
    // Get Token to storage
    storeToken(Token) {
      this.$store.dispatch("getUserTokenAction", Token)
    },

    // Login
    onLogin() {
      googleTokenLogin().
        then((response) => {
          this.postAccessTokenToBackend(response)
          // this.postAccessTokenToBackend(response.access_token)
        })
    },

    // SignUp 
    onSignUp() {
      googleTokenLogin().
        then((response) => {
          this.postAccessTokenToBackend(response)
          // this.postAccessTokenToBackend(response.access_token)
        })
    },

    // post to Backend
    postAccessTokenToBackend(Token) {
      axios.post(URL, {
        googleToken: Token
      }).then((response) => {
        // --- Login Success case --- 
        if (response.status == "OK") {
          // Store Token
          this.storeToken(response)

          // route to Quest Board
          this.$router.push("/QuestBoard")
        }
        // --- Need to Register Avatar case --- 
        else if (response.status == "Register") {
          // Store Token
          this.storeToken(response)

          // route to Register Avatar
          this.$router.push("/RegisterAvatar")
        }
        // Rejection Login case
        else {
          alert("Please login with KMITL Email ")
        }

      })
    }
  },
};
</script>