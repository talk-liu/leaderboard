const state = {
  access_token: "",
};
const mutations = {
  SET_TOKEN(state, value) {
    state.access_token = value;
  },
};
const actions = {
  async getInfo({ state, commit }, val) {
    commit("SET_TOKEN", val);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
