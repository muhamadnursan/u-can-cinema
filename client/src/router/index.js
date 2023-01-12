import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import HomeView from "../views/HomeView.vue";
import PageMovies from "../views/PageMovies.vue";

import PageDetail from "../views/MoviesDetail.vue";
import PageNotFound from "../views/PageNotFound.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movies",
      name: "movies",
      component: PageMovies,
    },
    {
      path: "/:id",
      name:"moviesDetail",
      component: PageDetail,
    },
    { path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: PageNotFound 
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (localStorage.getItem('access_token') && (to.name === 'login' || to.name === 'register')) {
    return {name: 'home'}
  }

  if(!localStorage.getItem('access_token') && to.name === 'moviesDetail' ){
    return {name: 'home'}
  }

})
export default router;
