<!-- Please remove this file from your project -->
<template>
  <div class="claims">
    <div class="container">
      <ul>
        <li>
          <div v-show="boll"
               class="popup"></div>
          <img src="~/assets/claims/logo.png" />
          <div>
            <h3>Game Tokens</h3>
            <p>
              Claim Rewards<span>{{score}}</span>
            </p>
            <a @click="claimsEve"
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
import { get, post } from '~/utils/axios.js'
import URL from '~/utils/const/index.js'
import Web3 from 'web3'
export default {
  data() {
    return {
      score: 0,
      boll: false,
    }
  },
  async mounted() {
    this.loadEve()
  },
  methods: {
    async claimsEve() {
      this.boll = true
      const { message } = await post(URL + 'crypto/claim')
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
  ul {
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
