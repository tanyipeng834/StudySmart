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

  created(){



  },

  components: {
    MutipleChoice,
  },
  methods: {
    addQuestion(array) {
      // force the child component to rerender
      this.questionNumber += 1;
      console.log(array);
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
</style>
