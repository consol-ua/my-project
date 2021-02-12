import { createRouter, createWebHashHistory } from "vue-router";
import Todo from "../views/ToDo.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  mode: "history",
  routes,
});

export default router;
