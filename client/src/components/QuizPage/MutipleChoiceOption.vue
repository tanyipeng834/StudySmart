<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      id="q1_r1"
      value="r1"
      v-model="this.checked"
    />

    <label class="form-check-label" for="q1_r1"> {{ this.value }}</label>
  </div>
</template>

<script>
export default {
  name: "MutipleChoiceOption",
  props: {
    value: String,
    answer: Boolean,
    item: Number,
  },
  updated() {
    this.$emit("update-array", [this.item, this.correctAnswer]);
  },
  data() {
    return {
      checked: false,
      answer: this.answer,
    };
  },

  computed: {
    correctAnswer() {
      if (this.checked == true && this.answer == true) {
        return true;
      } else if (this.checked == false && this.answer == false) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
