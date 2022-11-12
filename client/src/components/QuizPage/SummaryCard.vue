<template>
  <div class="col-md-6 col-lg-4 mt-2">
    <div class="card" style="width: 18rem">
      <button
        type="button"
        class="btn-close float-right"
        aria-label="Close"
        id="btn-close"
        @click="deleteItem()"
      ></button>
      <div class="card-body" @click="redirect(this.id, this.type)">
        <h5 class="card-title"><b>Title:</b> {{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted mt-3">
          <b>Description:</b> {{ description }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryCard",
  props: {
    title: String,
    description: String,
    id: String,
    type: String,
  },
  methods: {
    deleteItem() {
      console.log(this.id);
      this.$emit("delete-card", this.id);
      console.log("delete");
    },
    redirect(id, type) {
      if (type == "flashcards") {
        window.location.href = `/#/quiz/${id}`;
      } else {
        window.location.href = `/#/quiz/multi/${id}`;
      }
    },
  },
};
</script>

<style>
.card {
  font-family: "Roboto", sans-serif;
}
.card:hover {
  cursor: pointer;
}
#btn-close {
  margin-left: 90%;
}
</style>
