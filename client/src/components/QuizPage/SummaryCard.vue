<template>
  <div class="col-md-6 col-lg-4">
    <div class="card" style="width: 18rem">
      <div class="card-body">
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
</style>
