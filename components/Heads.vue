<!-- Please remove this file from your project -->
<template>
  <div class="heads">
    <div class="container">
      <nuxt-link to="/">
        <img src="~/assets/logo.png" />
      </nuxt-link>
      <nuxt-link to="/">Assets</nuxt-link>
      <nuxt-link to="/claim">Claim</nuxt-link>
      <!-- <a>
        Leaderboard
      </a>
      <a>
        Game Lobby
      </a>
      <a>
        Show QR Code
      </a> -->
      <img @click="signEve"
           src="~/assets/button.png"
           v-if="!access_token" />
      <a v-else><span @click="accEve()">{{accounts[0]}} </span>{{accountName}}</a>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
import { get, post } from '~/utils/axios.js'
import URL from '~/utils/const/index.js'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'NuxtTutorial',
  data() {
    return {
      accounts: [],
      access_token: '',
      accountName: '',
    }
  },
  computed: {
    ...mapState({
      access_tokens: (state) => state.todos.access_token,
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
    this.access_token = localStorage.getItem('access_token')
    if (!this.access_token) {
      this.signEve()
    } else {
      const { data } = await post(URL + 'crypto/leaderboard')
      this.accountName = data.parameter.accountName
      this.SET_TOKEN(this.access_token)
    }
  },
  methods: {
    ...mapMutations('todos', ['SET_TOKEN']),
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
