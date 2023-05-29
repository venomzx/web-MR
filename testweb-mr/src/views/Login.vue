<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="4">
          <div class="d-flex flex-column mb-6 bg-surface-variant">
            <v-sheet class="ma-4 pa-2 bg-surface-variant ">Task Management assistant - Mixed Reality</v-sheet>
            <v-sheet class="ma-4 pa-2 bg-surface-variant ">Please login with KMITL account.</v-sheet>
            <!-- <GoogleLogin :callback="callback"/> -->
            <v-btn class="mt-0 mb-0 ml-6  mr-6 pa-2" color="red" @click="onLogin">Login</v-btn>
            <v-btn class="mt-2 mb-4 ml-6 mr-6 pa-2" color="blue" @click="onSignUp">Sign up</v-btn>
            <!-- {{ "Token :" + this.$store.state.user_token }} -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>



<script>
import axios from '@/api/axios'
import { googleTokenLogin } from "vue3-google-login"

// Set URL Backend
const URL_Login = "/login"

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
          // this.postAccessTokenToBackend(response)
          console.log(response.access_token)
          this.postAccessTokenToBackend(response.access_token)
        })
    },

    // SignUp 
    onSignUp() {
      googleTokenLogin().
        then((response) => {
          // this.postAccessTokenToBackend(response)
          this.postAccessTokenToBackend(response.access_token)
        })
    },

    // post to Backend
    postAccessTokenToBackend(Token) {
      axios.post(URL_Login, {
        accessToken: Token
      }).then((response) => {

        // --- Login Success case --- 
        console.log(response)
        console.log(response.data.status)

        if (response.data.status == "OK") {
          // Store Token
          this.storeToken(response.data.encoded_jwt)

          // route to Quest Board
          this.$router.push("/QuestBoard")
        }

        // --- Need to Register Avatar case --- 
        else if (response.data.status == "Register") {
          // Store Token
          this.storeToken(response.data.encoded_jwt)

          // route to Register Avatar
          this.$router.push("/RegisterAvatar")
        }

        // Rejection Login case
        else {
          alert("Please login with KMITL Email")
        }

      })
        .catch((error) => {
          // handle errors
          console.log("Error on Login: ",error);
        });
    }
  },
};
</script>

<script setup>
// const callback = (response) => {
//   // This callback will be triggered when the user selects or login to
//   // his Google account from the popup
//   console.log("Handle the response", response)
//   // console.log(response.credential)
// }
</script>