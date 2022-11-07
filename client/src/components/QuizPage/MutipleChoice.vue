<template>
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

  <button type="button" class="btn btn-primary add-options" @click="addCards()">
    Add Options
  </button>
  <button type="button" class="btn btn-primary" @click="addQuestion()">
    New Question
  </button>
</template>

<script>
import Options from "../QuizPage/Options.vue";
export default {
  name: "MutipleChoice",
  data() {
    return {
      options: [],
      question: "",
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
      this.$emit("new-question", [this.question, this.options]);
    },
  },
};
</script>
<style scoped>
.add-options {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: fixed;
  bottom: 20%;
  right: 10%;
}

.add-question {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: fixed;
  bottom: 20%;
  right: 10%;
}
</style>
