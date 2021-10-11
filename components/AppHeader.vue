<template>
  <div>
    <h2>Memory</h2>
    <button v-on:click="restartGame()" class="restartBtn">Restart Game</button>
    <button v-on:click="exitGame()" class="exitBtn">Exit Game</button>
  </div>
</template>

<script>
export default {
  methods: {
    exitGame() {
      this.$store.commit("EXIT_GAME");
    },
    restartGame() {
      this.$store.commit("RESTART_GAME");
    },
  },
};
</script>

<style scoped>
div {
  position: relative;
}

h2 {
  position: absolute;
  width: 182px;
  height: 40px;
  left: 629px;
  margin-top: 46px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 40.187px;
  line-height: 40px;
  letter-spacing: 0.0882153px;
  color: #ffffff;
}

.restartBtn {
  padding: 16px;
  border-radius: 8px;
  position: absolute;
  width: 170px;
  height: 62px;
  right: 315px;
  margin-top: 46px;
  background: #f4a236;
  border-radius: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #ffffff;
}

.exitBtn {
  padding: 16px;
  border: 8px;
  position: absolute;
  width: 132px;
  height: 62px;
  right: 154px;
  margin-top: 46px;
  background: #d4190c;
  border-radius: 8px;
  flex: none;
  order: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-transform: capitalize;

  /* Shades / 00 */
  color: #ffffff;
}
</style>