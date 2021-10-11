<template>
  <div>
    <ul>
      <li v-for="cards in card" :key="cards.id" v-on:click="flipCard(cards)">
        <img v-if="cards.open" :src="cards.frontImage" alt="" />
        <img v-else :src="cards.backImage" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    card: "card",
    playerHasWon: "playerHasWon",
  }),

  methods: {
    flipCard(cards) {
      this.$store.dispatch("flipCard", cards);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

ul {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 24px 20px;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  padding: 26px 17px;
  left: 303px;
  top: 144px;
  height: 844px;
  width: 842px;
  background: linear-gradient(
    133.05deg,
    rgba(255, 255, 255, 0.6) 0.62%,
    rgba(255, 255, 255, 0.1) 102.4%
  );
  border-radius: 8px;
  position: relative;
}

li {
  width: 72px;
  height: 112px;
}
</style>