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
      <div class="card mt-5">
        <h3>Term</h3>
        <div class="card-body d-flex">
          <div v-if="this.cards[this.count - 1]" class="content text-center">
            {{ this.cards[this.count - 1]["term"] }}
          </div>
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
      <div class="card mt-5">
        <h3>Definition</h3>
        <div class="card-body">
          <div v-if="this.cards[this.count - 1]" class="content text-center">
            {{ this.cards[this.count - 1]["defination"] }}
          </div>
        </div>
      </div>
    </template>
  </vue-flip>

  <div class="d-flex button-div mt-5">
    <button
      type="button "
      class="btn btn-outline-dark card-button-back"
      @click="beforeCard()"
    >
      Back
    </button>
    <button
      type="button"
      class="btn btn-outline-dark card-button-front"
      @click="nextCard()"
    >
      Next
    </button>
  </div>
</template>

<script>
import { VueFlip } from "vue-flip";
export default {
  name: "CardQuiz",
  data() {
    return {
      cards: this.cards,
      count: 1,
    };
  },
  computed: {
    progress() {
      return Math.floor((this.count / this.cards.length) * 100);
    },
  },
  components: { VueFlip },
  props: {
    cards: Array,
  },

  methods: {
    nextCard() {
      if (this.count <= this.cards.length - 1) {
        this.count += 1;
      }
    },
    beforeCard() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },
  },
};
</script>
<style scoped>
.card {
  width: 50%;
  height: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Roboto", sans-serif;
}
.card-body {
  align-items: center;
  justify-content: center;
  padding-bottom: 50%;
}
.button-div {
  justify-content: space-around;
  margin-top: 20%;
}
.card-button-back {
  border-radius: 50%;
  width: 100px;
  height: 40px;
}
.card-button-front {
  border-radius: 50%;
  width: 100px;
  height: 40px;
}

</style>
