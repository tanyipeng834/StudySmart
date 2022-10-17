<template>
  <div class="col-md-6">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Title:{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          Description:{{ description }}
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

<style></style>
