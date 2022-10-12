<template>
     <div>
    
          <ul class="list-group">
               <li  class="list-group-item d-flex justify-content-between align-items-start header bg-dark">
                    <h5 class="text-white">Test Name</h5>
                    <h5 class="float-end text-white">Days Left</h5>
               </li>
               <li v-for="test in tests" class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                         <div class="fw-bold">{{test.testName}}</div>
                         {{test.subject}}
                    </div>
                    <span class="p-2 badge bg-primary rounded-pill">{{daysLeft(test.date)}}</span>
               </li>
          </ul>
     </div>
</template>
<script>
     export default {
          name: "CountDown",
          props: {
               tests: Array,
          },
          methods: {
               daysLeft(date) {
                    let testDate = new Date(date)
                    let currentDate=new Date()
                    let difference = testDate.getTime() - currentDate.getTime();
                    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
                    return TotalDays;
                    
               }
          }
     };
</script>
<style scoped>
     @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
     @import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');

     * {

          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
     }

     ul {
          margin-top: 20px
     }
   
</style>