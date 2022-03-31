<template>
  <div>
    <Heads />
    <div class="history container">
      <nuxt-link to="/transaction">
        <img src="~/assets/return.png" />
      </nuxt-link>
      <h3>
        Transaction History
      </h3>
      <table border="1"
             v-if="loading">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,key) in datas"
              :key="key" v-if="item" v-show="item.fromAddress && item.toAddress">
            <td>{{item.fromAddress}}</td>
            <td>{{item.toAddress}}</td>
            <td class="tips"
                :class="{'fromAccount':item.boll}">{{item.boll?'-':'+'}}{{item.amount}} {{item.assetSymbol}}</td>
            <td>{{ item.blockTime | moment("YYYY-MM-DD HH:mm:ss") }}</td>
            <td><a :href="'https://scan.gaiaopen.com/tx/'+item.txHash">see</a></td>
          </tr>
        </tbody>
      </table>
      <p v-else
         style="text-align: center;margin: 20px 0px;">
        <a-spin />
      </p>
    </div>
  </div>
</template>

<script>
import { get, post } from '~/utils/axios.js'
import { mapState, mapMutations } from 'vuex'
import URL from '~/utils/const/index.js'
export default {
  name: 'IndexPage',
  data() {
    return {
      datas: [],
      loading: false,
    }
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.tokens.assets,
    }),
  },
  async mounted() {
    const { datas } = await post(URL + 'nexus/history')
    console.log(this.userInfo.accountName)
    for (let i in datas) {
      if(datas[i].assetSymbol == 'gas'){
        delete datas[i]
      }else{
        if (this.userInfo.accountName == datas[i].fromAccount) {
          datas[i]['boll'] = true
        } else {
          datas[i]['boll'] = false
        }
      }
    }
    console.log(JSON.stringify(datas))
    this.datas = datas
    this.loading = true
  },
}
</script>
<style scoped lang="less">
.history {
  color: #fff;
  margin-top: 26px;
  h3 {
    font-size: 24px;
    text-shadow: 0px 3.56366px 4.98913px rgba(64, 221, 132, 0.3),
      0px 0px 3.56366px #40dd84;
    font-style: italic;
    text-align: center;
    margin-top: 68px;
    margin-bottom: 43px;
  }
  table,
  th,
  thead,
  td {
    border: none;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    thead {
      background: url('~/assets/transaction/assets.png') no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 53px;
      margin-bottom: 44px;
      th {
        font-size: 18px;
        text-align: center;
      }
    }
    tbody {
      tr {
        height: 53px;
      }
      td {
        text-align: center;
      }
      .tips {
        color: #40dd84;
      }
      .fromAccount {
        color: red;
      }
    }
  }
}
</style>