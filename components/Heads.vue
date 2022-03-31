<!-- Please remove this file from your project -->
<template>
  <div class="heads">
    <div class="container">
      <nuxt-link to="/">
        <img src="~/assets/logo.png" />
      </nuxt-link>
      <p class="route"
         v-if="userInfo.assets.accountName">
        <nuxt-link to="/">Game Lobby</nuxt-link>
        <!-- <nuxt-link to="/towerdefenses">Leaderboard</nuxt-link> -->
        <a @click="switchEve">Buy Crypto</a>
      </p>
      <p class="login">
        <img @click="singinEve"
             src="~/assets/button.png"
             v-if="!access_token" />
        <nuxt-link v-else
                   to="/user">{{userInfo.assets.accountName | accountName}}</nuxt-link>
      </p>

    </div>
    <Confirmation ref="childFunction" />
    <Singin @walletEveMethod="signEve"
            ref="singinFunction" />
  </div>
</template>

<script>
import Web3 from 'web3'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import { get, post } from '~/utils/axios.js'
import URL from '~/utils/const/index.js'
import Confirmation from '~/components/Popup/Confirmation.vue'
import Singin from '~/components/Popup/Singin.vue'

export default {
  name: 'HeadsPages',
  components: { Confirmation, Singin },
  data() {
    return {
      accounts: [],
      access_token: '',
    }
  },
  filters: {
    accountName(value) {
      return value ? value.substring(0, value.length - 4) : value
    },
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.tokens,
    }),
  },
  async mounted() {
    const access_token = localStorage.getItem('access_token')
    this.access_token = access_token
    this.INIT_ASSETS()
  },
  methods: {
    ...mapMutations('tokens', ['INIT_ASSETS']),
    async signEve() {
      const web3 = new Web3(window.ethereum)
      this.accounts = await web3.eth.getAccounts()
      this.accounts = await ethereum.enable()
      // 获取签名id
      const notice = 'leaderboard'
      const personal = await web3.eth.personal.sign(notice, this.accounts[0])
      const data = {
        address: this.accounts[0],
        signature: personal,
        message: notice,
      }
      console.log(JSON.stringify(data))

      const { access_token, address } = await post(
        URL + 'nexus/oauth/metamask',
        data
      )
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('address', address)
      location.reload()
    },
    accEve() {
      console.log(666)
      window.top.postMessage('updateScore', '/')
    },
    switchEve() {
      this.$refs.childFunction.switchGameBollEve()
    },
    singinEve() {
      this.$refs.singinFunction.singinBollEve()
    },
  },
}
</script>
<style scoped lang="less">
.heads {
  height: 60px;
  background: url('~/assets/head.png') no-repeat;
  background-size: 100% 100%;
  position: relative;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    .route {
      a {
        margin: 0px 50px;
      }
    }
    .login {
    }
    img {
      cursor: pointer;
    }
    a {
      color: #a4a4a4;
      font-size: 16px;
      font-weight: 600;
      font-style: italic;
      cursor: pointer;
      span {
        color: #a4a4a4;
        position: absolute;
        top: 66px;
        left: 50%;
        transform: translate(-50%, 0%);
        z-index: 111;
      }
    }
    span {
      color: #fff;
    }
  }
}
</style>
