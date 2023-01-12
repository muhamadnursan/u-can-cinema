<script>
import { mapActions, mapState } from 'pinia';
import {useCounterStore} from '../stores/counter'
export default {
  name: "Register",
  emits: ["getRegister"],
  data() {
    return {
      register: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods:{
    ...mapActions(useCounterStore, ['handleSubmitRegister', 'quotes'])
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
    style="
      background-image: url(https://ik.imagekit.io/tkvbrmjpc/752715_lbsmlLJzY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672144576331);
      height: 80%;
      background-size: cover;
    "
  >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 40px; opacity: 0.9">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-4">
                  Create an account
                </h2>
                <h6 class="text-uppercase text-center mb-5">
                  {{ quote }}
                </h6>
                <form @submit.prevent="handleSubmitRegister(this.register)">
                  <div class="form-outline mb-1">
                    <label class="form-label" for="form3Example1cg"
                      >User Name</label
                    >
                    <input
                      type="text"
                      id="form3Example1cg"
                      class="form-control form-control-lg"  v-model="register.username"
                    />
                  </div>

                  <div class="form-outline mb-1">
                    <label class="form-label" for="form3Example3cg"
                      >Email</label
                    >
                    <input
                      type="email"
                      id="form3Example3cg"
                      class="form-control form-control-lg"  v-model="register.email"
                    />
                  </div>

                  <div class="form-outline mb-1">
                    <label class="form-label" for="form3Example4cg"
                      >Password</label
                    >
                    <input
                      type="password"
                      id="form3Example4cg"
                      class="form-control form-control-lg"  v-model="register.password"
                    />
                  </div>

                  <div class="form-outline mb-1">
                    <label class="form-label" for="form3Example4cdg"
                      >Phone Number</label
                    >
                    <input
                      type="text"
                      id="form3Example4cdg"
                      class="form-control form-control-lg"  v-model="register.phoneNumber"
                    />
                  </div>

                  <div class="form-outline mb-1">
                    <label class="form-label" for="form3Example4cdg" 
                      >Address</label
                    >
                    <input
                      type="text"
                      id="form3Example4cdg"
                      class="form-control form-control-lg"  v-model="register.address"
                    />
                  </div>

                  <div class="d-flex justify-content-center" style="margin-top: 20px;">
                    <button type="submit" class="btn btn-primary">
                      Register
                    </button>
                  </div>

                  <p class="text-center text-muted mt-3 mb-0">
                    Have already an account?
                    <a href="#!" class="fw-bold text-body"  @click.privent="this.$router.push('/login')"><u>Login here</u></a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>