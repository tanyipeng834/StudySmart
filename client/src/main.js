import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { gsap } from "gsap";
// import VueChartkick from "vue-chartkick";
// import "chartkick/chart.js";
createApp(App).use(router).use(VueChartkick).mount("#app");

import "bootstrap/dist/js/bootstrap.min.js";
// import axios from "axios";
// Vue.prototype.$http = axios;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5LHwSl39mj9DgfVnxqnbHZwncdT7k55o",
  authDomain: "wad2-project-625b0.firebaseapp.com",
  projectId: "wad2-project-625b0",
  storageBucket: "wad2-project-625b0.appspot.com",
  messagingSenderId: "289817400876",
  appId: "1:289817400876:web:56b20267551e94f2ebe389",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
