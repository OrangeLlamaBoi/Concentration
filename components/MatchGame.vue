<template>
  <div>
    <img
      v-on:click="toTheVictor()"
      class="matched"
      src="../assets/Match/matchGame.jpg"
      alt=""
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    players: "players",
  }),
  methods: {
    toTheVictor() {
      this.$store.commit("TO_THE_VICTOR");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

.matched {
  position: absolute;
  left: 303px;
  top: 144px;
}
</style>