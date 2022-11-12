<template>
  <div class="main" @click="fadeIn">
    <div class="d-flex justify-content-end mt-4">
      <button class="btn" v-if="addTest === false" @click="addTest = !addTest">
        <i class="fa-regular fa-pen-to-square fa-lg text-right"></i>Add Upcoming Exam
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
    <ul class="list-group" id="example">
      <li class="list-group-item d-flex justify-content-around align-items-start header ">
        <div class="col-7">
          <h6 class="text-white">Exam Count Down</h6>
        </div>
        <div class="col-4">
          <h6 class="float-start text-white"> Days Left</h6>
        </div>
      </li>
      <!-- class="list-group-item d-flex justify-content-around align-items-center" -->
      <li :class="[addTest ? 'list-group-item' : 'hide']" @keyup.enter="onSubmit()">
        <div class="me-auto col-5 ms-1">
          <input v-model="test" type="text" class="form-control form-control-sm" placeholder="Test Name"  id="testTooltip" title="Please enter a test name" />
        </div>

        <div class="col-3 d-flex justify-content-center ms-1">
          <input v-model="subject" type="text" class="form-control form-control-sm" placeholder="Subject" />
        </div>

        <div class="col-4 ms-1">
          <input v-model="date" type="date"  @change="validateDate"  id="dateTooltip" title="Date cannot be in the past" class="form-control form-control-sm" placeholder="" />
        </div>
      </li>

      <li v-if='currentPageData.length==0' class="list-group-item">
        <div>Add Your Upcoming Exams Here!</div>
      </li>
      <li v-else-if="currentPageData.length<4" v-for="(test,index) in currentPageData" :key="index"
        class="list-group-item d-flex justify-content-around align-items-start" :class="danger( daysLeft(test.date))">
        <div class="ms-2 me-auto col-7">
          <div class="fw-bold">{{ test.test }}</div>
          <p>
            <small>{{ test.subject }} . {{ test.date }}</small>
          </p>
        </div>

        <div class="col-4 d-flex justify-content-center">
          <span class="p-2 badge  mx-auto">{{
            daysLeft(test.date)
          }}</span>
        </div>

        <div class="col-1">
          <button type="button" class="btn position-absolute top-0 end-2" v-on:click="deleteTest(test.id)">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </li>

    <li v-else v-for="index in 4"
        class="list-group-item d-flex justify-content-around align-items-start" :class="danger( daysLeft(currentPageData[index-1].date))">

       <div class="ms-2 me-auto col-7">
          <div class="fw-bold">{{ currentPageData[index-1].test }}</div>
          <p>
            <small>{{ currentPageData[index-1].subject }} . {{ currentPageData[index-1].date }}</small>
          </p>
        </div>

        <div class="col-4 d-flex justify-content-center">
          <span class="p-2 badge  mx-auto" >{{
            daysLeft(currentPageData[index-1].date)
          }}</span>
        </div>

        <div class="col-1">
          <button type="button" class="btn position-absolute top-0 end-2" v-on:click="deleteTest(currentPageData[index-1].id)">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
           </li>
      <li v-if="count>4" class="bg-white rounded-bottom ">
        <p class="d-inline-block p-2 small">Page {{currentPage}}</p>
        <nav aria-label="Page navigation example" class="float-end">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous" @click="previous()">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item" v-for="i in pages"><a class="page-link" @click="getPageData(i)">{{i}}</a></li>

            <li class="page-item">
              <a class="page-link" aria-label="Next" @click="next()">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </li>
    </ul>

  </div>
</template>
<script>
  import gsap from "gsap";
  import {
    auth,
    db
  } from "../../main";
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
    where
  } from "firebase/firestore";
  export default {
    name: "CountDown",
    mounted() {

      var email = localStorage.getItem("email");
      this.email = email
      gsap.from(".main", {
        opacity: 0,
        x: -200,
        duration: 1.5
      });
      this.getData()


    },

    props: {
      tests: Array,
    },
    watch: {
      tests: function (newVal, oldVal) {
        // productData.forEach((item) => {
        //   console.log(item)
        // })
        console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        this.getData()
        this.getPageData(this.currentPage)
        console.log(this.currentPageData)
        for (let item of this.currentPageData) {
            console.log(item)
          }
      }

    },

    data() {
      return {
        test: "",
        subject: "",
        date: "",
        addTest: false,
        data: '',
        count: 0,
        email: '',
        pages: 0,
        currentPage: 1,
        currentPageData:[]


      };
    },
  methods: {
    previous() {
      if (this.currentPage != 1) {
        this.currentPage = this.currentPage - 1
         this.getPageData(this.currentPage)
      }

    },
    next() {
          if (this.pages != this.currentPage) {
            this.currentPage = this.currentPage + 1
        this.getPageData(this.currentPage)
      }

      },
      async getData() {
        console.log(this.tests)
        this.count = this.tests.length
        console.log(this.count)
        this.pages = Math.ceil(this.count / 4)
        console.log(this.pages)
      },
      danger(daysleft) {
        if (daysleft < 8) {
          return 'list-group-item-danger'
        }
      },
      getPageData(i) {
        this.currentPage=i
        console.log('hi')
        var unnecData = (i - 1) * 4
        this.currentPageData = this.tests.slice(unnecData, unnecData + 5)
        console.log( this.currentPageData)

      },
      daysLeft(date) {
        let testDate = new Date(date);
        let currentDate = new Date();
        let difference = testDate.getTime() - currentDate.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
      },
      async deleteTest(id) {
        console.log(id)
        var ref = doc(db, 'users', this.email, 'countDown', id);
        await deleteDoc(ref);

    },
    validateDate() {

      },

      async onSubmit(e) {
        if (!this.test) {
        $(document).ready(function(){

                $("#testTooltip").tooltip("show");

          });

          return;
        }
       const daysLeft = this.daysLeft(this.date)
      if (daysLeft < 0) {
          $(document).ready(function(){

                $("#dateTooltip").tooltip("show");

          });
        return;
        }
        const newData = {



          subject: this.subject,
          date: this.date,


          // let count = this.count

          test: this.test,
        }


        await addDoc(collection(db, "users", this.email, 'countDown'), newData)
        this.test = ''

        this.subject = ''
        this.date = ''
        this.addTest = !this.addTest
        console.log(this.addTest)





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

  }

  button {
    background-color: transparent;
    padding-right: 0px;

    margin-right: -8px;
  }
.header{
  background-color:#30507c   ;
}
  .hide {
    display: none;
  }
/* .list-group{
  border-radius: 0;
} */
  .list-group-item {
    display: flex;
    justify-content: space-around;
  }
  .badge{
    background-color: #5B7BA6 ;
    border-radius: 40%;
  }
</style>