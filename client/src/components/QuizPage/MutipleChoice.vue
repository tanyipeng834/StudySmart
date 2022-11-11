<template>
  <div class="alert alert-danger" role="alert" v-if="this.alert">
    You need to select at least one option as the answer!!
  </div>
  <div class="input-group flex-nowrap mt-5">
    <span class="input-group-text" id="addon-wrapping">Question</span>
    <input
      type="text"
      class="form-control"
      placeholder="Question"
      aria-label="Username"
      aria-describedby="addon-wrapping"
      v-model="this.question"
    />
  </div>
  <Options
    v-for="item in this.options"
    :key="item.id"
    :id="item.id"
    @update-mutiple-choice="updateMutipleChoice"
  />

  <div class="container-fluid">
    <div class="row gx-5">
      <div class="col-md-6">
        <button
          type="button"
          class="btn btn-outline-dark mt-3"
          @click="addCards()"
        >
          Add Mutiple Choice Option
        </button>
      </div>
      <div class="col-md-6 d-flex question">
        <button
          type="button"
          class="btn btn-outline-dark mt-5"
          @click="addQuestion()"
        >
          New Question
        </button>
      </div>
    </div>

    <button
      type="button"
      class="btn btn-dark btn-lg finish"
      @click="addDatabase()"
    >
      Create Quiz
    </button>
  </div>
</template>

<script>
import Options from "../QuizPage/Options.vue";
export default {
  name: "MutipleChoice",
  data() {
    return {
      options: [],
      question: "",
      alert: false,
    };
  },

  components: {
    Options,
  },

  methods: {
    addCards() {
      this.options.push({
        id: this.options.length + 1,
        value: "",
        answer: false,
      });
      console.log(this.options);
    },
    updateMutipleChoice(array) {
      let option = this.options.find((x) => x.id == array[0]);
      option.value = array[1];
      option.answer = array[2];
      console.log(this.options);
    },
    addQuestion() {
      var hasAnswer = false;
      for (let option of this.options) {
        if (option.answer == true) {
          hasAnswer = true;
          break;
        }
      }
      if (!hasAnswer) {
        this.alert = true;
        return;
      }
      this.alert = false;
      this.$emit("new-question", [this.question, this.options]);
    },
    addDatabase() {
      //First i will add the question to the questions object
      this.addQuestion();
      this.$emit("add-database");
    },
  },
};
</script>
<style scoped>
.question {
  justify-content: right;
}
.finish {
  position: fixed;
  bottom: 10%;
  left: 45%;
}
</style>
