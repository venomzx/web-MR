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

import { googleTokenLogin } from "vue3-google-login"

const login = () => {
  googleTokenLogin().then((response) => {
    console.log("Handle the response", response)
    postToken(response)
    console.log(response.access_token)
  })

}
</script>

<script>
import axios from 'axios'

export default {
  name: "Login",
  data: () => ({
    UserToken: []
  }),
  methods: {
    postToken(Token) {
      // axios.post('', {
      //   googleToken: Token
      // }).then((response) => {
      //   this.UserToken = response
      //   console.log(response)
      // })
    }
  },
  mounted() {
    // axios.get('').then((response) => {
    //   this.UserToken = response
    //   console.log(response)
    // })
  }
};
</script>