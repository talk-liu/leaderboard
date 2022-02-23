const state = {
  userInfo: '',
}
const mutations = {
  SET_USERINFO(state, value) {
    state.userInfo = value
  },
}
const actions = {
  async getInfo({ state, commit }, val) {
    commit('SET_USERINFO', val)
  },
}
console.log(1)
export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
