import { createStore } from 'vuex'

export default createStore({
  state: {
    userName: 'zs'
  },
  getters: {
    newName (state) {
      return state.userName + '!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.userName = 'ls'
    }
  },
  actions: {
    updateName (ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  modules: {
  }
})
