<script>
// import router from '../router';

export default {
  name: "CardMovie",
  props: ["movie"],
  data() {
    return {
      imageTMDB: "https://image.tmdb.org/t/p/w185/",
    };
  },
  //   created() {
  //     console.log(this.movie);
  //   },
};
</script>
<template>
  <div class="col-md-2">
    <div class="card mb-4 shadow-sm">
      <img
        :src="imageTMDB + movie.poster_path"
        class="card-img-top w-10 h-10"
        alt="Movie 3"
      />
      <div class="card-body">
        <h8 class="card-title limit-text" >{{ movie.title }}</h8>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <router-link  :to="`/${movie.id}`">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View Details
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.limit-text{
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1; /* number of lines to show */
           line-clamp: 2; 
   -webkit-box-orient: vertical;
}
</style>