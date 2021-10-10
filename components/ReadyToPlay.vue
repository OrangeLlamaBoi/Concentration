<template>
  <div>
    <h1>Are you ready to play?</h1>
    <div>
      <div class="playerOne">
        <img src="../assets/Players/playerOne.png" alt="player1" />
        <input
          @change="changePlayerOneName"
          type="text"
          placeholder="Name of Player 1"
        />
      </div>
      <div class="playerTwo">
        <img src="../assets/Players/playerTwo.png" alt="player2" />
        <input
          @change="changePlayerTwoName"
          type="text"
          placeholder="Name of Player 2"
        />
      </div>
    </div>
    <button v-on:click="getUserNames()">Let's Play</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    players: "players",
  }),

  methods: {
    changePlayerOneName(e) {
      this.$store.commit("CHANGE_PLAYER_ONE_NAME", e);
    },
    changePlayerTwoName(i) {
      this.$store.commit("CHANGE_PLAYER_TWO_NAME", i);
    },
    getUserNames() {
      this.$store.commit("GETUSERNAMES");
    },
  },
};
</script>

<style  scoped>
div {
  position: relative;
}

.playerOne {
  position: absolute;
  width: 374px;
  height: 319px;
  top: 346px;
  left: 317px;
}

.playerTwo {
  position: absolute;
  width: 374px;
  height: 319px;
  top: 346px;
  left: 757px;
}

img {
  width: 180px;
  height: 222px;
  margin-bottom: 49px;
  margin-left: 97px;
}

h1 {
  position: absolute;
  width: 601px;
  height: 24px;
  left: 423.5px;
  top: 230px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.18px;
  color: #ffffff;
}

input {
  height: 48px;
  width: 374px;
  left: 0px;
  top: 0px;
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid #f1f5f9;
  background: #f1f5f9;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

button {
  position: absolute;
  width: 220px;
  height: 64px;
  left: 614px;
  top: 754px;
  margin-top: 92px;
  background: #0ab169;
  border-radius: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #ffffff;
}
</style>