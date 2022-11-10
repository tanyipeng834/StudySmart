<template>
  <div>
    <div>
      <Topbar :tabs="tabs" menuTitle="Quiz" />
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
              <div class="card-body">Flashcards</div>
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

          <SummaryCard
            v-for="item in summaryCards"
            :title="item.title"
            :key="item"
            :description="item.description"
            :id="item.id"
            @click="redirect(item.id, item.type)"
          >
          </SummaryCard>
        </div>
      </div>
      <FlashcardPage v-if="this.toggle == true" @toggle-page="toggle_page" />
      <BottomBar class="bottomnav" />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Navigation/Sidebar.vue";
import Topbar from "../components/Navigation/Topbar.vue";
import BottomBar from "../components/Navigation/BottomBar.vue";
import { collection, onSnapshot, query } from "@firebase/firestore";
import FlashcardPage from "../components/QuizPage/FlashCardPage.vue";
import SummaryCard from "../components/QuizPage/SummaryCard.vue";
import { db } from "@/main.js";

export default {
  name: "Quiz",
  name: "Forum",
  components: {
    Sidebar,
    Topbar,
    BottomBar,
    FlashcardPage,
    SummaryCard,
  },
  data() {
    return {
      tabs: [],
      summaryCards: [],
      toggle: false,
    };
  },
  created() {
    let email = localStorage.getItem("email");
    console.log(email);
    const q_flashcards = query(collection(db, "users", email, "Flashcards"));
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
  },
  methods: {
    toggle_page() {
      this.toggle = !this.toggle;
    },
    redirect(id, type) {
      if (type == "flashcards") {
        window.location.href = `/#/quiz/${id}`;
      } else {
        window.location.href = `/#/quiz/multi/${id}`;
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
.card {
}
</style>
