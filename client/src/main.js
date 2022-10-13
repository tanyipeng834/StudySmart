import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { gsap } from "gsap";

createApp(App).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.min.js";
