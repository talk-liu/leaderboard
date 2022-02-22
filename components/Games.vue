<template>
  <div class="games">
    <div class="container">

      <div class="logo">
        <img src="~/assets/logo/1.png" />
      </div>
      <Switchs ref="childFunction" />
      <div class="iframeBox">
        <p class="switch">
          <img @click="switchEve"
               src="~/assets/switch.png" />
        </p>
        <div>
          <div class="iframes"
               v-if="boll">
            <iframe width="100%"
                    height="100%"
                    src="https://playrank.io/flappybird/"> </iframe>
          </div>
          <div class="back"
               v-else>
            <p>
              <img @click="boll=!boll"
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
      <div class="leaderBox">

        <div class="left">
          <div>
            <h2>
              <img src="~/assets/ico3.png" />
              <span>PLAY TOKEN Pool</span>
              <img src="~/assets/ico4.png" />
            </h2>
            <ul>
              <li>
                <h3>
                  Rd. 6 Prize Pool
                </h3>
                <p>
                  1st 70.00 PLAY
                </p>
                <p>
                  1st 70.00 PLAY
                </p>
                <p>
                  1st 70.00 PLAY
                </p>
              </li>
              <li class="round">
                <h4>
                  Next Round: 7
                </h4>
                <p>
                  PLAYS LEFT: 10 / 20
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">

          <ul class="leftBox">
            <li class="round">
              <h4>
                <label>ROUND 6 RANKINGS</label>
                <img src="~/assets/ico.png" />
              </h4>
              <ul>
                <li>
                  <p class="title">
                    <span class="name">PLAYER</span>
                    <span>SCORE</span>
                  </p>
                  <div>
                    <p v-for="(item,key) in attr"
                       :key="key">
                      <label class="name">{{item.name}}</label>
                      <!-- <label>{{item.score}}</label> -->
                      <label>{{item.reward}}</label>
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
                <li class="history">
                  <img src="~/assets/history-left.png" />
                  <div>
                    <p v-for="item in 5"
                       :key="item">
                      ROUND 5
                    </p>
                  </div>
                  <img src="~/assets/history-right.png" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="leader">
        <ul>
          <li v-for="(item,key) in attr"
              :key="key">
            <label>{{item.name}}</label>
            <span>{{item.score}}</span>
            <span>{{item.reward}}</span>
          </li>
        </ul>
      </div> -->
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
      attr: [],
      boll: false,
    }
  },
  created() {},
  async mounted() {
    const _this = this
    window.addEventListener(
      'message',
      function (event) {
        console.log('666这里是接收到的消息，消息内容在event.data属性中', event)
        console.log(event.data, 1111)
        if (event.data == 'updateScore') {
          _this.attrsEve()
        }
      },
      false
    )
    localStorage.setItem('gameid', 2)
    this.attrsEve()
  },
  methods: {
    switchEve() {
      this.$refs.childFunction.switchGameBollEve()
    },
    compare(p) {
      return function (m, n) {
        var a = m[p]
        var b = n[p]
        return b - a //升序
      }
    },
    async attrsEve() {
      const web3 = new Web3(
        Web3.givenProvider ||
          new Web3.providers.HttpProvider('http://localhost:7545')
      )
      console.log(localStorage.getItem('access_token'))
      if (localStorage.getItem('access_token')) {
        const { data } = await post(URL + 'crypto/leaderboard')
        console.log(data)
        let decodeData = web3.eth.abi.decodeParameter(
          'tuple(uint256,string,address,uint256)[]',
          data.result
        )
        const attrs = []
        decodeData.forEach((element) => {
          console.log(element)
          attrs.push({
            score: element[0],
            name: element[1],
            address: element[2],
            reward: element[3],
          })
        })
        attrs.sort(this.compare('score'))
        this.attr = attrs
        console.log(decodeData, 'talk', attrs)
      }
    },
  },
}
</script>
<style scoped lang="less">
.games {
  color: #fff;
  padding-bottom: 43px;
  .container {
    position: relative;
  }
  div.logo {
    position: absolute;
    left: 50%;
    top: 72px;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .iframeBox {
    background: url('~/assets/games/back.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    height: 1479px;

    .switch {
      position: absolute;
      left: 50%;
      bottom: 44%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
    .iframes {
      width: 1067px;
      height: 588px;
      padding: 145px 0px 0px 103px;
    }
    .back {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      p {
        img {
          cursor: pointer;
        }
      }
    }
  }
  .leaderBox {
    position: absolute;
    bottom: 50px;
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .right,
    .left {
      padding: 0px 12px;
    }
    .right {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .leftBox {
        width: 100%;
        padding: 0px 8px;
        .round {
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
        .history {
          display: flex;
          justify-content: space-around;
          align-items: center;
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
              height: 48px;
              text-align: center;
              line-height: 40px;
              margin: 0px;
              margin-top: -7px;
              font-size: 17px;
            }
          }
        }
      }
    }
    .left {
      width: 100%;
      div {
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
          }
        }
        ul {
          margin-top: 118px;
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
            h3 {
            }
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
  }
}
</style>