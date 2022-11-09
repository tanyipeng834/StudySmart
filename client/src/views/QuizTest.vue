<template>
  <Topbar :tabs="tabs"></Topbar>
  <div class="container-fluid quiz">
    <Sidebar :haveTopbar="true"></Sidebar>
    <div class="row cards">
      <CardQuiz :cards="this.cards" />
    </div>
  </div>
</template>

<script>
import { db } from "@/main.js";
import { onSnapshot, query, doc, QuerySnapshot } from "@firebase/firestore";
import Sidebar from "../components/Navigation/Sidebar.vue";
import Topbar from "../components/Navigation/Topbar.vue";
import CardQuiz from "../components/QuizPage/CardQuiz.vue";
export default {
  name: "QuizTest",
  created() {
    let id = this.$route.params.id;
    let email = localStorage.getItem("email");
    const q = query(doc(db, "users", email, "Flashcards", id));
    const flashCards = onSnapshot(q, (doc) => {
      doc.data().data.forEach((card) => this.cards.push(card));
    });

    console.log(this.cards);
  },
  data() {
    return {
      cards: [],
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
  components: { Topbar, Sidebar, CardQuiz },
};
</script>
<style scoped>
.quiz {
  
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
