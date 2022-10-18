<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <h1>Create a new Study Set</h1>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Title"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="title"
        />
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Description"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="description"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <div v-for="(card, index) in this.flashCards" :key="index">
          <FlashCard :cardNumber="card.id" :key="card.id" />
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
      <button type="button" class="btn btn-primary" @click="updateCard()">
        Submit
      </button>
    </div>
  </div>
</template>
<script>
import FlashCard from "@/components/QuizPage/Flashcard.vue";
export default {
  name: "FlashCardPage",
  created() {
    this.flashCards = [
      { id: 1, term: "", defination: "" },
      { id: 2, term: "", defination: "" },
      { id: 3, term: "", defination: "" },
    ];
  },
  data() {
    return {
      flashCards: [],
      title: "",
      description: "",
    };
  },
  components: {
    FlashCard,
  },
  methods: {
    addFlashCards(item) {
      let newId = this.flashCards[this.flashCards.length - 1].id + 1;
      item = { ...item, id: newId };
      this.flashCards.push(item);
    },
    updateCard() {
      this.$emit("add-summary-card", [this.title, this.description]);
    },
  },
};
</script>

<style scoped>
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
