import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      UserToken:"",
      User:{
        UserID:"",
        UserAvatarName:"",
        UserRole:"",
        User:"",
      },

    }
  },
  getters: {
    
  },
  mutations: {
    getUserToken(state, token) {
      state.UserToken = token
    },

  },
  actions: {
    getUserTokenAction(context,tokenValue) {
      context.commit('getUserToken', tokenValue)
    },
  },
  modules: {
    
  }
})
