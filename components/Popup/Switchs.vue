<template>
  <div class="switchGame"
       v-if="switchGameBoll">
    <div class="switchGameBox">
      <h4>
        Switch Tokens
        <img @click="switchGameBollEve"
             src="~assets/close.png" />
      </h4>
      <div>
        <ul>
          <li v-for="(item,key) in tokens"
              :key="key">
            <p class="list">
              <img width="44px"
                   :src="item.img" />
              <span>
                {{item.name}}
              </span>
            </p>
            <p class="border"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchGameBoll: false,
      tokens: [
        {
          img: require('~/assets/currency/rfuel.png'),
          name: 'RFUEL',
        },
        {
          img: require('~/assets/currency/eth.png'),
          name: 'ETH',
        },
        {
          img: require('~/assets/currency/usdt.png'),
          name: 'USDT',
        },
      ],
    }
  },
  methods: {
    switchGameBollEve() {
      this.switchGameBoll = !this.switchGameBoll
    },
  },
}
</script>

<style scoped lang="less">
.switchGame {
  color: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  .switchGameBox {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 12;
    background: url('~/assets/propr.png') no-repeat;
    background-size: 100% 100%;
    width: 462px;
    height: 390px;
    h4 {
      margin-top: 26px;
      padding: 0px 60px;
      font-size: 20px;
      img {
        float: right;
        cursor: pointer;
        padding: 5px;
      }
    }
    div {
      text-align: center;
      margin-top: 30px;
      padding: 0px 44px;
      p.list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 16px 0px;
        cursor: pointer;
        span {
          display: block;
          width: 90px;
          color: #ffffff;
          font-size: 18px;
          text-align: left;
          text-shadow: 0px 5.1841px 7.25774px rgba(64, 221, 132, 0.3),
            0px 0px 5.1841px #40dd84;
        }
      }
      .border {
        height: 3px;
        background: linear-gradient(
          89.96deg,
          rgba(64, 221, 132, 0) -1.12%,
          #40dd84 32.05%,
          #ffffff 46.79%,
          #40dd84 59.43%,
          rgba(64, 221, 132, 0) 99.97%
        );
      }
    }
  }
}
</style>