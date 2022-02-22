<template>
  <div>

    <Heads />
    <div class="lobby container">
      <ul>
        <li>
          <img class="logo"
               src="~/assets/logo/2.png" />
          <h3>MINION DEFENSE</h3>
          <p>
            Different hordes of minions are attacking the castle!
          </p>
          <p>
            Join the foray and prevent these vermins from approaching the castle gates, protect the royal treasure at all cost.
          </p>
          <nuxt-link to="/leaderboard">
            <img class="buttonPlay"
                 src="~/assets/buttonPlay.png" />
          </nuxt-link>
        </li>
        <li>
          <img class="logo"
               src="~/assets/logo/1.png" />
          <h3>MINION DEFENSE</h3>
          <p>
            Different hordes of minions are attacking the castle!
          </p>
          <p>
            Join the foray and prevent these vermins from approaching the castle gates, protect the royal treasure at all cost.
          </p>
          <nuxt-link to="/game">
            <img class="buttonPlay"
                 src="~/assets/buttonPlay.png" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
  }
}
</style>
