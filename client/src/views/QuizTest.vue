<template>
  <div>
    <Topbar :tabs="tabs"></Topbar>
  </div>
  <div class="container-fluid quiz">
    <div class="row">
      <div class="col-2">
        <Sidebar :haveTopbar="true"></Sidebar>
      </div>
      <div class="col-4 mt-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              <b>Title :{{ this.title }}</b>
            </h5>
            <p class="card-text">Description: {{ this.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row cards">
      <CardQuiz :cards="this.cards" />
    </div>
    <BottomBar />
  </div>
</template>

<script>
import { db } from "@/main.js";
import { onSnapshot, query, doc, QuerySnapshot } from "@firebase/firestore";
import Sidebar from "../components/Navigation/Sidebar.vue";
import Topbar from "../components/Navigation/Topbar.vue";
import CardQuiz from "../components/QuizPage/CardQuiz.vue";
import BottomBar from "../components/Navigation/BottomBar.vue";
export default {
  name: "QuizTest",
  created() {
    let id = this.$route.params.id;
    let email = localStorage.getItem("email");
    const q = query(doc(db, "users", email, "Flashcards", id));
    const flashCards = onSnapshot(q, (doc) => {
      doc.data().data.forEach((card) => this.cards.push(card));
      this.title = doc.data().title;
      this.description = doc.data().description;
    });

    console.log(this.cards);
  },
  data() {
    return {
      title: "",
      description: "",
      cards: [],
      tabs: [
        // example on how to implement the tabs
      ],
    };
  },
  components: { Topbar, Sidebar, CardQuiz, BottomBar },
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
.cards {
  justify-content: center;
  height: 100vh;
}
</style>
