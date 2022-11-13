<template>
  <div>
    <Topbar :tabs="tabs"></Topbar>
    <div class="container-fluid quiz">
      <Sidebar :haveTopbar="true"></Sidebar>

      <div class="row">
        <div class="col-3"></div>

        <div class="col-6 mt-5">
          <div class="jumbotron">
            <h3>The big knowledge test!</h3>
            <!-- This will be a card for the title and description -->
            <div class="card mb-4" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title"><b>Title :</b> {{ this.title }}</h5>
                <p class="card-text">Description :{{ this.description }}</p>
              </div>
            </div>
          </div>
          <div class="alert alert-success" role="alert" v-if="this.alert">
            You Have Completed the Quiz!!!!
          </div>
          <MutipleChoiceQuestion
            :question="this.questions[this.questionIndex]"
            :key="this.questionIndex"
            :number="this.questionIndex"
            v-if="this.questions[this.questionIndex]"
          />
        </div>
      </div>
      <button
        type="button"
        class="btn btn-outline-dark question"
        @click="nextQuestion()"
      >
        Next Question
      </button>
    </div>
    <BottomBar />
  </div>
</template>

<script>
import Topbar from "../components/Navigation/Topbar.vue";
import Sidebar from "../components/Navigation/Sidebar.vue";
import MutipleChoiceQuestion from "../components/QuizPage/MutipleChoiceQuestion.vue";
import { db } from "@/main.js";
import { onSnapshot, query, doc, QuerySnapshot } from "@firebase/firestore";
import BottomBar from "../components/Navigation/BottomBar.vue";

export default {
  name: "MultipleChoiceQuiz",
  components: {
    Sidebar,
    Topbar,
    MutipleChoiceQuestion,
    BottomBar,
  },

  mounted() {
    let id = this.$route.params.id;
    let email = localStorage.getItem("email");
    const q = query(doc(db, "users", email, "MutipleChoiceQuiz", id));
    const questions = onSnapshot(q, (doc) => {
      const multiChoiceQuiz = onSnapshot(q, (doc) => {
        const results = doc.data().data;
        this.title = doc.data().title;
        this.description = doc.data().description;
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
      title: "",
      description: "",
      alert: false,
      tabs: [
        // example on how to implement the tabs
        
      ],
    };
  },
  methods: {
    nextQuestion() {
      if (this.questionIndex < this.questions.length - 1) {
        this.questionIndex += 1;
      } else {
        this.alert = true;
        window.location.href = `/#/quiz/multi`;
      }
    },
  },
};
</script>
<style scoped>
.quiz {
  width: 100vw;
  min-height: 100vh;
  margin-top: 60px;
  background-color: #eaf1f5;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
  overflow-y: hidden;
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
