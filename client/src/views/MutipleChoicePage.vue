<template>
  <div>
    <div>
      <Topbar :tabs="tabs" menuTitle="Quizzes" />
    </div>
    <div class="container-fluid p-0 quiz">
      <div class="row" v-if="this.toggle == false">
        <div class="col-4">
          <Sidebar :haveTopbar="true" />
        </div>
        <div class="col-4"></div>
        <div class="col-4"></div>

        <div class="row mt-5">
          <div class="col-2"></div>
          <div class="col-6 d-flex">
            <div class="card">
              <div class="card-body">Multiple Choice Quiz</div>
            </div>
            <button
              type="button"
              class="btn btn-outline-dark ms-4"
              @click="toggle_page()"
            >
              +
            </button>
          </div>
        </div>
        <div class="row mt-5" v-if="this.toggle == true">
          <div class="col-2"></div>
          <div class="col-6 d-flex">
            <div class="card">
              <div class="card-body">Flashcards</div>
            </div>
            <button type="button" class="btn btn-outline-dark ms-4">+</button>
          </div>
        </div>
        <div class="row gx-2 mt-4">
          <div class="col-2"></div>
          <div class="col-10">
            <div class="row">
              <SummaryCard
                v-for="item in summaryCards"
                :title="item.title"
                :key="item.id"
                :description="item.description"
                :id="item.id"
                :type="item.type"
                @delete-card="deleteItem"
              >
              </SummaryCard>
            </div>
          </div>
        </div>
      </div>
      <MultipleChoicePageComponent
        v-if="this.toggle == true"
        @toggle-mutiple="toggle_mutiple"
      />
      <BottomBar class="bottomnav" />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Navigation/Sidebar.vue";
import Topbar from "../components/Navigation/Topbar.vue";
import BottomBar from "../components/Navigation/BottomBar.vue";
import { collection, onSnapshot, query, doc } from "@firebase/firestore";
import FlashcardPage from "../components/QuizPage/FlashCardPage.vue";
import SummaryCard from "../components/QuizPage/SummaryCard.vue";
import { db } from "@/main.js";
import MultipleChoicePageComponent from "../components/QuizPage/MutipleChoicePage.vue";
import { deleteDoc } from "@firebase/firestore";

export default {
  name: "Quiz",
  name: "Forum",
  components: {
    Sidebar,
    Topbar,
    BottomBar,
    FlashcardPage,
    SummaryCard,
    MultipleChoicePageComponent,
  },
  data() {
    return {
      tabs: [],
      summaryCards: [],
      toggle: false,
    };
  },
  mounted() {
    let email = localStorage.getItem("email");
    console.log(email);
    const q_multiquiz = query(
      collection(db, "users", email, "MutipleChoiceQuiz")
    );
    console.log(this.summaryCards);
    const mulitquiz = onSnapshot(q_multiquiz, (querySnapshot) => {
      const result = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          type: "multi-choice",
        });
      });
      this.summaryCards = result;
    });
  },
  methods: {
    toggle_page() {
      this.toggle = !this.toggle;
      this.summaryCards = [];
    },
    toggle_mutiple() {
      this.toggle = !this.toggle;
      window.location.href = `/#/quiz/multi`;
    },
    redirect(id, type) {
      if (type == "flashcards") {
        window.location.href = `/#/quiz/${id}`;
      } else {
        window.location.href = `/#/quiz/multi/${id}`;
      }
    },
    async deleteItem(id) {
      console.log(id);
      let email = localStorage.getItem("email");

      await deleteDoc(doc(db, "users", email, "MutipleChoiceQuiz", id));
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
.btn {
  color: white;
  background-color: #253F63;
}
</style>
