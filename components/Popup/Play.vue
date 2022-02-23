<template>
  <div class="play"
       v-if="switchGameBoll">
    <div class="playBox">
      <div>
        <h3>
          <span>1 PLAY TOKEN</span> IS REQUIRED
          TO PLAY THIS GAME.
        </h3>
        <h3>
          Balance:
          <span>100.000 PLAY</span>
        </h3>
        <p>
          <img @click="switchGameBoll=!switchGameBoll"
               src="~/assets/claims/cancel.png" />
          <img @click="childPlayEve"
               src="~/assets/claims/confirm.png" />
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
    playBollEve() {
      this.switchGameBoll = !this.switchGameBoll
    },
    childPlayEve() {
      this.switchGameBoll = !this.switchGameBoll
      this.$emit('childPlayMethod')
    },
  },
}
</script>

<style scoped lang="less">
.play {
  color: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  .playBox {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 12;
    background: url('~/assets/claims/playBack.png') no-repeat;
    background-size: 100% 100%;
    width: 662px;
    div {
      position: relative;
      padding: 30px 120px;
      padding-bottom: 80px;
      p {
        width: 100%;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0%);
        bottom: -35px;
        text-align: center;
        img {
          margin: 0px 50px;
          cursor: pointer;
        }
      }
    }
    h3 {
      color: #fff;
      font-size: 28px;
      line-height: 44px;
      margin-top: 23px;
      text-align: center;
      span {
        color: #f3ff68;
      }
    }
  }
}
</style>