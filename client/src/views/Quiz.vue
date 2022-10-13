<template>
  <div class="container-fluid quiz">
    <Sidebar></Sidebar>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-3 mt-5"><h3 id="flash-cards">Flashcards</h3></div>
    </div>
  </div>
</template>

<script>
import sidebar from "../components/HomePage/Sidebar.vue";
import Sidebar from "../components/HomePage/Sidebar.vue";

export default {
  name: "Quiz",
  components: { Sidebar },
};
</script>

<style scoped>
.quiz {
  background-image: url("@/assets/cloud.jpg");
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#flash-cards {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}
</style>
