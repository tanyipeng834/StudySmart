<template>
  <div class="container-fluid login">
    <div class="row login">

      <div class="col-md-6 left-side">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="1000"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/collaboration.jpg"
                class="d-block w-100 h-100"
                alt="..."
              />
              <h3 class="carousel-text mt-4">Need Study Buddys?</h3>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/graduation.jpg"
                class="d-block w-100 h-100"
                alt="..."
              />
              <h3 class="carousel-text mt-4">Want to do well academically?</h3>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/teacher.jpg"
                class="d-block w-100 h-100"
                alt="..."
              />
              <h3 class="carousel-text mt-4">Need Guidance?</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 right-side">
        <div class="mt-4 text-center">
          <img src ="../assets/logo.svg" class="animate__animated animate__bounce" />
            <TypeEffect/>
           

        </div>
        <div class="login-form">
          <LoginForm/>

           

        </div>



      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css';
import TypeEffect from"../components/TypeEffect.vue";
import LoginForm from"../components/LoginForm.vue";



export default {
  name: "Login",

  components:{
    TypeEffect,
    LoginForm
}
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
.login {
  margin: 0;
  padding: 0;
  height: 100vh;
}

.left-side{

    height:100%;
    background-color:lightskyblue ;
    display:flex;
    text-align: center;
    align-items: center;
}

.right-side{
    position:relative;
    height:100%;

}
#hero{
    font-family:'Courier New', Courier, monospace;
    font-weight:bold;
    text-align: center;
    font-size: 80px;


}
.carousel-text{
    color:white;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 700;


}



</style>
