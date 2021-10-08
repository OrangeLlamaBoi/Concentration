<template>
  <ul
    class="
      px-16
      py-16
      grid
      row-auto
      gap-10
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      2xl:grid-cols-9
    "
  >
    <li class="rounded-lg shadow-lg" v-for="cards in card" :key="cards.id">
      <img
        class="rounded-md w-screen object-cover max-h-60"
        :src="cards.frontImage"
        alt=""
      />
      <p>{{ cards.title }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    card() {
      return this.$store.state.card;
    },
    methods: {},
  },
};
</script>

<style scoped>
</style>