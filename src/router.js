import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Projets from "./views/Projets.vue";
import Cv from "./views/Cv.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "projets",
      component: Projets
    },
    {
      path: "/",
      name: "cv",
      component: Cv
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
