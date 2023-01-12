<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Navbar",
  computed: {
    ...mapState(useCounterStore, ["isLogin"]),

  },
  methods: {

    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>
<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" href="#!"
          >U Can Cinema</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link to="/">
              <li class="nav-item" v-if="isLogin">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li></router-link
            >

            <router-link to="/movies">
              <li class="nav-item" v-if="isLogin">
                <a class="nav-link" href="#">Movies</a>
              </li>
            </router-link>
            <router-link to="/login">
              <li class="nav-item" v-if="!isLogin">
                <a class="nav-link" href="#">Login</a>
              </li>
            </router-link>
            <router-link to="/register" v-if="!isLogin">
              <li class="nav-item">
                <a class="nav-link" href="#">Register</a>
              </li>
            </router-link>
            <router-link to="" @click.prevent="logout">
              <li class="nav-item" v-if="isLogin">
                <a class="nav-link" href="#">Logout</a>
              </li>
            </router-link>
          </ul>         
        </div>
      </div>
    </nav>
  </section>
</template>
