<template>
  <div>
    <Heads />
    <div class="transaction container">
      <h3>Transaction</h3>
      <Switchs ref="childFunction" />
      <ul>
        <li>
          <label>Assets</label>
          <div class="assets">
            <div @click="switchEve">
              <p>
                <img src="~/assets/currency/usdt.png" />
                USDT
              </p>
              <img src="~/assets/union-right.png" />
            </div>
          </div>
        </li>
        <li>
          <label>Send to</label>
          <div class="send">
            <input />
          </div>
        </li>
        <li class="bor"></li>
        <li>
          <label>Amount</label>
          <div class="send">
            <input />
          </div>
        </li>
        <li class="history">
          <span class="confirm">CONFIRM</span>
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
import Switchs from '~/components/Popup/Switchs.vue'
export default {
  name: 'TransactionPage',
  components: { Switchs },

  methods: {
    switchEve() {
      this.$refs.childFunction.switchGameBollEve()
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
        padding: 3px 15px;
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