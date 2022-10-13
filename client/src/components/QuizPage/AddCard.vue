<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6"><h1>Create a new Study Set</h1></div>
    <div class="row">
      <div class="col-3"></div>

      <div class="col-6">
        <Flashcard
          v-for="index in 3"
          :cardNumber="index"
          :key="index"
          @add-Card="addCard"
        ></Flashcard>
      </div>
    </div>
    <div class="d-flex add pt-3">
      <button class="btn btn-primary">Add</button>
    </div>
  </div>
</template>

<script>
import Flashcard from "../QuizPage/Flashcard.vue";
export default {
  name: "AddCard",
  components: {
    Flashcard,
  },
  methods: {
    addCard(object) {
      console.log(object);
      this.$emit("add-Card", object);
    },
  },
};
</script>
<style scoped>
.add {
  justify-content: center;
}
</style>
