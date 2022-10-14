<template>
  <div class="card mt-4">
    <div class="card-header">{{ cardNumber }}</div>
    <div class="card-body d-flex">
      <input
        v-model="term"
        placeholder="Term"
        type="text"
        class="ml-4"
        @input="changeProps()"
      />
      <input
        v-model="defination"
        placeholder="Defination"
        type="text"
        class="ml-4"
        @input="changeProps()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Flashcard",
  data() {
    return {
      id: cardNumber,
    };
  },
  mounted() {
    let object = { term: this.term, defination: this.defination };
    console.log(object);
    console.log(this.card);
  },
  props: {
    cardNumber: Number,
  },

  data() {
    return {
      term: "",
      defination: "",
    };
  },
  methods: {
    changeProps() {
      this.$emit("update-card", [this.cardNumber, this.term, this.defination]);
    },
  },
};
</script>

<style scoped>
input {
  outline: 0;
  border-width: 0 0 2px;
  border-color: blue;
}
input:focus {
  border-color: green;
}
.card-body {
  justify-content: space-around;
}
</style>
