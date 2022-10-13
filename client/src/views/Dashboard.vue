<template>
  <div class="container-fluid login">
    <Sidebar profileName="Tan Yi Peng" profileRole="Secondary 3 Student" />
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <CountDown
          v-bind:tests="tests"
          @add-test="addTest"
          @delete-test="deleteTest"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-4"></div>
      <div class="col-8">
        <TimeTable />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/HomePage/Sidebar.vue";
import CountDown from "../components/HomePage/CountDown.vue";
import TimeTable from "../components/HomePage/TimeTable.vue";
import gsap from "gsap";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    CountDown,
    TimeTable,
  },
  data() {
    return {
      tests: [],
    };
  },
  methods: {
    deleteTest(id) {
      console.log("task", id);
      this.tests = this.tests.filter((test) => test.id !== id);
    },
    addTest(test) {
      this.tests = [...this.tests, test];
    },
  },

  created() {
    //this is preferably stored in backend
    this.tests = [
      {
        id: 1,
        testName: "CA1 Paper",
        date: "11/25/2022",
        subject: "Maths",
      },
      {
        id: 2,
        testName: "CA2 Paper",
        date: "01/25/2023",
        subject: "Maths",
      },
      {
        id: 3,
        testName: "SA1 Paper",
        date: "02/25/2023",
        subject: "English",
      },
    ].sort(function (a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return c - d;
    });
  },
};
</script>

<style scoped>
.login {
  background-image: url("@/assets/cloud.jpg");
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
