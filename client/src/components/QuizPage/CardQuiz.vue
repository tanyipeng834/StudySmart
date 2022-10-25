<template>
  <vue-flip active-click>
    <template v-slot:front>
      <div class="progress w-50 mx-auto mt-5">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: this.progress + '%' }"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ this.progress }}
        </div>
      </div>
      <div class="card">
        Term
        <div class="card-body d-flex">
          <div class="content text-center">Hello</div>
        </div>
        <div class="d-flex w-100 button-div">
          <button
            type="button "
            class="btn btn-outline-primary card-button-back"
          >
            Back
          </button>
          <button
            type="button"
            class="btn btn-outline-primary card-button-front"
          >
            Next
          </button>
        </div>
      </div>
    </template>
    <template v-slot:back>
      <div class="progress w-50 mx-auto mt-5">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: this.progress + '%' }"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ this.progress }}
        </div>
      </div>
      <div class="card">
        Definition
        <div class="card-body d-flex">
          <div class="content text-center">Definataion</div>
        </div>
        <div class="d-flex w-100 button-div">
          <button
            type="button "
            class="btn btn-outline-primary card-button-back"
          >
            Back
          </button>
          <button
            type="button"
            class="btn btn-outline-primary card-button-front"
          >
            Next
          </button>
        </div>
      </div>
    </template>
  </vue-flip>
</template>

<script>
import { VueFlip } from "vue-flip";
export default {
  name: "CardQuiz",
  data() {
    return {
      progress: 25,
      cards: this.cards,
      count: 0,
    };
  },
  components: { VueFlip },
  props: {
    cards: Array,
  },
};
</script>
<style scoped>
.card {
  width: 50%;
  height: 30%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card-body {
  align-items: center;
  justify-content: center;
}
.button-div {
  justify-content: space-around;
}
.card-button-back {
  border-radius: 50%;
  width: 15%;
  height: auto;
}
.card-button-front {
  border-radius: 50%;
  width: 15%;
  height: auto;
}
</style>
