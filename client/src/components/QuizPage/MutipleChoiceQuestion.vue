<template>
  <div class="card border-info mb-4">
    <div
      class="d-flex justify-content-between align-items-center card-header bg-info text-white"
      id="h1"
    >
      <span>{{ this.number + 1 }}</span>
    </div>
    <div
      class="alert alert-secondary"
      role="alert"
      v-if="this.correct == false"
    >
      Wrong Answer Try Again !!!
    </div>
    <div class="alert alert-info" role="alert" v-else-if="this.correct == true">
      Correct Answer!!!
    </div>
    <div id="q1" class="collapse show" aria-labelledby="h1">
      <div class="card-body">
        {{ this.current_values }}
        <p>{{ this.question_value }}</p>
        <MutipleChoiceOption
          v-for="(option, index) in this.options"
          :value="option.value"
          :answer="option.answer"
          :clicked="false"
          :item="index"
          @update-array="updateArray"
        />
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="checkAnswer()">
      Check Answer
    </button>
  </div>
</template>

<script>
import MutipleChoiceOption from "./MutipleChoiceOption.vue";
export default {
  name: "MutipleChoiceQuestion",
  data() {
    return {
      correct: null,
    };
  },
  beforeUpdate() {
    let current_state = [];
    console.log(this.options);
    for (let option of this.options) {
      console.log(option);
      if (option.answer) {
        current_state.push(false);
      } else {
        current_state.push(true);
      }
    }
    this.state = current_state;
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
  methods: {
    checkAnswer() {
      let correct = true;

      for (let answer of this.state) {
        if (answer == false) {
          correct = false;
          break;
        }
      }
      this.correct = correct;
      console.log(this.correct);
    },
    updateArray(array) {
      console.log(array);
      this.state[array[0]] = array[1];
      console.log(this.state);
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
