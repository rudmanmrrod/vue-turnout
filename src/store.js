import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    ['SIGN_IN'] (state, user){
      state.user = user
    },
    ['SIGN_OUT'] (state){
      state.user = {}
    }
  },
  actions: {
    signIn({commit},user){
      commit('SIGN_IN',user)
    },
    signOut({commit}){
      commit('SIGN_OUT')
    },
  }
})
