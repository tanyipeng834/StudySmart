<template>
  <div class="container-fluid quiz">
    <Sidebar></Sidebar>

    <div v-if="modal == false">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-3 mt-5"><h3 id="flash-cards">Flashcards</h3></div>
      </div>
      <div class="row cards"></div>
      <div class="button">
        <button class="btn add" @click="addCard()">
          <i class="fa-regular fa-pen-to-square fa-lg text-right"></i>Add Flash
          Card
        </button>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <h1>Create a new Study Set</h1>
        </div>
        <div class="row">
          <div class="col-3"></div>

          <div class="col-6">
            <div v-for="(card, index) in this.flashCards">
              <Flashcard
                :cardNumber="index"
                :key="index"
                @add-Card="addCard"
                :card="card"
              ></Flashcard>
            </div>
          </div>
        </div>
        <div class="d-flex add-card pt-3">
          <button
            class="btn btn-primary"
            @click="addFlashCards({ term: '', defination: '' })"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Navigation/Sidebar.vue";
import Flashcard from "../components/QuizPage/Flashcard.vue";
import AddCard from "../components/QuizPage/AddCard.vue";

export default {
  name: "Quiz",
  created() {
    this.flashCards = [
      { term: "", defination: "" },
      { term: "", defination: "" },
      { term: "", defination: "" },
    ];
  },
  data() {
    return {
      modal: false,
      flashCards: [],
    };
  },
  components: { Sidebar, Flashcard, AddCard },
  methods: {
    addCard() {
      this.modal = true;
    },
    addFlashCards(term) {
      console.log(term);
      console.log(this.flashCards);
      this.flashCards.push(term);
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
