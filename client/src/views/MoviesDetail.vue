<script>
import { mapActions, mapState, mapStores } from "pinia";
import { useCounterStore } from "../stores/counter";
import Footer from "../components/Footer.vue";


export default {
  name: "MoviesDetail",
  components: {
    Footer,
  },
  computed: {
    ...mapState(useCounterStore, ["movie", "imageTMDBBackground", "User"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchDetail", "premium", "userById"]),
  },
  created() {
    this.fetchDetail(this.$route.params.id);
    this.userById()
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <a href="#!"
            ><img
              class="card-img-top w-10 h-10"
              :src="imageTMDBBackground + movie.backdrop_path"
              alt="..."
          /></a>
          <div class="card-body text-center mt-1 mb-0">
            <h2 class="card-title">{{ movie.title }}</h2>
            <p class="card-text">
              {{ movie.overview }}
            </p>
            <div v-if="User.status === 'Premium'">
              <h4>Premium cuy</h4>
            </div>
          </div>
          <div class="card-body text-center mt-1 mb-0" v-if="User.status !== 'Premium'">
            <h2 class="card-title">Are you wanna wacth this movie?</h2>
            <h5>payment</h5>
            <img src="../assets/qris.jpg" width="150" alt="" />
            <p>QRIS payment</p>
            <p class="lh-1">Harap menghungi admin apabila melakukan pembayaran dengan QRIS payment</p>
            <p>OR</p>
          </div>
             <div class="d-flex justify-content-center mt-3">
              <button
              @click.prevent="premium"
                type="button"
                class="btn btn-primary"
              >
              MIDTRANS
              </button>
              </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>
