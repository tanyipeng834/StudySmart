<template>
  <div>
    <div class="container timetable">
      <button class="btn">
        <i class="fa-regular fa-pen-to-square fa-lg text-right"></i>Add Subject
      </button>
      <div class="timetable-img text-center">
        <img src="img/content/timetable.png" alt="" />
      </div>
      <div class="table-responsive">
        <table class="table table-bordered text-center">
          <thead>
            <tr class="bg-light-gray">
              <th class="text-uppercase">Time</th>
              <th class="text-uppercase">Monday</th>
              <th class="text-uppercase">Tuesday</th>
              <th class="text-uppercase">Wednesday</th>
              <th class="text-uppercase">Thursday</th>
              <th class="text-uppercase">Friday</th>
              <th class="text-uppercase">Saturday</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
export default {
  name: "TimeTable",
  mounted() {
    gsap.from(".timetable", { opacity: 0, Y: -50, delay: 1.0 });
  },

  props: {
    timetable: Array,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");

body {
  margin-top: 20px;
}
.bg-light-gray {
  background-color: #f7f7f7;
}
.table-bordered thead td,
.table-bordered thead th {
  border-bottom-width: 2px;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}
.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
}

.bg-sky.box-shadow {
  box-shadow: 0px 5px 0px 0px #00a2a7;
}

.bg-orange.box-shadow {
  box-shadow: 0px 5px 0px 0px #af4305;
}

.bg-green.box-shadow {
  box-shadow: 0px 5px 0px 0px #4ca520;
}

.bg-yellow.box-shadow {
  box-shadow: 0px 5px 0px 0px #dcbf02;
}

.bg-pink.box-shadow {
  box-shadow: 0px 5px 0px 0px #e82d8b;
}

.bg-purple.box-shadow {
  box-shadow: 0px 5px 0px 0px #8343e8;
}

.bg-lightred.box-shadow {
  box-shadow: 0px 5px 0px 0px #d84213;
}

.bg-sky {
  background-color: #02c2c7;
}

.bg-orange {
  background-color: #e95601;
}

.bg-green {
  background-color: #5bbd2a;
}

.bg-yellow {
  background-color: #f0d001;
}

.bg-pink {
  background-color: #ff48a4;
}

.bg-purple {
  background-color: #9d60ff;
}

.bg-lightred {
  background-color: #ff5722;
}

.padding-15px-lr {
  padding-left: 15px;
  padding-right: 15px;
}
.padding-5px-tb {
  padding-top: 5px;
  padding-bottom: 5px;
}
.margin-10px-bottom {
  margin-bottom: 10px;
}
.border-radius-5 {
  border-radius: 5px;
}

.margin-10px-top {
  margin-top: 0px;
}
.font-size14 {
  font-size: 14px;
}

.text-light-gray {
  color: #d6d5d5;
}
.font-size13 {
  font-size: 13px;
}

.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
}
.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
</style>
