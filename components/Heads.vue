<!-- Please remove this file from your project -->
<template>
  <div class="heads">
    <div class="container">
      <nuxt-link to="/">
        <img src="~/assets/logo.png" />
      </nuxt-link>
      <nuxt-link to="/">Game Lobby</nuxt-link>
      <nuxt-link to="/leaderboard">Leaderboard</nuxt-link>
      <a @click="switchEve">Buy Crypto</a>
      <!-- <nuxt-link to="/claim">FAQ</nuxt-link> -->
      <img @click="singinEve"
           src="~/assets/button.png"
           v-if="!userInfo.accountName" />
      <!-- <a v-else>
        <span @click="accEve()">{{accounts[0]}} </span>
        {{userInfo.accountName}}
      </a> -->
      <nuxt-link v-else
                 to="/user">{{userInfo.accountName}}</nuxt-link>

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
    }
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.todos.userInfo,
    }),
  },
  async mounted() {
    // window.addEventListener(
    //   'message',
    //   function (event) {
    //     console.log('这里是接收到的消息，消息内容在event.data属性中', event)
    //     console.log(event.data)
    //   },
    //   false
    // )

    const web3 = new Web3(window.ethereum)
    this.accounts = await web3.eth.getAccounts()
    this.accounts = await ethereum.enable()
    const access_token = localStorage.getItem('access_token')
    if (!access_token) {
      this.signEve()
    } else {
      const { data } = await post(URL + 'crypto/leaderboard')
      this.SET_USERINFO(data.parameter)
    }
  },
  methods: {
    ...mapMutations('todos', ['SET_USERINFO']),
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

      const { access_token } = await post(URL + 'crypto/oauth/metamask', data)
      localStorage.setItem('access_token', access_token)
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
    justify-content: space-around;
    align-items: center;
    padding-top: 10px;
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
