<template>
  <div>

  <div class="container-fluid main">

  
     <Topbar :tabs="tabs" menuTitle="Forum" />
      <div class="row">
        <div class="col-4">
          <Sidebar :haveTopbar="true"/>
        </div>
        <div class="col-4 ">

        </div>
        <div class="col-4 ">

        </div>
      </div>
      
        
             <div class="row">
              <div class="col d-flex justify-content-center">
                <div  style="text-align: left; margin-top: 65px; "><topStories /></div>    

              </div>
             </div>
                     
           
                   
            
  
            
        
            
              <BottomBar class="bottomnav" />
            </div>
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

  .main {
    margin-top: 65px;
   padding-bottom: 65px;

    display: flex;
    justify-content: center;
    background-color: #eaf1f5;
    min-height: 100vh;
    width:100vw;
    overflow-x: hidden;
    overflow-y:scroll;

  }
  </style>
  