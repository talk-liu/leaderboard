<template>
  <div class="switchGame"
       v-if="switchGameBoll">
    <div class="switchGameBox">
      <h4>
        Switch Game
        <img @click="switchGameBollEve"
             src="~assets/close.png" />
      </h4>
      <div>
        <p>
          <nuxt-link to="/flappybirds">
            <img width="270px"
                 src="~assets/logo2.png" />
          </nuxt-link>
        </p>
        <p>
          <nuxt-link to="/towerdefenses">
            <img width="150px"
                 src="~assets/logo1.png" />
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchGameBoll: false,
    }
  },
  methods: {
    switchGameBollEve() {
      this.switchGameBoll = !this.switchGameBoll
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
    height: 390px;
    h4 {
      padding: 24px 60px;
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
      p {
        margin: 40px 0px;
      }
    }
  }
}
</style>