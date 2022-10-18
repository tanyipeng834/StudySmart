import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Progress from "../views/Progress.vue";
import Progress2 from "../views/Progress2.vue";
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
  {
    path: "/progress",
    name: "ProgressTracker",
    component: Progress,
  },
  {
    path: "/progress2",
    name: "ProgressTracker2",
    component: Progress2,
  },
  {
    path: "/signup",

    component: () => import("../views/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
