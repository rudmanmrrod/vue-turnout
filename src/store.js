import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    events: []
  },
  mutations: {
    ['SIGN_IN'] (state, user){
      state.user = user
    },
    ['SIGN_OUT'] (state){
      state.user = {}
    },
    ['SET_EVENTS'] (state, events){
      state.events = events
    }
  },
  actions: {
    signIn({commit},user){
      commit('SIGN_IN',user)
    },
    signOut({commit}){
      commit('SIGN_OUT')
    },
    setEvents({commit}, events ){
      commit('SET_EVENTS',events)
    },
  }
})
