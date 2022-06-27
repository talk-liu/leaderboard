<template>
  <div class="switchGame"
       v-if="switchGameBoll">
    <div class="switchGameBox">
      <h4>
        Set Transaction Password
        <img @click="switchGameBoll=!switchGameBoll" src="~/assets/close.png"/>
      </h4>
      <div>
        <ul class="enter">
          <li>
            <label>
              Password
            </label>
            <input :type="passwordBoll?'password':'text'" v-model="password"/>
            <img v-if="passwordBoll" @click="passwordBoll=!passwordBoll" src="~/assets/icon/show.png"/>
            <img v-else @click="passwordBoll=!passwordBoll" src="~/assets/icon/hidden.png"/>
          </li>
          <li>
            <label>
              Confirm Your Password
            </label>
            <input :type="confirmPasswordBoll?'password':'text'" v-model="confirmPassword"/>
            <img v-if="confirmPasswordBoll" @click="confirmPasswordBoll=!confirmPasswordBoll" src="~/assets/icon/show.png"/>
            <img v-else @click="confirmPasswordBoll=!confirmPasswordBoll" src="~/assets/icon/hidden.png"/>
          </li>
        </ul>
        <p class="config">
          <img @click="tokensEve"
               src="~/assets/icon/config.png" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
import { SlowBuffer } from 'buffer'
import { mapState, mapMutations } from 'vuex'
import { get, post } from '~/utils/axios.js'
import URL from '~/utils/const/index.js'
export default {
  data() {
    return {
      switchGameBoll: false,
      password:'',
      confirmPassword:'',
      passwordBoll: true,
      confirmPasswordBoll: true
    }
  },
  computed: {
    ...mapState({
      isPassword: (state) => state.tokens.assets.password,
    }),
  },
  watch:{
    isPassword(isPassword){
      this.switchGameBoll = isPassword
    }
  },
  async mounted() {
    this.switchGameBoll = this.isPassword
  },
  methods: {
    async tokensEve() {
      if( this.confirmPassword != '' && (this.confirmPassword == this.password)){
        const web3 = new Web3(window.ethereum)
        this.accounts = await web3.eth.getAccounts()
        this.accounts = await ethereum.enable()
        // 获取签名id
        const notice = this.password
        console.log(notice)
        const personal = await web3.eth.personal.sign(notice, this.accounts[0])
        const data = {
          address: this.accounts[0],
          signature: personal,
          password: notice
        }
        console.log(JSON.stringify(data))

        const { access_token, address, result } = await post(
          URL + 'nexus/oauth/metamask',
          data
        )
        if(result==1){
          localStorage.setItem('access_token', access_token)
          localStorage.setItem('address', address)
          this.$message.info('success')
          this.password = ''
          this.confirmPassword = ''
          this.switchGameBoll = !this.switchGameBoll
        }
      }else{
        this.$message.info('Inconsistent passwords')
      }
    },
    bollEve(){
      this.switchGameBoll = !this.switchGameBoll
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
      padding: 6px 60px;
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
    padding: 0px 60px;
    li{
      margin-top: 42px;
      position: relative;
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
      img{
        position: absolute;
        right: 20px;
        top: 44px;
      }
    }
  }
}
</style>