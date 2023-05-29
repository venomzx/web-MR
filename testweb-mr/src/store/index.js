import { createStore } from 'vuex'
import axios from '@/api/axios'
// import jwt from 'jsonwebtoken';


export default createStore({
  state() {
    return {
      user_token: null,
      user_Role: null,
    }
  },
  getters: {
    // get if user is authorized
    isAuthenticated(state) {
      return state.user_token !== null;
    },
    token(state) {
      return state.user_token;
    },
  },
  mutations: {
    // Login
    getUserToken(state, userToken) {
      state.user_token = userToken
    },
    // Clear token
    clearAuthData(state) {
      state.user_token = null;
      state.user_Role = null;
    },
    // Set role
    setUserRole(state, role) {
      state.user_Role = role
    },
  },
  actions: {
    // Login Action
    getUserTokenAction({ commit, dispatch }, tokenValue) {
      commit('getUserToken', tokenValue)

      const timer = 3600
      const now = new Date();
      const expirationDate = new Date(
        now.getTime() + timer * 1000
      );
      localStorage.setItem("token", tokenValue);


      axios.get("/role").then((response) => {
        // --- Success case --- 
        let user_role = response.data.role
        commit('setUserRole', user_role)
        console.log(user_role)
      })
        .catch((error) => {
          // handle errors
          console.log(error);
        });
      localStorage.setItem("expirationDate", expirationDate);
      dispatch("setLogoutTimer", timer);
    },

    // // set time that admin stay sign in
    setLogoutTimer({ commit, dispatch }, expirationTime) {
      setTimeout(() => {
        dispatch("logout");
        // }, expirationTime * 1000)

        alert("Session หมดอายุแล้ว กรุณา Login ใหม่")

      }, expirationTime * 1000);
    },

    // re-login when token is not expired
    tryAutoLogin({ commit, dispatch }) {
      // Check token from localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch("logout")
        return;
      }
      // Check if token is expired
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      const now = new Date();
      if (now >= expirationDate) {
        dispatch("logout")
        alert('Session หมดอายุแล้ว กรุณา Login ใหม่');
        return;
      }
      // Authorize user
      commit("getUserToken", token);
      const user_role = localStorage.getItem("userRole")
      commit("setUserRole", user_role)
    },

    // Log user out and Remove token in localStorage
    logoutAction({ commit }) {
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      commit("clearAuthData");
      // localStorage.removeItem('userId')
      this.$router.replace("/Login");
    },
  },
  modules: {

  }
})
