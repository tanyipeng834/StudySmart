<template>
  <div>
    <Topbar :tabs="tabs"></Topbar>
    <div class="container-fluid quiz">
      <Sidebar :haveTopbar="true"></Sidebar>
      <div v-if="modal == false">
        <div class="row">
          <div class="col-md-4"></div>
        </div>

        <div class="row">
          <div class="col-3"></div>
          <div class="col-3 mt-5"><h3 id="flash-cards">Flashcards</h3></div>
        </div>

        <div class="button">
          <button class="btn add" @click="addFlashCard()">
            <i class="fa-regular fa-pen-to-square fa-lg text-right"></i>Add
            Flash Card
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
              >
              </SummaryCard>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <FlashcardPage @add-summary-card="addSummaryCard"></FlashcardPage>
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

export default {
  name: "Quiz",

  data() {
    return {
      modal: false,
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
    const q = query(collection(db, "users", email, "Flashcards"));

    console.log(this.summaryCards);
    const flashCards = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.summaryCards.push({
          title: doc.data().title,
          description: doc.data().description,
        });
      });
    });
  },
  components: { Sidebar, Topbar, FlashcardPage, SummaryCard },

  methods: {
    addFlashCard() {
      this.modal = true;
    },
    addSummaryCard(item) {
      this.modal = false;
      this.summaryCards = [];
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
