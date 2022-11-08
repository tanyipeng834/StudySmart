<template>
  <div class="card border-info mb-4">
    <div
      class="d-flex justify-content-between align-items-center card-header bg-info text-white"
      id="h1"
    >
      <span>{{ this.number + 1 }}</span>
    </div>
    <div id="q1" class="collapse show" aria-labelledby="h1">
      <div class="card-body">
        <p>{{ this.question_value }}?</p>
        <MutipleChoiceOption
          v-for="option in this.option"
          :value="option.value"
          :answer="option.answer"
          :clicked="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MutipleChoiceOption from "./MutipleChoiceOption.vue";
export default {
  name: "MutipleChoiceQuestion",
  data() {
    return {};
  },
  computed: {
    question_value() {
      for (let key in this.question) return key;
    },
    options() {
      for (let key in this.question) {
        return this.question[key];
      }
    },
  },

  props: {
    question: Object,
    number: Number,
  },
  components: {
    MutipleChoiceOption,
  },
};
</script>

<style scoped></style>
