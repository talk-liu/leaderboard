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
      <table border="1">
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
          <tr>
            <td>0x26x...</td>
            <td>0x26x...</td>
            <td>+500 RFUEL</td>
            <td>2022-2-16 14:25:16</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td>0x26x2222222...</td>
            <td>0x26x...</td>
            <td>+500 RFUEL</td>
            <td>2022-2-16 14:25:16</td>
            <td>Approved</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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