<template>
  <div>
    <Heads />
    <div class="transaction container">
      <h3>Transaction</h3>
      <Currency @tokensMethod="tokensMethod"
                ref="currencyFunction" />
      <Transaction @transferEve="transferEve" @forgotRefEve="forgotRefEve"
                   ref="transactionFunction" />
      <Password ref="passwordFunction" />
      <ul>
        <li>
          <label>Assets</label>
          <div class="assets">
            <div @click="switchEve">
              <p>
                <img :src="tokens.img" />
                {{tokens.name}}
              </p>
              <span>
                Balance: {{tokens.balance}}
                <img src="~/assets/union-right.png" />
              </span>
            </div>
          </div>
        </li>
        <li>
          <label>Send to</label>
          <div class="send">
            <input v-model="to_account" />
          </div>
        </li>
        <li class="bor"></li>
        <li>
          <label>Amount</label>
          <div class="send">
            <input oninput="value=value.replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g,'$1')" v-model="amount" />
          </div>
        </li>
        <li class="history">
          <span class="confirm"
                @click="confirmEve">CONFIRM</span>
          <p>
            You can view your
            <nuxt-link to="/transaction/history">history</nuxt-link>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { get, post } from '~/utils/axios.js'
import URL from '~/utils/const/index.js'
import Currency from '~/components/Popup/Currency.vue'
import Transaction from '~/components/Popup/Transaction.vue'
import Password from '~/components/Popup/Password.vue'

export default {
  name: 'TransactionPage',
  data() {
    return { to_account: '', amount: '' }
  },
  computed: {
    ...mapState({
      tokens: (state) => state.tokens.tokens
    }),
  },
  components: { Currency, Transaction, Password },
  methods: {
    switchEve() {
      this.$refs.currencyFunction.switchCurrencyEve(this.tokens)
    },
    async transferEve(password) {
      const res = await post(URL + 'nexus/transfer', {
        to_account: this.to_account,
        asset_id: this.tokens.assetId,
        amount: parseFloat(this.amount),
        remark: '测试',
        password: password
      })
      this.to_account = ''
      this.amount =  ''
      if (res && res.data.data == null) {
        this.$message.error(res.data.errorMsg)
      } else {
        console.log(res.data, 'transaction_id')
        this.$message.info(res.message)
      }
    },
    forgotRefEve(){
        this.$refs.passwordFunction.bollEve()
    },
    async confirmEve() {
      console.log(this.to_account, this.amount)
      if (this.to_account && this.amount) {
        const data = {
          amount: this.amount,
          to_account: this.to_account,
          tokens: this.tokens.name,
        }
        this.$refs.transactionFunction.switchTransactionEve(data)
      } else {
        this.$message.info('Please fill in address and amount.')
      }
    },
    tokensMethod(item) {
      this.tokens = item
    },
  },
}
</script>

<style scoped lang="less">
.transaction {
  h3 {
    font-size: 24px;
    text-align: center;
    color: #fff;
    font-style: italic;
    margin-top: 66px;
  }
  ul {
    .bor {
      margin: 44px 0px;
      height: 4px;
      background: linear-gradient(
        89.96deg,
        rgba(64, 221, 132, 0) -1.12%,
        #40dd84 32.05%,
        #ffffff 46.79%,
        #40dd84 59.43%,
        rgba(64, 221, 132, 0) 99.97%
      );
    }
    .history {
      span {
        text-align: center;
        color: #fff;
        font-size: 20px;
        margin-top: 42px;
        padding: 0px 15px;
      }
      p {
        text-align: center;
        font-size: 16px;
        color: #fff;
        margin-top: 50px;
        a {
          color: #40dd84;
        }
      }
    }
    li {
      label {
        color: #fff;
        font-size: 24px;
        font-weight: 500;
      }
      .assets {
        background: url('~/assets/transaction/assets.png') no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 75px;
        margin-bottom: 44px;
        line-height: 75px;
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 27px;
          cursor: pointer;
        }
        p {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          color: #fff;
          img {
            margin-right: 10px;
            width: 35px;
          }
        }
        span {
          color: #fff;
          img {
            margin-left: 10px;
          }
        }
      }
      .send {
        input {
          background: url('~/assets/userButton.png') no-repeat;
          background-size: 100% 100%;
          width: 100%;
          height: 43px;
          line-height: 43px;
          background: #40dd84;
          box-shadow: inset 0px 4px 6px #017e37;
          outline: none;
          border: none;
          border-radius: 11px;
          font-size: 18px;
          text-indent: 37px;
        }
      }
    }
  }
}
</style>