import { post } from '~/utils/axios.js'
import URL from '~/utils/const/index.js'
const state = {
  tokens: {},
  assets: {},
  // tokens: [
  //   {
  //     img: require('~/assets/currency/rfuel.png'),
  //     name: 'RFUEL',
  //     balance: 0,
  //   },
  //   {
  //     img: require('~/assets/currency/eth.png'),
  //     name: 'ETH',
  //     balance: 0,
  //   },
  //   {
  //     img: require('~/assets/currency/usdt.png'),
  //     name: 'USDT',
  //     balance: 0,
  //   },
  //   {
  //     img: require('~/assets/currency/play.png'),
  //     name: 'PLAY',
  //     balance: 0,
  //   },
  // ],
}
const mutations = {
  SET_TOKENS(state, value) {
    state.tokens = value
  },
  async INIT_ASSETS(state, value) {
    const { data, result, password } = await post(URL + 'nexus/assets')
    if (!result) {
      return false
    }
    data.data['password'] = !password
    // data.data.balances = data.balances
    const res = data ? data.balances : []
    for (let i in res) {
      switch (res[i].assetId) {
        case 0:
          localStorage.setItem('gas', res[i].balance)
          break
        case 31:
          res[i]['name'] = 'PLAY'
          res[i]['img'] = require('~/assets/currency/play.png')
          break
        case 32:
          res[i]['name'] = 'RFUEL'
          res[i]['img'] = require('~/assets/currency/rfuel.png')
          break
        case 33:
          res[i]['name'] = 'USDT'
          res[i]['img'] = require('~/assets/currency/usdt.png')
          break
      }
    }
    data.data.balances = res
    if (state.tokens.assetId) {
      for (let i in data.data.balances) {
        if (state.tokens.assetId == data.data.balances[i].assetId) {
          state.tokens = data.data.balances[i]
          localStorage.setItem('assetId', data.data.balances[i].assetId)
        }
      }
    } else {
      state.tokens = data.data.balances[1]
      localStorage.setItem('assetId', data.data.balances[1].assetId)
    }

    state.assets = data.data
  },
  INIT_ASSETS_REMOVE(state, value) {
    state.assets = value
  },
  INIT_TOKENS(state, value) {
    state.tokens = value
  },
}
const actions = {
  async getInfo({ state, commit }, val) {
    commit('SET_TOKENS', val)
  },
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
