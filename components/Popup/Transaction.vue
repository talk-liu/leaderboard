<template>
  <div class="switchGame"
       v-if="switchGameBoll">
    <div class="switchGameBox">
      <h4>
        Notification
      </h4>
      <div>
        <p>
          <span>
            {{poolData.amount}} {{poolData.tokens}}
          </span>
          will send be sent to
          <br />
          <a>
            {{poolData.to_account | to_account}}...
          </a>
        </p>
        <ul class="enter">
          <li>
            <label>
              Enter your password
            </label>
            <input :type="passwordBoll?'password':'text'" v-model="password"/>
            <img v-if="passwordBoll" @click="passwordBoll=!passwordBoll" src="~/assets/icon/show.png"/>
            <img v-else @click="passwordBoll=!passwordBoll" src="~/assets/icon/hidden.png"/>
            <a @click="forgotEve">
              Forgot Password？
            </a>
          </li>
        </ul>
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
      password:'',
      passwordBoll: true
    }
  },
  computed: {
    ...mapState({
      balances: (state) => state.tokens.assets.balances,
    }),
  },

  filters: {
    to_account(value) {
      return value ? value.substring(0, 4) : value
    },
  },
  async mounted() {},
  methods: {
    ...mapMutations('tokens', ['SET_TOKENS', 'INIT_ASSETS', 'INIT_TOKENS']),
    switchTransactionEve(data) {
      console.log(JSON.stringify(data))
      this.poolData = data
      this.switchGameBoll = !this.switchGameBoll
    },
    tokensEve() {
      this.switchGameBoll = false
      this.$emit('transferEve',this.password)
      this.password = ''
    },
    forgotEve(){
      this.switchGameBoll = false
      this.$emit('forgotRefEve')
    }
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
    width: 562px;
    padding-bottom: 30px;
    h4 {
      margin-top: 32px;
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
        span,
        a {
          color: #40dd84;
        }
        a {
          text-decoration: underline;
          font-size: 16px;
        }
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
  .enter{
    padding: 0px 35px;
    margin-top: 14px;
    li{
      position: relative;
      img{
        position: absolute;
        right: 11px;
        top: 44px
      }
    }
    label{
      font-size: 20px;
      line-height: 22px;

    }
    input{
      width: 100%;
      height: 43px;
      line-height: 43px;
      background: #40dd84;
      box-shadow: inset 0px 4px 6px #017e37;
      outline: none;
      border: none;
      border-radius: 11px;
      font-size: 18px;
      text-indent: 10px;
      color: #000;
      margin: 10px 0px;
    }
    a{
      color: #40DD84;
      font-size: 16px;
    }
  }
}
</style>