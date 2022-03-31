<template>
  <div class="switchGame"
       v-if="switchGameBoll">
    <div class="switchGameBox">
      <h4>
        Connect Wallet
        <img @click="singinBollEve"
             src="~assets/close.png" />
      </h4>
      <div>
        <p>
          <img @click="walletEve"
               width="100%"
               src="~/assets/wallet-2.png" />
        </p>
        <!-- <p>
          <nuxt-link to="/user">
            <img width="100%"
                 src="~/assets/wallet-1.png" />
          </nuxt-link>
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchGameBoll: false,
    }
  },
  methods: {
    singinBollEve() {
      this.switchGameBoll = !this.switchGameBoll
    },
    walletEve() {
      this.$emit('walletEveMethod')
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
    div {
      padding: 0px 50px;
      padding-bottom: 60px;
      p {
        margin-top: 60px;
        cursor: pointer;
      }
    }
  }
}
</style>