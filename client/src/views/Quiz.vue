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
      <AddCard @add-Card="addFlashCards" />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Navigation/Sidebar.vue";
import Flashcard from "../components/QuizPage/Flashcard.vue";
import AddCard from "../components/QuizPage/AddCard.vue";

export default {
  name: "Quiz",
  data() {
    return {
      modal: false,
      flashcards: [],
    };
  },
  components: { Sidebar, Flashcard, AddCard },
  methods: {
    addCard() {
      this.modal = true;
    },
    addFlashCards(term) {
      this.flashcards.push(term);
      console.log(this.flashcards);
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
</style>
