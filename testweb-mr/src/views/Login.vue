<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="4">
          <div class="d-flex flex-column mb-6 bg-surface-variant">
            <v-sheet class="ma-4 pa-2 bg-surface-variant ">CS Gamification - Mixed Reality</v-sheet>
            <v-sheet class="ma-4 pa-2 bg-surface-variant ">Please login with KMITL account.</v-sheet>
            <!-- <GoogleLogin :callback="callback"/> -->
            <v-btn class="mt-0 mb-0 ml-6  mr-6 pa-2" color="red" @click="login">Login</v-btn>
            <v-btn class="mt-2 mb-4 ml-6 mr-6 pa-2" color="blue" @click="Signout">Sign up</v-btn>
            {{ "Token :" + this.$store.state.UserToken }}
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
    add(Token) {
      this.$store.dispatch("getUserToken")
      console.log(this.$store.state.UserToken)
    },
    login() {
      googleTokenLogin().
        then((response) => {
          console.log("Handle the response", response)
          console.log(response.access_token)
          
          this.postToken(response)
          //this.add(response)
          //console.log("Token Test" + this.$store.state.UserToken)
        })
    },
    postToken(Token) {
      axios.post(URL, {
        googleToken: Token
      }).then((response) => {
        this.UserToken = response
        console.log(response)
        console.log(this.UserToken)
      })
    }
  },
};
</script>