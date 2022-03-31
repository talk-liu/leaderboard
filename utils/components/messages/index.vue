<template>
  <div class="message"
       v-show="visible">
    <p>
      <img src="~/assets/icon/yes1.png" />{{message}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '成功',
    }
  },
}
</script>
<style scoped lang="less">
.message {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0%);
  top: 60px;
  color: #fff;
  z-index: 111;
  background: radial-gradient(
      38.87% 55.61% at 50% 113.95%,
      rgba(99, 254, 180, 0.5) 0%,
      rgba(6, 219, 100, 0) 100%
    ),
    radial-gradient(
      91.33% 63.32% at 50% -13.33%,
      rgba(99, 254, 180, 0.5) 0%,
      rgba(6, 219, 100, 0) 71.97%
    ),
    #121621;
  border-radius: 10px;
  padding: 2px 15px;
  border: 1px solid #fff;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-right: 7px;
    }
  }
}
</style>
