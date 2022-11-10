import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Progress from "../views/Progress.vue";
import QuizTest from "../views/QuizTest.vue";
import Forum from "../views/Forum.vue";
import News from "../views/News.vue";
import MutipleChoiceTest from "@/views/MultipleChoiceTest.vue";
import Quiz from "@/views/Quiz.vue";
import FlashCard from "@/views/FlashCard.vue";
import MutipleChoiceQuiz from "@/views/MutipleChoiceQuiz.vue";

// git
import Quizzes from "../views/Quizzes.vue";
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
    path: "/quizzes",
    name: "Quizzes",
    component: Quizzes,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: Quiz,
  },
  {
    path: "/quiz/flashcards",
    name: "flashcards",
    component: FlashCard,
  },
  {
    path: "/quiz/multi",
    name: "multi",
    component: MutipleChoiceQuiz,
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
    path: "/News",
    name: "News",
    component: News,
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
