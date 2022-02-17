<template>
  <div class="games">
    <div class="container">

      <Switchs ref="childFunction" />
      <div class="iframeBox">
        <p class="switch">
          <img @click="switchEve"
               src="~/assets/switch.png" />
        </p>
        <div>
          <iframe v-if="boll"
                  width="100%"
                  height="100%"
                  src="https://playrank.io/flappybird/"> </iframe>
          <p v-else>
            <img @click="boll=!boll"
                 src="~assets/button111.png" />
          </p>

        </div>
      </div>
      <div class="leader">
        <ul>
          <li v-for="(item,key) in attr"
              :key="key">
            <label>{{item.name}}</label>
            <span>{{item.score}}</span>
            <span>{{item.reward}}</span>
          </li>
        </ul>
      </div>
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
  .iframeBox {
    background: url('~/assets/games/back.png') no-repeat;
    background-size: 100% 100%;
    padding: 100px;
    position: relative;

    .switch {
      position: absolute;
      left: 50%;
      bottom: -56px;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
    div {
      width: 980px;
      height: 550px;
      margin: auto;
      padding-right: 8px;
      p {
        background: url('~/assets/back88.png') no-repeat;
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
  }
  .leader {
    margin-top: 38px;
    background: url('~/assets/games/leader.png') no-repeat;
    background-size: 100% 100%;
    height: 630px;
    position: relative;
    width: 100%;
    ul {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 230px;
      width: 100%;
      overflow: auto;
      li {
        padding: 0px 200px;
        font-size: 24px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 10px 0px;
        span,
        label {
          display: block;
          width: 150px;
          text-align: left;
        }
      }
    }
  }
}
</style>