<script>

import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Login",

  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["handleSubmitLogin", "loginFirebase", 'quotes']),
  },
  computed: {
    ...mapState(useCounterStore, ['quote'])
  },
  created(){
    this.quotes()
  }
};
</script>

<template>
  <section
    class="vh-100"
    style="background-image: url(https://ik.imagekit.io/tkvbrmjpc/752715_lbsmlLJzY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672144576331);
      height: 80%;
      background-size: cover; "
  >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 40px; opacity: 0.9">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">
                  Log in to U Can Cinema
                </h2>
                <h6 class="text-uppercase text-center mb-5">
                  {{ quote }}
                </h6>
                <form @submit.prevent="handleSubmitLogin(this.login)">
                  <div class="form-outline mb-1">
                    <label class="form-label" for="form3Example3cg"
                      >Email</label
                    >
                    <input
                      type="email"
                      id="form3Example3cg"
                      class="form-control form-control-lg"
                      v-model="login.email"
                    />
                  </div>

                  <div class="form-outline mb-1">
                    <label class="form-label" for="form3Example4cg"
                      >Password</label
                    >
                    <input
                      type="password"
                      id="form3Example4cg"
                      class="form-control form-control-lg"
                      v-model="login.password"
                    />
                  </div>

                  <div class="d-flex justify-content-center" style="margin-top: 20px;">
                      <button type="submit" class="btn btn-primary">Login</button>
                  </div>

                  <p class="text-center text-muted mt-3 mb-0">
                    Create an your account?
                    <a
                      href="#!"
                      class="fw-bold text-body"
                      @click.privent="this.$router.push('/register')"
                      ><u>Register here</u></a
                    >
                  </p>
                </form>
                <p class="text-center text-muted mt-2 mb-0">or login with:</p>
                <div class="d-flex justify-content-center">
                <button
                  @click.privent="loginFirebase"
                  type="button"
                  class="btn btn-primary"
                >
                  facebook
                </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
