<!-- Please remove this file from your project -->
<template>
  <div class="claims">
    <div class="container">
      <div class="information">
        <p>
          <label>User: {{userInfo.accountName | accountName}}</label>
          <img @click="singupEve"
               src="~/assets/icon/singup.png" />
        </p>
        <p>
          {{address}}
          <img @click="copy" src="~/assets/icon/cup.png" />
        </p>
      </div>
      <div class="assets">
        <div>
          <h3>
            <img src="~/assets/icon/assets.png" />
            Assets
          </h3>
          <nuxt-link to="/transaction">
            <img src="~/assets/send.png" />
          </nuxt-link>
        </div>
        <div class="currencys">
          <div>
            <p v-for="(item,key) in balances"
               :key="key"
               v-show="item.name">
              <img width="24px"
                   :src="item.img" />
              <label>
                {{item.balance}} {{item.name}}
              </label>
            </p>
          </div>
        </div>
      </div>

      <div class="rewards">
        <p class="border"></p>
        <h3>
          <label>Claim Rewards</label>
          <!-- <img width="25px"
               src="~/assets/icon/history.png" /> -->

          <nuxt-link to="/user/history">
            <img src="~/assets/icon/history.png" />
            History
          </nuxt-link>
          <a @click="switchEve">
            <img src="~/assets/icon/filter.png" />
            Filter
          </a>
        </h3>
      </div>
      <div v-if="loading">
        <ul v-for="(item,key) in gameList"
            :key="key">
          <li v-for="(res,keys) in item.rewards"
              :key="keys"
              v-show="res.reward > 0 ">
            <div v-show="boll"
                 class="popup"></div>
            <img v-show="item.game_id == 1"
                 src="~/assets/logo/2.png" />
            <img v-show="item.game_id == 2"
                 src="~/assets/logo/1.png" />
            <div>
              <h3>Game Tokens</h3>
              <p>
                Claim Rewards<span>{{res.reward}} {{tokens.name}}</span>
              </p>
              <a @click="claimsEve(item.game_id,res.round)"
                 href="javascript:;">
                <img src="~/assets/claims/button.png" />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <p v-else
         style="text-align: center;margin: 20px 0px;color: #999">
        <a-spin />
        <br />
        Getting data on the chain ...
      </p>

      <!-- <a-spin /> -->

      <!-- <p style="text-align: center;">
        No data
      </p> -->
    </div>
    <Currency ref="currencyFunction" />
    <Notification @tokensMethod="tokensMethod"
                  ref="notificationFn" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Web3 from 'web3'
