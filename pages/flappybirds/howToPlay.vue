<template>
  <div>
    <Heads />
    <div class="howToplay container">
      <h3>
        <nuxt-link style="float:left" to="/flappybirds">
          <img src="~/assets/return.png"/>
        </nuxt-link>
        How To Play
      </h3>
      <p style="margin-top:50px">
        <img src="~/assets/logo/1.png"/>
      </p>
      <p>
        <img src="~/assets/how/switchToken.png"/>
      </p>
      <p>
        The player chooses one type of tokens after entering the game. Each round of game costs 10 tokens and lasts for 1 hour, during which players improve their scores by playing the game. Based on the final scores, the top three players will receive rewards, and the more players participating in the game, the more rewards they will receive.
      </p>
      <p>
        <img src="~/assets/how/flappybirds1.png"/>
      </p>
      <p>
        The player controls a bird and is tasked with navigating the bird through pairs of green pipes.Each time the bird flies past a pair of pipes, the player gets one point; the game ends if the bird hits the pipes. Players with better scores rank higher.
      </p>
    </div>
  </div>

</template>

<script>
import Heads from '~/components/Heads.vue'


export default {
  name:'howToplay',
  data() {
    return {
    }
  },
  components: { Heads },
}
</script>

<style scoped lang="less">
.howToplay{
  padding: 0px 20px;
  padding-bottom: 36px;
  h3{
    color: #fff;
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 600;
    font-size: 24px;
    line-height: 22px;
    text-align: center;
    text-shadow: 0px 3.56366px 4.98913px rgba(64, 221, 132, 0.3), 0px 0px 3.56366px #40DD84;
    margin-top: 18px;
  }
  p{
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
    font-size: 20px;
  }
}
</style>