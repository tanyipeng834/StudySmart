<template>
  <div class="col-md-4">
    <div class="card mt-4" style="width: 18rem">
      <div class="card-header">
        <span>{{ cardNumber }}</span>
        <button
          id="btn-close"
          type="button"
          class="btn-close btn-close-white"
          aria-label="Close"
          @click="deleteItem()"
        ></button>
      </div>
      <div class="card-body" @click="redirect()">
        <div>
          <input
            v-model="this.term"
            placeholder="Term"
            type="text"
            class="mt-5 w-100"
          />
        </div>
        <div>
          <input
            v-model="this.defination"
            placeholder="Definition"
            type="text"
            class="mt-5 w-100"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStorage, ref, uploadString } from "firebase/storage";

export default {
  name: "Flashcard",

  data() {
    return {
      term: "",
      defination: "",
      file: null,
    };
  },
  props: {
    cardNumber: Number,
  },
  methods: {
    deleteItem() {
      this.$emit("deleteItem", this.cardNumber);
    },
  },
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
#btn-close {
  margin-left: 90%;
  border-color: #ffffff !important;
}
.card-header {
  background-color: #253f63;
  color: white;
}

</style>
