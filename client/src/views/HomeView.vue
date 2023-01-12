<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import Navbar from "../components/Navbar.vue";
import Jumbotron from "../components/Jumbotron.vue"
import Footer from "../components/Footer.vue"
import PageMovies from "../views/PageMovies.vue"

export default {
  name: "HomeView",
  components: {

    Navbar,
    Jumbotron,
    Footer,
    PageMovies,

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

  <Jumbotron />
  <PageMovies/>

  <Footer/>

</template>