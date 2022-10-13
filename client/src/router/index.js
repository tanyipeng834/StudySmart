import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Progress from "../views/Progress.vue";

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
  {
    path: "/progress",
    name: "ProgressTracker",
    component: Progress,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
