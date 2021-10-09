<template>
  <div class="background">
    <h1>Are you ready to play?</h1>
    <div class="playerContainer">
      <div>
        <img src="../assets/Players/playerOne.png" alt="player1" />
        <input type="text" placeholder="Name of Player 1" />
      </div>
      <div>
        <img src="../assets/Players/playerTwo.png" alt="player2" />
        <input type="text" placeholder="Name of Player 2" />
      </div>
    </div>
    <button>Let's Play</button>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
h1 {
  position: static;
  width: 601px;
  height: 24px;
  left: 106.5px;
  top: 0px;
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
  padding: 12px, 16px;
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
  position: static;
  width: 220px;
  height: 64px;
  left: 297px;
  top: 527px;
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

.background {
  background: #3e92ce;
  height: 100vh;
}

.playerContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 814px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>