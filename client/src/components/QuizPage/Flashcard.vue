<template>
  <div class="container-fluid">

 
  <div class="card mt-4">
    <div class="card-header">{{ cardNumber }}</div>
    <div class="card-body d-flex">
      <input v-model="this.term" placeholder="Term" type="text" class="ml-4" />
      <input
        v-model="this.defination"
        placeholder="Definition"
        type="text"
        class="ml-4"
      />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Flashcard",

  data() {
    return {
      term: "",
      defination: "",
    };
  },
  props: {
    cardNumber: Number,
  },
  methods: {},
  updated() {
    console.log(this.term);
    console.log(this.defination);
    this.$emit("update-flash-card", [
      this.cardNumber,
      this.term,
      this.defination,
    ]);
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
