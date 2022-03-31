<template>
  <div class="switchGame"
       v-if="switchGameBoll">
    <div class="switchGameBox">
      <h4>
        Notification
      </h4>
      <div>
        <p>
          <img src="~/assets/icon/icon.png" />
          <span>Disconnect Wallet?</span>
        </p>
        <p class="config">
          <img @click="switchGameBoll=!switchGameBoll"
               src="~/assets/icon/cancel.png" />
          <img @click="tokensEve"
               src="~/assets/icon/config.png" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      switchGameBoll: false,
      poolData: {},
    }
  },
  computed: {
    ...mapState({
      balances: (state) => state.tokens.assets.balances,
    }),
  },
  async mounted() {},
  methods: {
    ...mapMutations('tokens', ['SET_TOKENS', 'INIT_ASSETS', 'INIT_TOKENS']),
    switchCurrencyEve(data) {
      this.poolData = data
      this.switchGameBoll = !this.switchGameBoll
    },
    tokensEve() {
      this.switchGameBoll = false
      this.$emit('tokensMethod')
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
    padding-bottom: 30px;
    h4 {
      margin-top: 16px;
      padding: 0px 60px;
      font-size: 20px;
      text-align: center;
      img {
        float: right;
        cursor: pointer;
        padding: 5px;
      }
    }
    div {
      // height: 300px;
      p {
        font-size: 24px;
        color: #fff;
        text-align: center;
        margin-top: 60px;
      }
      .config {
        margin-top: 42px;
        margin-bottom: 24px;
        img {
          margin: 0px 30px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>