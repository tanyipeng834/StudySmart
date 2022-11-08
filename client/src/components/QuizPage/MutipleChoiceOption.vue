<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      name="checked[]"
      id="q1_r1"
      value="r1"
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
  },
  data() {
    return {
      click: this.clicked,
    };
  },
};
</script>
