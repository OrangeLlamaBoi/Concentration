<template>
  <div>
    <h2>Memory</h2>
    <button class="restartBtn">Restart Game</button>
    <button class="exitBtn">Exit Game</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  position: relative;
}

h2 {
  width: 182px;
  height: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 40.187px;
  line-height: 40px;
  letter-spacing: 0.0882153px;
}

.restartBtn {
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  width: 170px;
  height: 62px;
  text-transform: capitalize;
  color: #ffffff;
  background: #f4a236;
  border-radius: 8px;
  padding: 16px;
}

.exitBtn {
  height: 62px;
  width: 132px;
  left: 0px;
  top: 0px;
  border-radius: 8px;
  padding: 16px;
  background: #d4190c;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #ffffff;
}
</style>