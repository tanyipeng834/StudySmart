<template>
<nav class="navbar navbar-dark bg-dark">
<div class="container-fluid">

    <a class="navbar-brand " href="#">Dashboard</a>
    <a class="navbar-brand " href="#forum">Forum</a>
    <a class="navbar-brand " href="#progress">Progress</a>
    <a class="navbar-brand " href="#quiz">Quiz</a>

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
@media(max-width:992px) {
        .navbar {
            display: block;

            overflow: hidden;
            background-color: rgb(100, 100, 100, 0.5);
            position: fixed;
            bottom: 0;
            width: 100%;
            font-size:10px;
        padding:0px 0;


        }
    }


</style>