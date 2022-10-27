<template>
  <div class="container-fluid login wrapper w-100">
    <div class="row">
      <div class="col-2">
        <Sidebar
          :haveTopbar="false"
          profileName="Tan Yi Peng"
          profileRole="Secondary 3 Student"
        />
      </div>
      <div class="col-md-4 col-12">
        <CountDown
          v-bind:tests="tests"
          @add-test="addTest"
          @delete-test="deleteTest"
        />
      </div>
      <div class="col-md-4 col-12 quote">
        <div class="text"><Quote /></div>
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
</template>

<script>
import Sidebar from "../components/Navigation/Sidebar.vue";
import CountDown from "../components/HomePage/CountDown.vue";
import TimeTable from "../components/HomePage/TimeTable.vue";
import Quote from "../components/HomePage/Quote.vue";
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
    CountDown,
    TimeTable,
    Quote,
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
  mounted() {
       if (localStorage.getItem("email")) {
            var email = localStorage.getItem("email");
    const q = query(collection(db, "users", email, 'countDown'))

         onSnapshot(q, (querySnapshot) => {
         const data=[]
      querySnapshot.docs.forEach((docSnapshot) => {

              if (docSnapshot.id != 'ignore') {
                let newdata = docSnapshot.data()
newdata.id=docSnapshot.id
        
                data.push(newdata)
    }
      });
      this.tests=data.sort(function (a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return c - d;
      });

    

    });
     

    } else {
      window.location.href='#/login'
    }
  },


  created() {
    //this is preferably stored in backend
 

  },
};


</script>

<style scoped>
.quote {
  position: relative;
  margin-left: 50px;
  background-image: url("../assets/2-21362_png-file-size-blue-watercolor-stain-png.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.login {
  background-image: url("@/assets/cloud.jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.timetable {
  display: flex;
  justify-content: center;
}
.text {
  position: absolute;
  top: 120px;
  text-align: center;
  display: flex;
  align-items: center;
}
</style>
