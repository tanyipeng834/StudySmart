<template>
  <div class="main" @click="fadeIn">
    <div class="d-flex justify-content-end mt-4">
      <button class="btn" v-if="addTest === false" @click="addTest = !addTest">
        <i class="fa-regular fa-pen-to-square fa-lg text-right"></i>Add Test
      </button>
      <div v-else>
        <button class="btn" @click="addTest = !addTest">
          <i class="fa-solid fa-xmark fa-lg text-right"></i>Cancel
        </button>
        <button class="btn" @click="onSubmit()">
          <i class="fa-solid fa-check fa-lg text-right"></i>Submit
        </button>
      </div>
    </div>
    <!-- <AddTest /> -->
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-around align-items-start header bg-dark"
      >
        <div class="col-7">
          <h6 class="text-white">Test Name</h6>
        </div>
        <div class="col-4">
          <h6 class="float-start text-white">Days Left</h6>
        </div>
      </li>
      <!-- class="list-group-item d-flex justify-content-around align-items-center" -->
      <li
        :class="[addTest ? 'list-group-item' : 'hide']"
        @keyup.enter="onSubmit()"
      >
        <div class="me-auto col-5 ms-1">
          <input
            v-model="test"
            type="text"
            class="form-control form-control-sm"
            placeholder="Test Name"
          />
        </div>

        <div class="col-3 d-flex justify-content-center ms-1">
          <input
            v-model="subject"
            type="text"
            class="form-control form-control-sm"
            placeholder="Subject"
          />
        </div>

        <div class="col-4 ms-1">
          <input
            v-model="date"
            type="text"
            class="form-control form-control-sm"
            placeholder="mm/dd/yyyy"
          />
        </div>
      </li>
      <li
        v-for="(test,index) in tests" :key="index"
        class="list-group-item d-flex justify-content-around align-items-start"
      >
        <div class="ms-2 me-auto col-7">
          <div class="fw-bold">{{ test.testName }}</div>
          <p>
            <small>{{ test.subject }} . {{ test.date }}</small>
          </p>
        </div>

        <div class="col-4 d-flex justify-content-center">
          <span class="p-2 badge bg-primary rounded-pill mx-auto">{{
            daysLeft(test.date)
          }}</span>
        </div>

        <div class="col-1">
          <button
            type="button"
            class="btn position-absolute top-0 end-2"
            v-on:click="deleteTest(test.id)"
          >
            <i
              v-on:click="deleteTest($event)"
              class="fa-regular fa-trash-can"
            ></i>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import gsap from "gsap";

export default {
  name: "CountDown",
  mounted() {
    gsap.from(".main", { opacity: 0, x: -200, duration: 1.5 });
  },

  props: {
    tests: Array,
  },
  data() {
    return {
      test: "",
      subject: "",
      date: "",
      addTest: false,
    };
  },
  methods: {
    daysLeft(date) {
      let testDate = new Date(date);
      let currentDate = new Date();
      let difference = testDate.getTime() - currentDate.getTime();
      let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
      return TotalDays;
    },
    deleteTest(id) {
      // console.log(id)
      this.$emit("delete-test", id);
      // console.log( event.currentTarget.parentElement)
      //event.currentTarget.parentElement.parentElement.remove()
      //remove from database instead using id
    },
    onSubmit(e) {
      if (!this.test) {
        alert("Please add a test");
        return;
      }
      const newTest = {
        id: Math.floor(Math.random() * 100000), //have to edit
        testName: this.test,
        date: this.date,
        subject: this.subject,
      };
      this.$emit("add-test", newTest);
      console.log(newTest);
      this.test = "";
      (this.subject = ""), (this.date = "");
      this.addTest = !this.addTest;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

button {
  background-color: transparent;
  padding-right: 0px;

  /* margin-right: -8px; */
}

.hide {
  display: none;
}

.list-group-item {
  display: flex;
  justify-content: space-around;
}
</style>
