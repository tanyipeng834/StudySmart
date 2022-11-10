<template>
  <div>
    <Topbar :tabs="tabs" menuTitle="Quizzes"></Topbar>
    <div class="container-fluid quiz">
      <Sidebar :haveTopbar="true"></Sidebar>
      <div v-if="flashCards == false && this.multiChoiceQuiz == false">
        <div class="row">
          <div class="col-md-4"></div>
        </div>

        <div class="row">
          <div class="col-3"></div>
          <div class="col-3 mt-5"><h3 id="flash-cards">Flashcards</h3></div>
        </div>

        <div class="button">
          <button class="btn add d-block" @click="addFlashCard()">
            <i class="fa-regular fa-pen-to-square fa-lg text-right"></i>Add
            Flash Card
          </button>

          <button class="btn add d-block" @click="addQuiz()">
            <i class="fa-regular fa-pen-to-square fa-lg text-right"></i>Add
            Mutiple Choice Quiz
          </button>
        </div>
        <div class="row">
          <div class="col-4"></div>
          <div class="col-8">
            <div class="row gx-2">
              <SummaryCard
                v-for="item in summaryCards"
                :title="item.title"
                :description="item.description"
                :id="item.id"
                @click="redirect(item.id, item.type)"
              >
              </SummaryCard>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="flashCards == true">
        <FlashcardPage @add-summary-card="addSummaryCard"></FlashcardPage>
      </div>
      <div v-else-if="multiChoiceQuiz == true">
        <MutipleChoicePage @toggle-mutiple="toggleMutiple()" />
      </div>
    </div>
  </div>
</template>

<script>
import { collection, onSnapshot, query } from "@firebase/firestore";
import Sidebar from "../components/Navigation/Sidebar.vue";
import Topbar from "../components/Navigation/Topbar.vue";
import FlashcardPage from "../components/QuizPage/FlashCardPage.vue";
import SummaryCard from "../components/QuizPage/SummaryCard.vue";
import { db } from "@/main.js";
import MutipleChoicePage from "@/components/QuizPage/MutipleChoicePage.vue";

export default {
  name: "Quiz",

  data() {
    return {
      flashCards: false,
      multiChoiceQuiz: false,
      summaryCards: [],
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
  created() {
    let email = localStorage.getItem("email");
    console.log(email);
    const q_flashcards = query(collection(db, "users", email, "Flashcards"));
    const q_multiquiz = query(
      collection(db, "users", email, "MutipleChoiceQuiz")
    );

    console.log(this.summaryCards);
    const flashCards = onSnapshot(q_flashcards, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.summaryCards.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          type: "flashcards",
        });
      });
    });
    const mulitquiz = onSnapshot(q_multiquiz, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.summaryCards.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          type: "multi-choice",
        });
      });
    });
  },
  components: {
    Sidebar,
    Topbar,
    FlashcardPage,
    SummaryCard,
    MutipleChoicePage,
  },

  methods: {
    addFlashCard() {
      this.flashCards = true;
    },
    addSummaryCard(item) {
      this.modal = false;
      this.summaryCards = [];
    },
    redirect(id, type) {
      if (type == "flashcards") {
        window.location.href = `/#/quiz/${id}`;
      } else {
        window.location.href = `/#/quiz/multi/${id}`;
      }
    },
    addQuiz() {
      this.multiChoiceQuiz = true;
    },
    toggleMutiple() {
      this.multiChoiceQuiz = !this.multiChoiceQuiz;
    },
  },
};
</script>

<style scoped>
.quiz {
  background-color: #EAF1F5;
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#flash-cards {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}
.add {
  float: right;
}
.add-card {
  justify-content: center;
}
</style>
