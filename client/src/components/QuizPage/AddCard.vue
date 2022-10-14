<template>
 
</template>

<script>
import Flashcard from "../QuizPage/Flashcard.vue";
export default {
  name: "AddCard",

  props: {
    flashcardsArray: Array,
  },
  components: {
    Flashcard,
  },
  methods: {
    addCard() {
      this.$emit("add-card", { term: "", defination: "" });
    },
  },
};
</script>
<style scoped>

</style>
