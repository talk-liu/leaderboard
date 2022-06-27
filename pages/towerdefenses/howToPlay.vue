<template>
  <div>
    <Heads />
    <div class="howToplay container">
      <h3>
        <nuxt-link style="float:left" to="/towerdefenses">
          <img src="~/assets/return.png"/>
        </nuxt-link>
        How To Play
      </h3>
      <p>
        <img src="~/assets/logo/2.png"/>
      </p>
      <p>
        The player chooses one type of tokens after entering the game. Each round of game costs 10 tokens and lasts for 1 hour, during which players improve their scores by playing the game. Based on the final scores, the top three players will receive rewards, and the more players participating in the game, the more rewards they will receive.
      </p>
      <p>
        <img src="~/assets/how/switchToken.png"/>
      </p>
      <p>
        Monsters will keep moving towards the end zone along the path after the battle begins. The player is tasked with building towers strategically to attack and obstruct monsters, preventing them from reaching the exit and winning rewards.
      </p>
      <p>
        <img src="~/assets/how/towerdefenses1.png"/>
      </p>
      <p>
        The number of monsters increases as the battle continues, and player needs to upgrade towers at a faster pace. Two tower of the same level can be integrated to form an upgraded tower, which has improved attack speed and damage and thus wipes out monsters more quickly.      </p>
      <p>
        <img src="~/assets/how/towerdefenses2.png"/>
      </p>
      <p>
        The player can receive coins randomly during the game. Coins can improve their final scores.
      </p>
      <p>
        <img src="~/assets/how/towerdefenses3.png"/>
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
    font-size: 26px;
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