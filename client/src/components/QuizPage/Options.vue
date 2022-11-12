<template>
  <div>
    <button
      type="button"
      class="btn-close float-right"
      aria-label="Close"
      id="close-button"
      @click="deleteOption()"
    ></button>
    <div class="input-group mb-3 mt-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="addon-wrapping"
          ><span style="margin-right: 10px">Answer?</span>
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            v-model="toggle"
          />
        </span>
      </div>

      <input
        type="text"
        class="form-control"
        aria-label="Text input with checkbox"
        placeholder="Option"
        v-model="option"
      />
    </div>
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
  methods: {
    deleteOption() {
      this.$emit("delete-option", this.id);
    },
  },
  updated() {
    this.$emit("update-mutiple-choice", [this.id, this.option, this.toggle]);
  },
};
</script>

<style scoped>
#addon-wrapping {
  background-color: #393838;
  color: white;
}
#close-button {
  margin-left: 95%;
  margin-top: 1%;
}
</style>
