import Vue from 'vue'
import Vuex from 'vuex'
import todos from './todos'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      counter: 0,
    },
    mutations: {
      increment(state) {
        state.counter++
      },
    },
    modules: {
      todos,
    },
  })

export default store
