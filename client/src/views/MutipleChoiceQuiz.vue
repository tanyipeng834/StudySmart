<template>
  <div>
    <div>
      <Topbar :tabs="tabs" menuTitle="Quiz" />
    </div>
    <div class="container-fluid p-0 quiz">
      <div class="row">
        <div class="col-4">
          <Sidebar :haveTopbar="true" />
        </div>
        <div class="col-4"></div>
        <div class="col-4"></div>
      </div>
      <div class="row mt-5">
        <div class="col-4"></div>
        <div class="col-8">
          <div class="row mt-5">
            <div class="col-md-6 mt-3">
              <div class="card" style="width: 18rem">
                <div class="card-body">
                  <h5 class="card-title">FlashCards</h5>
                  <p class="card-text">
                    Create your own online flashcards to test your
                    <b>memory!!</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mt-3">
              <div class="card" style="width: 18rem">
                <div class="card-body">
                  <h5 class="card-title">Quizzes</h5>
                  <p class="card-text">
                    Create your own Quiz to help with your
                    <b>concepts!!</b>

                    <b></b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomBar class="bottomnav" />
  </div>
</template>

<script>
import Sidebar from "../components/Navigation/Sidebar.vue";
import Topbar from "../components/Navigation/Topbar.vue";
import BottomBar from "../components/Navigation/BottomBar.vue";

export default {
  name: "Quiz",
  name: "Forum",
  components: {
    Sidebar,
    Topbar,
    BottomBar,
  },
  data() {
    return {
      tabs: [],
    };
  },
  methods: {},
};
</script>
<style scoped>
.quiz {
  width: 100vw;
  min-height: 100vh;
  margin-top: 60px;
  background-color: #eaf1f5;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
  overflow-y: hidden;
}
.card:hover {
  cursor: pointer;
}
</style>
