import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      user_token:"-1",
      user:{
        user_id:"",
        user_avatarname:"",
        user_role:"",
        user:"",
      },
      questList:[],
      settingPlayerBoard:[],

    }
  },
  getters: {
    
  },
  mutations: {
    // Login
    getUserToken(state, token) {
      state.user_token = token
    },


  },
  actions: {
    // Login Action
    getUserTokenAction({ commit },tokenValue) {
      commit('getUserToken', tokenValue)
    },
    
    // Quest Action
    getListQuest({commit},) {

    },

    // Teacher Manage Quest



  },
  modules: {
    
  }
})
