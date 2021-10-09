<template>
  <ul class="backgroundBlue px-16 py-16 grid row-auto gap-10 grid-cols-9">
    <li class="rounded-lg shadow-lg" v-for="cards in card" :key="cards.id">
      <img
        class="rounded-md w-screen object-cover max-h-60"
        :src="cards.frontImage"
        alt=""
      />
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    card() {
      return this.$store.state.card;
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
}

li {
  position: static;
  width: 72px;
  height: 112px;
}
</style>