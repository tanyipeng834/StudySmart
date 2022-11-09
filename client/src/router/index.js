import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Progress from "../views/Progress.vue";
import QuizTest from "../views/QuizTest.vue";
import Forum from "../views/Forum.vue";
import CareerQuiz from "../views/CareerQuiz.vue";
import MutipleChoiceTest from "@/views/MultipleChoiceTest.vue";

// git
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
    path: "/quiz/:id",
    name: "QuizTest",
    component: QuizTest,
  },
  {
    path: "/quiz/multi/:id",
    name: "MultipleChoiceTest",
    component: MutipleChoiceTest,
  },

  {
    path: "/progress",
    name: "ProgressTracker",
    component: Progress,
  },
  {
    path: "/forum",
    name: "Forum",
    component: Forum,
  },
  {
    path: "/careerQuiz",
    name: "CareerQuiz",
    component: CareerQuiz,
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
