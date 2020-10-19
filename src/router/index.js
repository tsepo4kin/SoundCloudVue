import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Library from "@/components/Library.vue";
import Catalog from "@/components/Catalog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/library",
    name: "Library",
    component: Library,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
