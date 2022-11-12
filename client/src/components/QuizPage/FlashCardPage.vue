<template>
  <div class="row header">
    <Sidebar :haveTopbar="true" />
    <div class="text-center mt-5">
      <h1>Create a new Study Set</h1>
    </div>
    <div class="col-3"></div>
    <div class="col-9">
      <div class="row d-flex content-text">
        <div class="col-4">
          <button
            type="button"
            class="btn btn-outline-dark new-deck mb-4"
            @click="updateCard()"
          >
            Create New Deck
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-9">
      <div class="row d-flex content-text">
        <div class="col-4">
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
        </div>
      </div>
      <div class="row d-flex content-text">
        <div class="col-4">
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
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-9">
        <button
          class="btn btn-outline-dark"
          @click="addFlashCards({ term: '', defination: '' })"
        >
          +
        </button>
        <div class="row">
          <FlashCard
            v-for="(card, index) in this.flashCards"
            v-if="this.submit != null"
            :cardNumber="card.id"
            :key="card.id"
            @update-flash-card="updateFlashCards"
            @delete-item="deleteItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FlashCard from "@/components/QuizPage/Flashcard.vue";
import { db } from "@/main.js";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  query,
  orderBy,
} from "firebase/firestore";
import Sidebar from "@/components/Navigation/Sidebar.vue";
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
      title: "",
      description: "",
    };
  },
  components: {
    FlashCard,
    Sidebar,
  },
  methods: {
    addFlashCards(item) {
      if (this.flashCards.length >= 1) {
        var newId = this.flashCards[this.flashCards.length - 1].id + 1;
      } else {
        newId = 1;
      }
      item = { ...item, id: newId };
      this.flashCards.push(item);
    },
    updateCard() {
      this.$emit("add-summary-card", [this.title, this.description]);
      this.$emit("toggle-page");
      this.addToDataBase();
    },
    deleteItem(id) {
      const results = this.flashCards.filter((card) => {
        if (card.id == id) {
          return false;
        } else {
          return true;
        }
      });
      this.flashCards = results;
    },

    async addToDataBase() {
      let email = localStorage.getItem("email");
      console.log(email);
      let collectionRef = collection(db, "users", email, "Flashcards");

      const docref = await addDoc(collectionRef, {
        title: this.title,
        description: this.description,
        data: this.flashCards,
      })
        .then(() => {})
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:ital,wght@0,300;1,500&display=swap");
#flash-cards {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}

.add-card {
  justify-content: center;
}
.header {
  z-index: 100;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}
.content-text {
  justify-content: left;
}
</style>
