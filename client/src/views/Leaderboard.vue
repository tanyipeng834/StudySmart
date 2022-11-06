<template>
    <div class="container-fluid login">
      <div class="row login">
  
        <div class="col-md-6 left-side">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="1500"
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
  
        <div class="col-md-6 right-side mb-4">
          <div class="text-center">
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