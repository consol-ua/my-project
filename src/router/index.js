import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/ToDo.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/todo",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
