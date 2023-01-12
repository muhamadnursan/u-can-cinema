<script>
import CardMovie from "../components/CardMovie.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
// import Footer from "../components/Footer.vue"
export default {
  name: "PageMovies",
  components: {
// Footer,
    CardMovie,
  },
  computed: {
    ...mapState(useCounterStore, ["movies"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchMovie"]),
  },
  created() {
    this.fetchMovie();
  },
};
</script>

<template>

  <section>
    <div class="container mt-5">
      <h2 class="text-center mb-5">Featured Movies</h2>
      <div class="row">
        <CardMovie v-for="movie in movies" :movie="movie" :key="movie.id" />
      </div>
    </div>
  </section>
  <!-- <Footer/> -->
</template>