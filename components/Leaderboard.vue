<!-- Please remove this file from your project -->
<template>
  <div class="leader">
    <div class="container">
      <div class="logo">
        <img src="~/assets/logo/2.png" />
      </div>
      <div class="switch">
        <img @click="switchEve"
             src="~/assets/switch.png" />
      </div>
      <Switchs ref="childFunction" />
      <Play @childPlayMethod="boll=!boll"
            ref="playFunction"
            :poolData="poolData" />
      <Currency @tokensMethod="tokensMethod"
                ref="currencyFunction" />
      <div class="containerBox">
        <div class="left">
          <ul class="leftBox">
            <li class="round">
              <h4>
                <label>ROUND
                  <span v-if="leaderboards[rankingsNum]">{{leaderboards[rankingsNum].round}}</span>
                  RANKINGS</label>
                <img src="~/assets/ico.png" />
              </h4>
              <ul>
                <li>
                  <p class="title">
                    <span class="name">PLAYER</span>
                    <span>SCORE</span>
                  </p>
                  <div v-if="leaderboards[rankingsNum]">
                    <p v-for="(items,key) in leaderboards[rankingsNum].list"
                       :key="key">
                      <label class="name">{{items.name}}</label>
                      <label>{{items.score}}</label>
                    </p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="leftBox"
              id="rankings">
            <li class="round">
              <h4>
                <label>RANKINGS HISTORY</label>
                <img src="~/assets/ico1.png" />
              </h4>
              <ul>
                <li v-if="loading"
                    class="history">
                  <!-- <img src="~/assets/history-left.png" /> -->
                  <div>
                    <p v-for="(item,key) in leaderboards"
                       :key="item.round"
                       @click="leaderboardsEve(key)">
                      ROUND {{item.round}}
                    </p>
                  </div>
                  <!-- <img src="~/assets/history-right.png" /> -->
                </li>
                <li class="loading"
                    v-else>
                  <p style="text-align: center;margin: 20px 0px;">
                    <a-spin />
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="game">
          <div style="width:370px;height:675px;margin-left: 55px;margin-top: 15px;">
            <iframe v-if="boll"
                    width="100%"
                    height="100%"
                    src="https://playrank.io/towerdefense/"> </iframe>
            <div v-else
                 class="back">
              <p>
                <img @click="playEve"
                     src="~assets/button111.png" />
              </p>
              <p>
                <img @click="boll=!boll"
                     src="~assets/gameButton1.png" />
              </p>
              <p>
                <img @click="boll=!boll"
                     src="~assets/gameButton2.png" />
              </p>
              <p>
                <img @click="boll=!boll"
                     src="~assets/gameButton3.png" />
              </p>
            </div>
          </div>
        </div>
        <div class="right">
          <div v-if="poolData">
            <h2 @click="currencyEve">
              <img width="30px"
                   :src="poolData.img" />
              <span>{{poolData.name}} Pool</span>
              <img src="~/assets/ico4.png" />
            </h2>
            <h5>
              Balance：{{poolData.balance}}
            </h5>
            <ul>
              <li>
                <!-- <h3>
                  Rd. 6 Prize Pool
                </h3> -->
                <p>
                  1st 100.00 {{poolData.name}}
                </p>
                <p>
                  2nd 99.00 {{poolData.name}}
                </p>
                <p>
                  3rd 98.00 {{poolData.name}}
                </p>
                <!-- <p>
                  4th 97.00 {{poolData.name}}
                </p>
                <p>
                  5th 96.00 {{poolData.name}}
                </p> -->
              </li>
              <li class="round">
                <h4>
                  Next Round: <span v-if="leaderboards[0]">{{leaderboards[0].round | round}}</span>
                </h4>
                <p class="time">
                  TIME LEFT: {{mm}}:{{ss}} MINUTES
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Web3 from 'web3'
import { get, post } from '~/utils/axios.js'
import URL from '~/utils/const/index.js'
import Switchs from './Switchs.vue'
import Play from '~/components/Popup/Play.vue'
import Currency from '~/components/Popup/Currency.vue'
import TOKENS from '~/utils/const/tokens.js'

