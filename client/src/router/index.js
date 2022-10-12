import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },

  {
    path: "/home",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
