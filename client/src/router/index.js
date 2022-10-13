import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Quiz from "../views/Quiz.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
