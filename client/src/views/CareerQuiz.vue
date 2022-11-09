<template>
    <div>
      <Topbar :tabs="tabs" menuTitle="Career Quiz"></Topbar>
      <div class="container-fluid login wrapper w-100">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-0">
            <Sidebar
              :haveTopbar="false"
              profileName="Tan Yi Peng"
              profileRole="Secondary 3 Student"
            />
          </div>
          <div
            class="col-lg-4 col-md-6 col-12 bg-white mt-3 mb-3 px-3 quote me-3"
            style="height: 250px"
          >
          <div class="row py-5">
            <div class="col-8">
              <h2>Hi {{ StudentName }}!</h2>
              <div class="text" style="text-align: left"><Quote /></div>            
            </div>
  
            <div class="col-4 float-end">
              <img src="../assets/owl_svg.svg"/>
                  
            </div>
          </div>
            
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <CountDown
              v-bind:tests="tests"
              @add-test="addTest"
              @delete-test="deleteTest"
            />
          </div>
          <div class="col-md-2"></div>
        </div>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-9 timetable">
            <TimeTable />
          </div>
          <div class="col-1"></div>
        </div>
      </div>
      <BottomBar class="bottomnav" />
    </div>
  </template>
  
  <script>
  import Sidebar from "../components/Navigation/Sidebar.vue";
  import Topbar from "../components/Navigation/Topbar.vue";
  import CountDown from "../components/HomePage/CountDown.vue";
  import TimeTable from "../components/HomePage/TimeTable.vue";
  import Quote from "../components/HomePage/Quote.vue";
  import BottomBar from "../components/Navigation/BottomBar.vue";
  import { auth, db } from "../../src/main";
  import {
    getFirestore,
    doc,
    updateDoc,
    getDoc,
    setDoc,
    collection,
    addDoc,
    deleteDoc,
    deleteField,
    arrayUnion,
    arrayRemove,
    onSnapshot,
    query,
    where,
  } from "firebase/firestore";
  
  export default {
    name: "Dashboard",
    components: {
      Sidebar,
      Topbar,
      CountDown,
      TimeTable,
      Quote,
      BottomBar,
    },
    data() {
      return {
        tests: [],
        tabs: [],
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
    mounted() {
      if (localStorage.getItem("email")) {
        var email = localStorage.getItem("email");
        if (email) {
        const q = doc(db, "users", email)
        onSnapshot(q, (doc) => {
          this.StudentName = doc.data().profile.fullName
        });
        } else {
            window.location.href = '#/login'
        }
  
        const q = query(collection(db, "users", email, "countDown"));
  
        onSnapshot(q, (querySnapshot) => {
          const data = [];
          querySnapshot.docs.forEach((docSnapshot) => {
            if (docSnapshot.id != "ignore") {
              let newdata = docSnapshot.data();
              newdata.id = docSnapshot.id;
  
              data.push(newdata);
            }
          });
          this.tests = data.sort(function (a, b) {
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c - d;
          });
        });
      } else {
        window.location.href = "#/login";
      }
    },
    created() {
      //this is preferably stored in backend
    }, 
  };
  </script>
  
  <style scoped>
  
  </style>
  