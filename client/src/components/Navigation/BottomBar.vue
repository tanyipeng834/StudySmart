<template>
    <nav class="navbar">
    <div class="container-fluid">

       <a class="navbar-brand text-white" href="#">Dashboard</a>
       <a class="navbar-brand text-white" href="#forum">Forum</a>
       <a class="navbar-brand text-white" href="#progress">Progress</a>
       <a class="navbar-brand text-white" href="#quiz">Quiz</a>

     </div>
    </nav>
    </template>


    <script>

       export default {
           name: 'BottomBar'

       }
    </script>

    <style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
    @import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");
       .navbar {
           display: none;

       }
    @media(max-width:767px) {
           .navbar {
               display: block;

               overflow: hidden;
               background-color: #253F63;
               color: white;
               position: fixed;
               bottom: 0;
               width: 100%;
               font-size:10px;
           padding:0px 0;


           }
       }


    </style>