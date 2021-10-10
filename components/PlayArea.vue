<template>
  <div class="playCardContainer">
    <div class="playerOne">
      <img class="playerImage" src="~/assets/Players/playerOne.png" alt="" />
      <p class="playerName">{{ players[0].name }}</p>
      <p class="playerScore">Score: {{ players[0].points }}</p>
    </div>
    <Card class="cardPosition" />
    <div class="playerTwo">
      <img class="playerImage" src="~/assets/Players/playerTwo.png" alt="" />
      <p class="playerName">{{ players[0].name }}</p>
      <p class="playerScore">Score: {{ players[1].points }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    players: "players",
  }),
};
</script>

<style scoped>
.playCardContainer {
  position: relative;
}

.playerImage {
  margin: 28px 34px 44px 34px;
  width: 139.74px;
  height: 146.62px;
}

.playerName {
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 6px;
}

.playerScore {
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #ffffff;
}

.playerOne {
  position: absolute;
  width: 220px;
  height: 344px;
  left: 51px;
  top: 394px;
  background: linear-gradient(
    160.65deg,
    rgba(255, 255, 255, 0.6) 0.74%,
    rgba(255, 255, 255, 0.1) 102.03%
  );
  border-radius: 8px;
}

.playerTwo {
  position: absolute;
  width: 220px;
  height: 344px;
  right: -365px;
  top: 394px;
  background: linear-gradient(
    160.65deg,
    rgba(255, 255, 255, 0.6) 0.74%,
    rgba(255, 255, 255, 0.1) 102.03%
  );
  border-radius: 8px;
}
</style>