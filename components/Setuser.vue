<!-- Please remove this file from your project -->
<template>
  <div class="setUser">
    <div class="container">
      <ul>
        <li>
          <p class="linear"></p>
          <h4>SET USERNAME</h4>
          <div>
            <input />
          </div>
          <h5>Username Available</h5>
          <p class="linear"></p>
        </li>
        <li class="tips">
          <p>The username will be linked to your GAIA Wallet address, you cannot change your username once set.</p>
          <span class="confirm">CONFIRM</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  async mounted() {},
  methods: {},
}
</script>
<style scoped lang="less">
.setUser {
  position: relative;
  height: 100vh;
  ul {
    color: #40dd84;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    .linear {
      background: linear-gradient(
        89.96deg,
        rgba(64, 221, 132, 0) -1.12%,
        #40dd84 32.05%,
        #ffffff 46.79%,
        #40dd84 59.43%,
        rgba(64, 221, 132, 0) 99.97%
      );
      height: 1px;
    }
    li {
      text-align: center;
      h4 {
        font-size: 24px;
        margin: 16px 0px 21px 0px;
      }
      h5 {
        font-size: 18px;
        margin: 7px 0px 10px 0px;
        font-weight: 100;
      }
      div {
        input {
          background: url('~/assets/userButton.png') no-repeat;
          background-size: 100% 100%;
          width: 230px;
          height: 53px;
          display: inline-block;
          line-height: 53px;
          outline: none;
          text-align: center;
          font-size: 24px;
          border: none;
          color: #fff;
          padding: 0px 60px;
        }
      }
    }
    .tips {
      margin-top: 17px;
      p {
        font-size: 14px;
        color: #fff;
      }
      span {
        margin-top: 20px;
      }
    }
  }
}
</style>
