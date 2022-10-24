<template>
  <div class="row header">
    <div class="text-center">
      <h1>Create a new Study Set</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
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
          <FlashCard
            v-if="this.submit != null"
            :cardNumber="card.id"
            :key="card.id"
            @update-flash-card="updateFlashCards"
          />
        </div>
      </div>
    </div>
    <div class="d-flex add-card pt-3">
      <button
        class="btn btn-primary"
        @click="addFlashCards({ term: '', defination: '' })"
      >
        +
      </button>
      <button type="button" class="btn btn-primary add" @click="updateCard()">
        Create
      </button>
    </div>
  </div>
</template>
<script>
import FlashCard from "@/components/QuizPage/Flashcard.vue";
import { db } from "@/main.js";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
export default {
  name: "FlashCardPage",
  created() {
    this.flashCards = [
      { id: 1, term: "", defination: "" },
      { id: 2, term: "", defination: "" },
      { id: 3, term: "", defination: "" },
    ];
    this.submit = false;
  },
  data() {
    return {
      flashCards: [],
      title:'',
      description:''
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
      this.submit = true;
      this.addToDataBase();
    },
    async addToDataBase() {
      let email = localStorage.getItem("email");
      console.log(email);
      let ref = doc(db, "users", email, "Flashcards", "1");

      const docref = await setDoc(ref, {
        term:this.term,
        
        data: this.flashCards,
      })
        .then(() => {
          alert("data have been added successfully");
        })
        .catch((error) => {
          alert("Unsuccessful operation,error" + error);
        });
    },

    updateFlashCards(array) {
      console.log(array[0]);
      let card = this.flashCards.find((x) => x.id == array[0]);
      card.term = array[1];
      card.defination = array[2];
      console.log(this.flashCards);
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
  border-radius: 50%;
  float: right;
}
.add-card {
  justify-content: center;
}
.header {
  z-index: 100;
  font-family: "Courier New", Courier, monospace;
}
</style>
