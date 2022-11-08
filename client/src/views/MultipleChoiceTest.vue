<template>
  <Topbar :tabs="tabs"></Topbar>
  <div class="container-fluid quiz">
    <Sidebar :haveTopbar="true"></Sidebar>

    <div class="row">
      <div class="col-3"></div>

      <div class="col-6">
        <div class="jumbotron">
          <h3>The big knowledge test!</h3>
          <p>How good is your general knowledge?</p>
        </div>
        <MutipleChoiceQuestion
          :question="this.questions[this.questionIndex]"
          :key="this.questionIndex"
          :number="this.questionIndex"
        />
      </div>
    </div>
    <button
      type="button"
      class="btn btn-primary question"
      @click="nextQuestion()"
    >
      Next Question
    </button>
  </div>
</template>

<script>
import Topbar from "../components/Navigation/Topbar.vue";
import Sidebar from "../components/Navigation/Sidebar.vue";
import MutipleChoiceQuestion from "../components/QuizPage/MutipleChoiceQuestion.vue";
import { db } from "@/main.js";
import { onSnapshot, query, doc, QuerySnapshot } from "@firebase/firestore";

export default {
  name: "MultipleChoiceQuiz",
  components: {
    Sidebar,
    Topbar,
    MutipleChoiceQuestion,
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
        for (let key in results) {
          const obj = {};
          obj[key] = results[key];
          this.questions.push(obj);
        }
      });
    });
  },
  data() {
    return {
      questions: [],
      questionIndex: 0,

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
  methods: {
    nextQuestion() {
      if (this.questionIndex < this.questions.length - 1) {
        this.questionIndex += 1;
      }
    },
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

.question {
  position: fixed;
  bottom: 10%;
  right: 10%;
}
</style>
