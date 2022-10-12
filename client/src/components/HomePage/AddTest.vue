<template>
 <li class="list-group-item d-flex justify-content-around align-items-center" @keyup.enter="onKeyUp()">
                   
                         <div class="me-auto col-5 ms-1">
                              <input v-model="test" type="text" class="form-control form-control-sm" placeholder="Test Name">
                            
                         </div>

                         <div class="col-3 d-flex justify-content-center ms-1">
                              <input v-model="subject" type="text" class="form-control form-control-sm" placeholder="Subject">
                         </div>
                       
                              <div class="col-4 ms-1">
                                    <input v-model="date" type="text" class="form-control form-control-sm" placeholder="mm/dd/yyyy">
                              </div>
                     
                 
               </li>
</template>
<script>
export default {
  name: 'AddTest',
  data() {
    return {
      test: '',
      subject: '',
        date:''
      }
  },
  methods: {
    onKeyUp(e) {
    
      if (!this.test) {
        alert('please add a test')
        return
      }
      const newTest = {
        id: Math.floor(Math.random() * 100000),//have to edit 
        testName: this.test,
        date: this.date,
        subject:this.subject
      }
      this.$emit('add-test',newTest)
      console.log(newTest)
      this.test = ''
       this.subject= '',
        this.date=''
      
    }
      
    }
    
}
</script>
<style scoped>


</style>