export default {
  components: { Switchs, Play, Currency },
  data() {
    return {
      attr: [],
      leaderboards: [],
      boll: false,
      rankingsNum: 0,
      loading: false,
      mm: 0,
      ss: 0,
    }
  },
  filters: {
    round(value) {
      if (value) {
        let num = parseInt(value.substring(value.length - 2, value.length))
        let str = value.substring(0, value.length - 2)
        num += 1
        return str + num
      }
      return value
    },
  },
  computed: {
    poolData() {
      return this.$store.state.tokens.tokens
    },
  },
  watch: {
    poolData(val) {
      if (val) {
        this.attrsEve(val.assetId)
      }
    },
  },
  async mounted() {
    const _this = this

    this.mm = this.$moment().format('mm')
    this.ss = this.$moment().format('ss')
    this.mm = 60 - this.mm

    setInterval(() => {
      _this.ss -= 1
      if (_this.ss <= 0) {
        _this.ss = 60
        _this.mm -= 1
      }
      if (_this.mm < 0) {
        _this.ss = 0
        _this.mm = 60
        _this.attrsEve(_this.poolData.assetId)
        _this.INIT_ASSETS()
      }
    }, 1000)

    window.addEventListener(
      'message',
      function (event) {
        console.log('666这里是接收到的消息，消息内容在event.data属性中', event)
        console.log(event.data, 1111)
        // if (event.data == 'updateScore') {
        //   _this.attrsEve(_this.poolData.assetId)
        //   _this.INIT_ASSETS()
        // }
        switch (event.data) {
          case 'updateScore':
            _this.attrsEve(_this.poolData.assetId)
            _this.INIT_ASSETS()
            break
          case 'jumpToLeaderBoard':
            window.scrollTo(10000, 10000)
            break
        }
      },
      false
    )
    localStorage.setItem('gameid', 1)
    // this.attrsEve()
  },
  methods: {
    ...mapMutations('tokens', ['INIT_ASSETS']),
    playEve() {
      this.$refs.playFunction.playBollEve()
    },
    switchEve() {
      this.$refs.childFunction.switchGameBollEve()
    },
    currencyEve() {
      this.$refs.currencyFunction.switchCurrencyEve(this.poolData)
    },
    tokensMethod(item) {
      this.poolData = item
    },
    compare(p) {
      return function (m, n) {
        var a = m[p]
        var b = n[p]
        return b - a //升序
      }
    },
    leaderboardsEve(key) {
      this.rankingsNum = key
    },
    async attrsEve(assetId) {
      if (localStorage.getItem('access_token')) {
        // this.loading = false
        const { leaderboards } = await post(URL + 'nexus/leaderboard', {
          asset_id: assetId,
        })
        console.log(444444, leaderboards)
        this.loading = true
        this.leaderboards = leaderboards
      }
    },
  },
}
</script>
<style scoped lang="less">
.leader {
  .container {
    position: relative;
    div.logo {
      position: absolute;
      left: 50%;
      top: 92px;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
    .switch {
      position: absolute;
      left: 50%;
      bottom: 92px;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  }
  .containerBox {
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding-top: 140px;
    background: url('~/assets/back.png') no-repeat;
    background-size: 100% 100%;
    height: 900px;
    .game {
      .back {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        p {
          margin: 8px 0px;
          img {
            cursor: pointer;
          }
        }
      }
    }
    .left {
      // background: url('~/assets/left.png') no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 800px;
      margin-top: -70px;
    }
    .right {
      width: 100%;
      margin: 0px 32px;
      div {
        padding-left: 40px;
        text-align: center;
        h2 {
          font-size: 24px;
          text-shadow: 0px 5.00052px 7.00072px rgba(64, 221, 132, 0.3),
            0px 0px 5.00052px #40dd84;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            margin: 0px 6px;
            cursor: pointer;
          }
        }
        h5 {
          margin-top: 14px;
          font-size: 18px;
          text-shadow: 0px 5.00052px 7.00072px rgba(64, 221, 132, 0.3),
            0px 0px 5.00052px #40dd84;
          color: #fff;
        }
        ul {
          margin-top: 54px;
          h3 {
            font-size: 24px;
            text-shadow: 0px 5.00052px 7.00072px rgba(64, 221, 132, 0.3),
              0px 0px 5.00052px #40dd84;
          }
          p {
            color: #40dd84;
            text-shadow: 0px 5.34643px 7.485px rgba(64, 221, 132, 0.3),
              0px 0px 5.34643px #40dd84;
            font-size: 18px;
            margin-top: 10px;
          }
          .round {
            margin-top: 66px;
            h4 {
              color: #ffffff;
              font-size: 20px;
              text-shadow: 0px 4.1659px 5.83226px rgba(64, 221, 132, 0.3),
                0px 0px 4.1659px #40dd84;
            }
            p {
              font-size: 12px;
            }
          }
        }
      }
    }
    .leftBox {
      padding: 0px 8px;
      padding-top: 66px;
      .round {
        margin-left: 36px;
        h4 {
          background: url('~/assets/title.png') no-repeat;
          background-size: 100% 100%;
          height: 60px;
          font-size: 16px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding-bottom: 8px;
        }
        ul {
          padding: 0px 20px;
          margin-top: -16px;
          li {
            background: url('~/assets/title1.png') no-repeat;
            background-size: 100% 100%;
            height: 305px;
            font-size: 13px;
            padding: 8px;
            div {
              height: 170px;
              overflow: auto;
            }
            p {
              margin: 10px 5px;
            }
            a {
              color: #fff;
            }
            label {
              width: 62px;
              display: inline-block;
              font-size: 16px;
              text-align: right;
            }
            .title {
              margin: 0px 5px;
              padding-bottom: 4px;
              font-size: 18px;
              color: #a2a2a2;
            }
            .name {
              width: 120px;
              display: inline-block;
              margin-right: 15px;
              text-align: left;
            }
          }
        }
      }
    }
    #rankings {
      padding-top: 0px;
      .history {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 8px 32px;
        img {
          margin-top: -70px;
          cursor: pointer;
        }
        div {
          height: auto;
          overflow: hidden;
          width: 100%;
          margin-top: -70px;
          p:first-child {
            margin-top: 0px;
          }
          p {
            background: url('~/assets/title.png') no-repeat;
            background-size: 100% 100%;
            height: 44px;
            text-align: center;
            line-height: 40px;
            margin: 0px;
            margin-top: -7px;
            font-size: 17px;
            cursor: pointer;
          }
        }
      }

      .loading {
        div {
          overflow: hidden;
        }
      }
    }
  }
}
</style>
