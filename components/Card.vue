<template>
  <ul class="backgroundBlue px-16 py-16 grid row-auto gap-10 grid-cols-9">
    <li
      class="rounded-lg shadow-lg"
      v-for="cards in card"
      :key="cards.id"
      v-on:click="flipCard(cards)"
    >
      <img v-if="cards.open" class="card" :src="cards.frontImage" alt="" />
      <img v-else class="card" :src="cards.backImage" alt="" />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    card: "card",
    stars: "stars",
    numMoves: "numMoves",
  }),
  methods: {
    flipCard(cards) {
      this.$store.commit("flipCard", cards);
    },
  },
};
</script>

<style scoped>
ul {
  height: 844px;
  width: 842px;
  left: 252px;
  top: 0px;
  border-radius: 8px;
  background: linear-gradient(
    133.05deg,
    rgba(255, 255, 255, 0.6) 0.62%,
    rgba(255, 255, 255, 0.1) 102.4%
  );
  border-radius: 8px;
  position: relative;
}

li {
  position: static;
  width: 72px;
  height: 112px;
}

.card {
  position: absolute;
}
</style>