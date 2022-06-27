<template>
  <div>

    <Heads />
    <div class="lobby container">
      <ul>
        <li class="lobbyBack1">
          <img class="logo"
               src="~/assets/logo/2.png" />
          <h3>MINION DEFENSE</h3>
          <div>
            <p>
              Different hordes of minions are attacking the castle!
            </p>
            <p>
              Join the foray and prevent these vermins from approaching the castle gates, protect the royal treasure at all cost.
            </p>
          </div>
          <!-- <nuxt-link to="/towerdefenses">
            <img class="buttonPlay"
                 src="~/assets/buttonPlay.png" />
          </nuxt-link> -->
          <img @click="loginIs('towerdefenses')"
               class="buttonPlay"
               src="~/assets/buttonPlay.png" />
        </li>
        <li>
          <img class="logo"
               style="width: 300px;margin: 40px 0px;"
               src="~/assets/logo/1.png" />
          <h3>LITTLE BIRD</h3>
          <div>
            <p>
              Little bird is an arcade-style game in which the player controls the bird Faby, which moves persistently to the right. The player is tasked with navigating Faby through pairs of pipes
              that
              have equally sized gaps placed at random heights. </p>
            <!-- <p>
            Join the foray and prevent these vermins from approaching the castle gates, protect the royal treasure at all cost.
          </p> -->
          </div>
          <!-- <nuxt-link to="/flappybirds">
            <img class="buttonPlay"
                 src="~/assets/buttonPlay.png" />
          </nuxt-link> -->
          <img @click="loginIs('flappybirds')"
               class="buttonPlay"
               src="~/assets/buttonPlay.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapState({
      userInfo: (state) => state.tokens,
    }),
  },
  methods: {
    loginIs(url) {
      const access_token = localStorage.getItem('access_token')
      if (access_token) {
        this.$router.push({ name: url })
      } else {
        this.$message.info('Please login first')
      }
    },
  },
}
</script>
<style scoped lang="less">
.lobby {
  ul {
    color: #fff;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 300px);
    margin-top: 33px;
    li {
      background: url('~/assets/lobbyBack.png') no-repeat;
      background-size: 100% 100%;
      text-align: center;
      padding: 0px 100px;
      height: 460px;
      h3 {
        font-size: 24px;
        margin-bottom: 10px;
        margin-top: -20px;
      }
      div {
        height: 100px;
      }
      p {
        font-size: 16px;
      }
      .buttonPlay {
        margin-top: 42px;
        cursor: pointer;
      }
      .logo {
        width: 150px;
        margin-top: 30px;
      }
    }
    .lobbyBack1 {
      background: url('~/assets/lobbyBack1.png') no-repeat;
    }
  }
}
</style>
