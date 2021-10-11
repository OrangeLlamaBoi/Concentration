<template>
  <div>
    <h2>Well Done!</h2>
    <div v-if="players[0].points > players[1].points">
      <h1>{{ players[0].name }}</h1>
    </div>
    <div v-else>
      <h1>{{ players[1].name }}</h1>
    </div>
    <img class="winnerImg" src="../assets/Players/winner.png" alt="" />
    <img class="trophyImg" src="../assets/Players/icon.png" alt="" />
    <ul v-if="players[0].points > players[1].points">
      <li class="winnerContainer">
        <img class="winnerImage" :src="players[0].img" alt="" />
        <p class="winnerPlace">1st place</p>
        <p class="winnerName">{{ players[0].name }}</p>
        <p class="winnerScore">Score: {{ players[0].points }}</p>
      </li>
      <li class="otherContainer">
        <img class="otherImage" :src="players[1].img" alt="" />
        <p class="otherPlace">2st place</p>
        <p class="otherName">{{ players[1].name }}</p>
        <p class="otherScore">Score: {{ players[1].points }}</p>
      </li>
    </ul>
    <ul v-else>
      <li class="winnerContainer">
        <img class="winnerImage" :src="players[1].img" alt="" />
        <p class="winnerPlace">1st place</p>
        <p class="winnerName">{{ players[1].name }}</p>
        <p class="winnerScore">Score: {{ players[1].points }}</p>
      </li>
      <li class="otherContainer">
        <img class="otherImage" :src="players[0].img" alt="" />
        <p class="otherPlace">2st place</p>
        <p class="otherName">{{ players[0].name }}</p>
        <p class="otherScore">Score: {{ players[0].points }}</p>
      </li>
    </ul>
    <button v-on:click="exitGame()">Play Again</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    players: "players",
  }),
  methods: {
    exitGame() {
      this.$store.commit("EXIT_GAME");
    },
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

div {
  position: relative;
}

button {
  position: absolute;
  width: 164px;
  height: 56px;
  left: 638px;
  top: 822px;
  background: #a7daff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #164464;
}

.winnerContainer {
  position: absolute;
  width: 535px;
  height: 101.37px;
  left: 451px;
  top: 579px;
  background: linear-gradient(92.15deg, #ffd975 35.31%, #ffffff 135.61%);
  border-radius: 7.8023px;
}

.winnerImage {
  position: absolute;
  width: 58.52px;
  height: 72.17px;
  left: 40px;
  top: 13.5px;
}

.trophyImg {
  position: absolute;

  left: 374px;
  top: 605px;
}

.winnerPlace {
  position: absolute;
  width: 98.5px;
  height: 35.11px;
  left: 139px;
  top: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #0d4477;
}

.winnerName {
  position: absolute;
  width: 82.9px;
  height: 35.11px;
  left: 270px;
  top: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #0d4477;
}

.winnerScore {
  position: absolute;
  width: 101.43px;
  height: 35.11px;
  left: 385px;
  top: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #0d4477;
}

.winnerImg {
  position: absolute;
  width: 332px;
  height: 232px;
  left: 50%;
  top: 309px;
}

.otherContainer {
  position: absolute;
  width: 535px;
  height: 101.37px;
  left: 451px;
  top: 691px;
  background: #ffffff;
  border-radius: 7.8023px;
}

.otherImage {
  position: absolute;
  width: 58.52px;
  height: 72.17px;
  left: 40px;
  top: 13.5px;
}

.otherPlace {
  position: absolute;
  width: 98.5px;
  height: 35.11px;
  left: 139px;
  top: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #0d4477;
}

.otherName {
  position: absolute;
  width: 82.9px;
  height: 35.11px;
  left: 270px;
  top: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #0d4477;
}

.otherScore {
  position: absolute;
  width: 101.43px;
  height: 35.11px;
  left: 385px;
  top: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #0d4477;
}

h2 {
  position: absolute;

  width: 267px;
  height: 24px;
  top: 168px;
  left: 591px;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.18000000715255737px;
  text-align: center;
  color: #ffffff;
}

h1 {
  width: 280px;
  height: 24px;
  position: absolute;
  top: 234px;
  left: 585px;
  font-family: Poppins;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.18000000715255737px;
  text-align: center;
  color: #ffffff;
}
</style>