<template>
  <div class="switchGame"
       v-if="switchGameBoll">
    <div class="switchGameBox">
      <h4>
        Link Confirmation
        <img @click="switchGameBollEve"
             src="~assets/close.png" />
      </h4>
      <div class="confirmationBox">
        <div>
          <img src="~/assets/confirmation/logo2.png" />
          <img src="~/assets/confirmation/icon.png" />
          <img src="~/assets/confirmation/logo1.png" />
        </div>
        <p>
          You will be redirected to our
          Exchange Partner RioStox.
        </p>
        <p>
          <a @click="switchGameBollEve">
            <img src="~/assets/confirmation/button2.png" />
          </a>
          <a target="_blank"
             href="https://riostox.com/">
            <img src="~/assets/confirmation/button1.png" />
          </a>
        </p>
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
    padding-bottom: 40px;
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
    .confirmationBox {
      padding: 0px 72px;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 36px;
      }
      p {
        font-size: 18px;
        color: #fff;
        margin-top: 32px;
        text-align: center;
        img {
          cursor: pointer;
        }
      }
    }
  }
}
</style>