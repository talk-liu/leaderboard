<template>
  <div>
    <Loading />
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="less">
* {
  margin: 0px;
  padding: 0px;
}
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
}
body,
html {
  background: #15181d;
}
span.confirm {
  background: url('~/assets/confirm.png') no-repeat;
  background-size: 100% 100%;
  display: block;
  width: 125px;
  height: 36px;
  line-height: 36px;
  margin: auto;
  cursor: pointer;
}
.container {
  margin: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1440px) {
  .container {
    max-width: 1280px;
  }
}
</style>

