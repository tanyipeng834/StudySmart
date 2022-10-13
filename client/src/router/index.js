import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: Quiz,
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
