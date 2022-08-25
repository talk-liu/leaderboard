<template>
  <div class="switchGame" v-if="switchGameBoll">
    <div class="switchGameBox">
      <h4>
        Switch Tokens
        <img @click="switchCurrencyEve" src="~assets/close.png" />
      </h4>
      <div>
        <ul>
          <li
            v-for="(item, key) in balances"
            :key="key"
            @click="tokensEve(item)"
            v-show="item.name"
          >
            <p class="list">
              <img width="44px" :src="item.img" />
              <span>
                {{ item.name }}
                <img
                  v-if="poolData.name === item.name"
                  src="~/assets/icon/yes.png"
                />
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
import { mapState, mapMutations } from "vuex";
import { post } from "~/utils/axios.js";
import URL from "~/utils/const/index.js";
export default {
  data() {
    return {
      switchGameBoll: false,
      poolData: {},
    };
  },
  computed: {
    ...mapState({
      balances: (state) => state.tokens.assets.balances,
    }),
  },
  async mounted() {
    // const { data } = await post(URL + 'nexus/assets')
    // const res = data.data.balances
    // for (let i in res) {
    //   switch (res[i].assetId) {
    //     case 31:
    //       res[i]['name'] = 'play'
    //       res[i]['img'] = require('~/assets/currency/play.png')
    //       break
    //     case 32:
    //       res[i]['name'] = 'rfuel'
    //       res[i]['img'] = require('~/assets/currency/rfuel.png')
    //       break
    //     case 33:
    //       res[i]['name'] = 'usdt'
    //       res[i]['img'] = require('~/assets/currency/usdt.png')
    //       break
    //   }
    // }
    // localStorage.setItem('assetId', res[1].assetId)
    // this.$emit('tokensMethod', res[1])
    // this.SET_TOKENS(res)
  },
  methods: {
    ...mapMutations("tokens", ["SET_TOKENS", "INIT_ASSETS", "INIT_TOKENS"]),
    switchCurrencyEve(data) {
      this.poolData = data;
      this.switchGameBoll = !this.switchGameBoll;
    },
    tokensEve(item) {
      this.switchGameBoll = false;
      localStorage.setItem("assetId", item.assetId);
      this.$emit("tokensMethod", item);
      this.INIT_TOKENS(item);
    },
  },
};
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
    background: url("~/assets/propr.png") no-repeat;
    background-size: 100% 100%;
    width: 462px;
    padding-bottom: 30px;
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
          position: relative;
          img {
            position: absolute;
            top: 3px;
            right: 0px;
          }
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
