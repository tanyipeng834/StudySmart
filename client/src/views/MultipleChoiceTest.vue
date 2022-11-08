<template>
  <Topbar :tabs="tabs"></Topbar>
  <div class="container-fluid quiz">
    <Sidebar :haveTopbar="true"></Sidebar>
  </div>
  {{ this.questions }}
</template>

<script>
import Topbar from "../components/Navigation/Topbar.vue";
import Sidebar from "../components/Navigation/Sidebar.vue";
import { db } from "@/main.js";
import { onSnapshot, query, doc, QuerySnapshot } from "@firebase/firestore";

export default {
  name: "MultipleChoiceQuiz",
  components: {
    Sidebar,
    Topbar,
  },

  created() {
    let id = this.$route.params.id;
    let email = localStorage.getItem("email");
    const q = query(doc(db, "users", email, "MutipleChoiceQuiz", id));
    const questions = onSnapshot(q, (doc) => {
      const results = doc.data().data;
      const multiChoiceQuiz = onSnapshot(q, (doc) => {
        const results = doc.data().data;
        console.log(results);
        Object.keys(results).forEach((key) => {
          this.questions.push({ key: results[key] });
        });
      });
    });

    console.log(this.questions);
  },
  data() {
    return {
      questions: [],
      tabs: [
        // example on how to implement the tabs
        {
          link: "",
          name: "subject",
          dropdown: true,
          dropdownTabs: [
            {
              name: "math",
              link: "#",
            },
            {
              name: "science",
              link: "#",
            },
          ],
        },
        {
          link: "#",
          name: "test",
          dropdown: false,
          dropdownTabs: [],
        },
      ],
    };
  },
};
</script>
<style scoped>
.quiz {
  background-image: url("@/assets/cloud.jpg");
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.cards {
  justify-content: center;
  height: 100vh;
}
</style>
