<template>
  <div class="row header">
    <div class="text-center">
      <h1>Create a new Mutiple Choice Quiz</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <MutipleChoice
        :key="this.questionNumber"
        @new-question="addQuestion"
        :doc="this.document"
      />
    </div>
    <button type="button" class="btn btn-primary finish" @click="addDatabase()">
      Finish Quiz
    </button>
  </div>
</template>

<script>
import MutipleChoice from "../QuizPage/MutipleChoice.vue";
import { db } from "@/main.js";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  query,
  orderBy,
} from "firebase/firestore";
export default {
  name: "MutipleChoicePage",
  data() {
    return {
      questionNumber: 1,
      collection: null,
      document: null,
    };
  },

  created() {
    this.questions = {};
  },

  components: {
    MutipleChoice,
  },
  methods: {
    addQuestion(array) {
      // force the child component to rerender
      this.questionNumber += 1;
      this.questions[array[0]] = array[1];
      console.log(this.questions);
    },
    async addDatabase() {
      let email = localStorage.getItem("email");
      let collectionRef = collection(db, "users", email, "MutipleChoiceQuiz");

      const docref = await addDoc(collectionRef, {
        data: this.questions,
      })
        .then(() => {
          alert("data have been added successfully");
        })
        .catch((error) => {
          alert("Unsuccessful operation,error" + error);
        });

        this.$emit("toggle-mutiple");
    },
  },
};
</script>

<style>
.add-question {
  position: fixed;
  bottom: 10%;
  right: 10%;
}
.finish {
  position: fixed;
  bottom: 10%;
  left: 10%;
}
</style>