import { get, post } from '~/utils/axios.js'
import URL from '~/utils/const/index.js'
import Currency from '~/components/Popup/Currency.vue'
import Notification from '~/components/Popup/Notification.vue'
// import TOKENS from '~/utils/const/tokens.js'
export default {
  data() {
    return {
      boll: false,
      assetsData: {},
      gameList: [],
      loading: false,
      address: '',
    }
  },
  filters: {
    accountName(value) {
      return value ? value.substring(0, value.length - 4) : value
    },
  },
  components: { Currency, Notification },
  computed: {
    ...mapState({
      userInfo: (state) => state.tokens.assets,
      balances: (state) => state.tokens.assets.balances,
      tokens: (state) => state.tokens.tokens,
    }),
  },
  watch: {
    tokens(val) {
      this.rewardEve({ asset_id: val.assetId })
    },
  },
  async mounted() {
    this.address = localStorage.getItem('address')
  },
  methods: {
    ...mapMutations('todos', ['SET_USERINFO']),
    ...mapMutations('tokens', [
      'SET_TOKENS',
      'INIT_ASSETS_REMOVE',
      'INIT_ASSETS',
    ]),
    async claimsEve(game_id, round) {
      this.boll = true
      const { message } = await post(URL + 'nexus/claim', {
        game_id: game_id,
        asset_id: this.tokens.assetId,
        round: parseInt(round),
      })
      this.boll = false
      this.$message.info('success')
      this.INIT_ASSETS()
    },
    singupEve() {
      this.$refs.notificationFn.switchCurrencyEve(this.tokens)
    },
    tokensMethod(item) {
      localStorage.removeItem('access_token')
      this.INIT_ASSETS_REMOVE({})
      const _this = this
      setTimeout(() => {
        _this.$router.push({ path: '/' })
      }, 500)
    },
    switchEve() {
      this.$refs.currencyFunction.switchCurrencyEve(this.tokens)
    },
    async rewardEve(params) {
      this.loading = false
      const { data } = await post(URL + 'nexus/reward', params)
      this.gameList = data
      this.loading = true
    },
    copy(){
      var domUrl = document.createElement("input");
      domUrl.value = this.address;
      domUrl.id = "creatDom";
      document.body.appendChild(domUrl);
      domUrl.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      let creatDom = document.getElementById("creatDom");
      creatDom.parentNode.removeChild(creatDom);
      this.$message.info('Copy successful')

    }
  },
}
</script>
<style scoped lang="less">
.claims {
  color: #fff;
  margin-top: 52px;
  .information {
    padding-top: 10px;
    height: 96px;
    background: radial-gradient(
        38.87% 56.6% at 50% 115.1%,
        rgba(99, 254, 180, 0.5) 0%,
        rgba(6, 219, 100, 0) 100%
      ),
      radial-gradient(
        91.33% 64.45% at 50% -14.45%,
        rgba(99, 254, 180, 0.5) 0%,
        rgba(6, 219, 100, 0) 71.97%
      ),
      #121621;
    p {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0px;
      font-style: italic;
      text-shadow: 0px 3.56366px 4.98913px rgba(64, 221, 132, 0.3),
        0px 0px 3.56366px #40dd84;
      label {
        font-size: 24px;
      }

      img {
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
  .assets {
    background: url('~/assets/assetsBack.png') no-repeat;
    background-size: 100% 100%;
    width: 722px;
    margin: auto;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 40px;
    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
    }
    .currencys {
      width: 100%;
      margin-left: 109px;
      div {
        // display: flex;
        // justify-content: space-evenly;
        // align-items: center;
        margin: 20px 0px;
        overflow: hidden;
        height: 100px;
        p {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 180px;
          float: left;
          margin-bottom: 40px;
          label {
            font-size: 18px;
          }
          img {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .rewards {
    margin: auto;
    h3 {
      text-align: center;
      margin-top: 25px;
      label {
        font-size: 24px;
        font-style: italic;
        text-shadow: 0px 3.56366px 4.98913px rgba(64, 221, 132, 0.3),
          0px 0px 3.56366px #40dd84;
        margin-left: 224px;
      }
      a {
        float: right;
        color: #40dd84;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        border: 1px solid #40dd84;
        border-radius: 8px;
        margin-left: 20px;
        padding: 3px 10px;
        height: 25px;
        cursor: pointer;
        img {
          margin-right: 5px;
        }
      }
    }
    .border {
      background: linear-gradient(
        89.96deg,
        rgba(64, 221, 132, 0) -1.12%,
        #40dd84 32.05%,
        #ffffff 46.79%,
        #40dd84 59.43%,
        rgba(64, 221, 132, 0) 99.97%
      );
      height: 4px;
      width: 85%;
      margin: auto;
      margin-top: 20px;
    }
  }
  ul {
    margin-top: 38px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    li {
      background: url('~/assets/claims/back.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 30px 0px;
      position: relative;
      .popup {
        position: absolute;
        top: 0;
        left: -30px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
      }
      div {
        margin-left: 28px;
        h3 {
          font-size: 24px;
        }
        p {
          font-size: 14px;
          margin-bottom: 20px;
          span {
            color: #40dd84;
            font-size: 12px;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
