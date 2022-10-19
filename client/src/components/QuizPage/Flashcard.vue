<template>
  <div class="card mt-4">
    <div class="card-header">{{ cardNumber }}</div>
    <div class="card-body d-flex">
      
      <input v-model="term" placeholder="Term" type="text" class="ml-4" />
      <input
        v-model="defination"
        placeholder="Defination"
        type="text"
        class="ml-4"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Flashcard",
  data() {
    return {};
  },
  props: {
    cardNumber: Number,
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
