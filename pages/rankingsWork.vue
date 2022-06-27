<template>
  <div>
    <Heads />
    <div class="rankingsWork container">
      <h2>
        <nuxt-link style="float:left" :to="$route.query.name">
          <img src="~/assets/return.png"/>
        </nuxt-link>
        HOW RANKINGS WORK
      </h2>
      <div>
        <h3>1.To logIn: Type playrank.io into your browser, enter the website and click “Connect Wallet” to connect to Metamask wallet.</h3>
        <p><img src="~/assets/rankingsWork/1.png"/></p>
        <p><img src="~/assets/rankingsWork/2.png"/></p>
        <h3>
          2. To make a transfer: Click your account and enter your asset page. Click “Send & Receive” to make a transfer or view trading history. 
        </h3>
        <p><img src="~/assets/rankingsWork/3.png"/></p>
        <p><img src="~/assets/rankingsWork/4.png"/></p>
        <p><img src="~/assets/rankingsWork/5.png"/></p>
        <h3>
          3. To buy cryptocurrency: Click Buy Crypto to enter the exchange and buy cryptocurrency.
        </h3>
        <p><img src="~/assets/rankingsWork/6.png"/></p>
        <p><img src="~/assets/rankingsWork/7.png"/></p>
        <h3>
          4. To receive rewards: Choose a game, click “Play” and start to play. You will get rewards if you rank among the top 3 players.
        </h3>
        <p><img src="~/assets/rankingsWork/8.png"/></p>
      </div>
    </div>
  </div>

</template>

<script>
import Heads from '~/components/Heads.vue'


export default {
  name:'rankingsWork',
  data() {
    return {
    }
  },
  components: { Heads },
}
</script>

<style scoped lang="less">
.rankingsWork{
  
  padding: 0px 20px;
  padding-bottom: 36px;
  h2{
    color: #fff;
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 600;
    font-size: 26px;
    line-height: 22px;
    text-align: center;
    text-shadow: 0px 3.56366px 4.98913px rgba(64, 221, 132, 0.3), 0px 0px 3.56366px #40DD84;
    margin-top: 18px;
  }
  div{
    text-align: center;
    color: #fff;
    h3{
      margin-top: 31px;
      margin-bottom: 37px;
      font-size: 20px;

    }
  }
}

</style>