<template>
  <div class="input-group mb-3 mt-3">
    <div class="input-group-prepend">
      <div class="input-group-text">
        Answer?
        <input
          type="checkbox"
          aria-label="Checkbox for following text input"
          v-model="toggle"
        />
      </div>
    </div>
    <input
      type="text"
      class="form-control"
      aria-label="Text input with checkbox"
      placeholder="Option"
      v-model="option"
    />
  </div>
</template>

<script>
import CardQuiz from "./CardQuiz.vue";

export default {
  name: "Options",
  data() {
    return {
      toggle: false,
      option: "",
    };
  },

  props: {
    id: Number,
  },
  methods: {},
  updated() {
    this.$emit("update-mutiple-choice", [this.id, this.option, this.toggle]);
  },
};
</script>

<style scoped></style>
