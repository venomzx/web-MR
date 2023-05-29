<template>
  <v-app-bar height="60" color="blue">

    <v-icon class="ma-4" @click.stop="drawer = !drawer">
      {{ drawer ? "mdi-close" : "mdi-menu" }}
    </v-icon>
    <v-list-item prepend-avatar="https://pearls.science.kmitl.ac.th/_nuxt/img/cs_logo.1c3f337.png" router-link
      to="/QuestBoard">
    </v-list-item>
    <v-list-item v-if="this.$store.state.user_token">
      <v-btn @click="onLogout">Logout</v-btn>
    </v-list-item>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporaryww color="blue">
    <v-list-item prepend-avatar="" prepend-icon="mdi-account-circle" title="Username"></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-login" title="Login" router-link to="/Login">
      </v-list-item>
      <v-list-item prepend-icon="mdi-login" title="RegisterAvatar" router-link to="/RegisterAvatar">
      </v-list-item>
      <v-list-item prepend-icon="mdi-view-dashboard" title="QuestBoard" router-link to="/QuestBoard">
      </v-list-item>
      <v-list-item prepend-icon="mdi-history" title="Log" router-link to="/LogEvent">
      </v-list-item>
      <v-list-item prepend-icon="mdi-account-group" title="PlayerBoard" router-link to="/PlayerBoard">
      </v-list-item>
      <!-- <v-list-item title="Party" router-link to="/Party"></v-list-item> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logoutAction")
    }
  }
}
</script>