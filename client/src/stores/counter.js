import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import {
  auth,
  fbAuth,
  FacebookProvider,
} from "../../confiq/firebase-confiq";
import Toastify from "toastify-js";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      isLogin: false,
      movies: [],
      baseURL: "https://ucancinema-production.up.railway.app/",
      imageTMDB: "https://image.tmdb.org/t/p/w185/",
      imageTMDBBackground: "https://image.tmdb.org/t/p/w780/",
      movie: {},
      User: {},
      quote: ""
    };
  },
  actions: {
    async handleSubmitRegister(register) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${this.baseURL}users/register`,
          data: register,
        });
        this.router.push("/login");
        Toastify({
          text: `Berhasil Register`,
          style: {
            background: "linear-gradient(to right, #a0ef20, #f24702)",
          },
        }).showToast();
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #fcedc1, #f24702)",
          },
        }).showToast();
        console.log(error);
      }
    },
    async handleSubmitLogin(login) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${this.baseURL}users/login`,
          data: login,
        });
        localStorage.setItem("email", data.email);
        localStorage.setItem("access_token", data.access_token);
        this.router.push("/");
        this.isLogin = true;
        Toastify({
          text: `Berhasil Login`,
          style: {
            background: "linear-gradient(to right, #a0ef20, #f24702)",
          },
        }).showToast();
      } catch (error) {
        console.log(error);
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #fcedc1, #f24702)",
          },
        }).showToast();
        console.log(error);
      }
    },

    async loginFirebase() {
      try {
        const data = await fbAuth.signInWithPopup(auth, FacebookProvider);
        Toastify({
          text: `Berhasil Login`,
          style: {
            background: "linear-gradient(to right, #a0ef20, #f24702)",
          },
        }).showToast();
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #fcedc1, #f24702)",
          },
        }).showToast();
        console.log(error);
      }
    },
    async fetchMovie() {
      try {
        let { data } = await axios({
          url: `${this.baseURL}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.movies = data.movie.results;
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #fcedc1, #f24702)",
          },
        }).showToast();
        console.log(error);
      }
    },

    async fetchDetail(id) {
      try {
        let { data } = await axios({
          url: `${this.baseURL}${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.movie = data.movie;
        this.userById();
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #fcedc1, #f24702)",
          },
        }).showToast();
        console.log(error);
      }
    },
    async subs() {
      try {
        let { data } = await axios({
          url: `${this.baseURL}midtrans/subscription`,
          method: "patch",
          headers: {
            access_token: localStorage.access_token,
          },
        });
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #fcedc1, #f24702)",
          },
        }).showToast();
        console.log(error);
      }
    },

    async premium() {
      try {
        let { data } = await axios({
          url: `${this.baseURL}midtrans/generate-mitrans-token`,
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
        });

        const cb = this.subs;
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            cb();
            alert("payment success!");
            console.log(result);
            console.log("sukses");
          },
        });
        Toastify({
          text: `Berhasil menjadi akun premium`,
          style: {
            background: "linear-gradient(to right, #a0ef20, #f24702)",
          },
        }).showToast();
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #fcedc1, #f24702)",
          },
        }).showToast();
        console.log(error);
      }
    },

    async userById() {
      try {
        let { data } = await axios({
          url: `${this.baseURL}users/user`,
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.User = data;
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #fcedc1, #f24702)",
          },
        }).showToast();
        console.log(error);
      }
    },

    async quotes(){
      try {
        let { data } = await axios({
          url: `${this.baseURL}users/quotes`,
          method: "get",

        });
        this.quote = data
      } catch (error) {
        console.log(error);
      }
    }

  },
});
