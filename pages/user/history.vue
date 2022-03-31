<template>
  <div>
    <Heads />
    <div class="history container">
      <nuxt-link to="/user">
        <img src="~/assets/return.png" />
      </nuxt-link>
      <h3>
        Claim History
      </h3>
      <table border="1"
             v-if="loading">
        <thead>
          <tr>
            <th>Game</th>
            <th>Round</th>
            <th>Rewards</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,key) in datas"
              :key="key">
            <td>{{item.asset_id | capitalize}}</td>
            <td>{{item.round}}</td>
            <td>+{{item.amount}}</td>
            <td>{{item.create_time}}</td>
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
import URL from '~/utils/const/index.js'
export default {
  name: 'IndexPage',
  data() {
    return {
      datas: [],
      loading: false,
    }
  },
  filters: {
    capitalize(value) {
      switch (value) {
        case 31:
          return 'PLAY'
        case 32:
          return 'RFUEL'
        case 33:
          return 'USDT'
      }
    },
  },
  async mounted() {
    const { data } = await post(URL + 'nexus/claim/history')
    this.datas = data
    console.log(this.datas)
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
    }
  }
}
</style>