import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/network/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings.vue")
  },
  {
    path: "/add_network",
    name: "add-network",
    component: () => import("../views/network/AddNetwork.vue")
  },
  {
    path: "/edit_network/:id",
    name: "edit-network",
    component: () => import("../views/network/EditNetwork.vue")
  },
  {
    path: "/view_network/:id",
    name: "view-network",
    component: () => import("../views/network/ViewNetwork.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
