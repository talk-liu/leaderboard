<!-- Please remove this file from your project -->
<template>
  <div class="claims">
    <div class="container">
      <div class="information">
        <p>
          <label>User: {{userInfo.accountName}}</label>
          <img src="~/assets/icon/singup.png" />
        </p>
        <p>
          G01x....4567
          <img src="~/assets/icon/cup.png" />
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
            <p>
              <img width="24px"
                   src="~/assets/currency/eth.png" />
              <label>
                1.100 ETH
              </label>
            </p>
            <p>
              <img width="24px"
                   src="~/assets/currency/eth.png" />
              <label>
                1.100 ETH
              </label>
            </p>
          </div>
          <div>
            <p>
              <img width="24px"
                   src="~/assets/currency/eth.png" />
              <label>
                1.100 ETH
              </label>
            </p>
            <p>
              <img width="24px"
                   src="~/assets/currency/eth.png" />
              <label>
                1.100 ETH
              </label>
            </p>
          </div>
        </div>
      </div>

      <div class="rewards">
        <p class="border"></p>
        <h3>
          Claim Rewards
          <img width="25px"
               src="~/assets/icon/history.png" />
        </h3>
      </div>

      <ul>
        <li>
          <div v-show="boll"
               class="popup"></div>
          <img src="~/assets/logo/2.png" />
          <div>
            <h3>Game Tokens</h3>
            <p>
              Claim Rewards<span>{{score}}</span>
            </p>
            <a @click="claimsEve(1)"
               href="javascript:;">
              <img src="~/assets/claims/button.png" />
            </a>
          </div>
        </li>
        <li>
          <div v-show="boll"
               class="popup"></div>
          <img src="~/assets/logo/1.png" />
          <div>
            <h3>Game Tokens</h3>
            <p>
              Claim Rewards<span>{{score}}</span>
            </p>
            <a @click="claimsEve(2)"
               href="javascript:;">
              <img src="~/assets/claims/button.png" />
            </a>
          </div>
        </li>
      </ul>
      <!-- <p style="text-align: center;">
        No data
      </p> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Web3 from 'web3'
import { get, post } from '~/utils/axios.js'
import URL from '~/utils/const/index.js'
export default {
  data() {
    return {
      score: 0,
      boll: false,
    }
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.todos.userInfo,
    }),
  },
  async mounted() {
    this.loadEve()
  },
  methods: {
    async claimsEve(game_id) {
      this.boll = true
      const { message } = await post(URL + 'crypto/claim', { game_id: game_id })
      this.boll = false
      this.loadEve()
      alert(message)
    },
    async loadEve() {
      const web3 = new Web3(
        Web3.givenProvider ||
          new Web3.providers.HttpProvider('http://localhost:7545')
      )
      const { data } = await post(URL + 'crypto/reward')
      if (data.result == '0x') {
        return false
      }
      let decodeData = web3.eth.abi.decodeParameter('uint256', data.result)
      console.log(decodeData, '领取奖励')
      this.score = decodeData
    },
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
    height: 120px;
    width: 722px;
    margin: auto;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    padding: 26px 68px;
    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
    }
    .currencys {
      width: 100%;
      div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 20px 0px;
        p {
          display: flex;
          justify-content: center;
          align-items: center;
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
    width: 85%;
    margin: auto;
    h3 {
      text-align: center;
      overflow: hidden;
      margin-top: 25px;
      font-size: 24px;
      font-style: italic;
      text-shadow: 0px 3.56366px 4.98913px rgba(64, 221, 132, 0.3),
        0px 0px 3.56366px #40dd84;

      img {
        float: right;
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
      display: flex;
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
