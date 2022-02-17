<!-- Please remove this file from your project -->
<template>
  <div class="leader">
    <div class="container">
      <div class="switch">
        <img @click="switchEve"
             src="~/assets/switch.png" />
      </div>
      <Switchs ref="childFunction" />
      <div class="containerBox">
        <div class="left">
          <ul class="leftBox">
            <li class="balance">
              <img src="~/assets/logo1.png" />
              <h3>
                BALANCE
                <p>
                  100 PLAYTOKEN
                </p>
              </h3>
            </li>
            <li class="round">
              <h4>
                ROUND 1 RANKINGS
              </h4>
              <ul>
                <li>
                  <div>
                    <p v-for="(item,key) in attr"
                       :key="key">
                      <img src="" />
                      <label class="name">{{item.name}}</label>
                      <label>{{item.score}}</label>
                      <label>{{item.reward}}</label>
                      <!-- <a href="javascript:;">CLAIM</a> -->
                    </p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="game">
          <div style="width:500px;height:720px">
            <iframe v-if="boll"
                    width="100%"
                    height="100%"
                    src="https://playrank.io/towerdefense/"> </iframe>
            <div v-else
                 class="back">
              <img @click="boll=!boll"
                   src="~assets/button111.png" />
            </div>
          </div>
        </div>
        <div class="right">
          <div>
            <p>HOW TO PLAY</p>
            <p style="width:220px">HOW RANKINGS WORK</p>
            <p>FULL SCREEN</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switchs from './Switchs.vue'
import { get, post } from '~/utils/axios.js'
import URL from '~/utils/const/index.js'
import Web3 from 'web3'
export default {
  components: { Switchs },
  data() {
    return {
      attr: [],
      boll: false,
    }
  },
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
    localStorage.setItem('gameid', 1)
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
        console.log(attrs)
        this.attr = attrs
        console.log(decodeData, 'talk', attrs)
      }
    },
  },
}
</script>
<style scoped lang="less">
.leader {
  .container {
    background: #000;
    position: relative;
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
      margin: 0px 24px;
      .back {
        background: url('~/assets/back66.png') no-repeat;
        background-size: 100% 100%;
        height: 100%;
        width: 100%;
        position: relative;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
        }
      }
    }
    .left {
      background: url('~/assets/left.png') no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 800px;
      // margin-right: 40px;
      margin: 0px 31px;
    }
    .right {
      width: 100%;
      background: url('~/assets/right.png') no-repeat;
      background-size: 100% 100%;
      height: 800px;
      margin: 0px 32px;
      position: relative;
      div {
        position: absolute;
        top: 50%;

        left: 50%;

        transform: translate(-50%, -50%);
        p {
          background: url('~/assets/button1.png') no-repeat;
          background-size: 100% 100%;
          width: 157px;
          height: 41px;
          text-align: center;
          line-height: 41px;
          margin: auto;
          margin-top: 50px;
        }
      }
    }
    .leftBox {
      padding: 0px 8px;
      padding-top: 66px;
      .balance {
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 0px 3.56366px 4.98913px rgba(64, 221, 132, 0.3),
          0px 0px 3.56366px #40dd84;
        h3 {
          font-size: 17px;
          p {
            font-size: 14px;
            color: #27f17f;
          }
        }
      }
      .round {
        h4 {
          background: url('~/assets/title.png') no-repeat;
          background-size: 100% 100%;
          height: 46px;
          line-height: 46px;
          text-align: center;
          font-size: 16px;
        }
        ul {
          padding: 0px 25px;
          margin-top: -11px;
          li {
            background: url('~/assets/title1.png') no-repeat;
            background-size: 100% 100%;
            height: 200px;
            font-size: 13px;
            padding: 8px;
            div {
              height: 150px;
              overflow: auto;
            }
            p {
              margin: 10px 0px;
            }
            a {
              color: #fff;
            }
            label {
              margin-right: 15px;
              width: 40px;
              display: inline-block;
            }
            .name {
              width: 55px;
            }
          }
        }
      }
    }
  }
}
</style>
