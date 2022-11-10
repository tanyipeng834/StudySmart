<template>
    <div>
      <Topbar :tabs="tabs" menuTitle="Latest News"></Topbar>
      <div class="container-fluid login wrapper w-100">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-0">
            <Sidebar
              :haveTopbar="false"
            />
          </div>
          <div
            class="col-lg-8 col-md-6 col-12 mb-3 px-3 me-3"
            style="margin-top: 65px;"
          >
          <div class="row py-5">
            
              
              <div class="text" style="text-align: left"><topStories /></div>            
            
  
            
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
  import topStories from "../components/News/topStories.vue";
  import BottomBar from "../components/Navigation/BottomBar.vue";
  import { auth, db } from "../main";
  import {
    getFirestore,
    doc,
    updateDoc,
    getDoc,
    setDoc,
    collection,
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
      BottomBar,
      topStories
    },
    data() {
      return {
        tests: [],
        tabs: [],
      };
    },
    methods: {
      
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
  /* .login {
    overflow: hidden;
  margin-top: 60px;
  background-color: #eaf1f5;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  } */
  </style>
  