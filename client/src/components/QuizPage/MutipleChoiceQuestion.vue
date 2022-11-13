<template>
  <div class="card outer mb-4">
    <div
      class="d-flex justify-content-between align-items-center card-header change text-white"
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
    <button type="button" class="btn another" @click="checkAnswer()">
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

  mounted() {
    let current_state = [];

    for (let option of this.options) {
      console.log(option);
      if (option.answer) {
        current_state.push(false);
      } else {
        current_state.push(true);
      }
    }
    this.state = current_state;
    console.log(this.state);
  },
  computed: {
    question_value() {
      for (let key in this.question) return key;
    },
    options() {
      for (let key in this.question) {
        this.options = this.question[key];
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
      console.log(this.state);
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

<style scoped>
.change{
  background-color: #5B7BA6;
}

.another{
  background-color: #8F9FBF;
  color: white;
}

.outer{
  outline-color:  #5B7BA6;
}

</style>
