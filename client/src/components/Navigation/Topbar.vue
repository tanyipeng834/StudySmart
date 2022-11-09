<template>
    <nav class="navbar navbar-expand-lg navbar-dark topbar d-flex justify-content-between">


        <!-- <div class="collapse navbar-collapse" id="navbarCollapse"> -->


        <div class="d-flex">
            <img v-if="menuLogo" :src="menuLogo" alt="menu_logo" class="menu_logo" />
            <i v-else class="bx icon" :class="menuIcon" />
            <div class="logo_name">
                <h4 class="menuTitle"> {{ menuTitle }} </h4>
                
            </div>
        </div>

        <div class="d-flex justify-content-evenly">

            <a :href='tab.link' class="nav-item nav-link"
                v-for="(tab, index) in tabs.filter((tab)=> tab.dropdown===false)" :key="index">
                {{tab.name}}
            </a>

            <DropdownMenu v-for="(tab, index) in tabs.filter((tab)=> tab.dropdown===true)" :key="index" :tab="tab" />
        </div>
        <div class="d-flex ">

        <img v-if="menuIcon" :src="menuIcon" class="menuIcon"/>
            <div class="d-flex flex-column align-items-center align-content-start align-items justify-content-center">

                {{ StudentName }}

                <p class="small mb-0">{{StudentLevel}}</p>
            </div>
            <div class="d-flex align-items-center ms-4">
            <span @click="logout">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </span>
                
        </div>
        </div>

        
        
    </nav>

</template>
<script>
    import DropdownMenu from "./DropdownMenu.vue";
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
        name: "Topbar",
        mounted() {
            var email = localStorage.getItem("email");
            if (email) {
                const q = doc(db, "users", email)
                onSnapshot(q, (doc) => {

                    console.log("Current data: ", doc.data());
                    this.StudentName = doc.data().profile.fullName
                    this.StudentLevel = doc.data().profile.schoolGrade
                });
            } else {
                window.location.href = '#/login'
            }
        },
        data() {
            return {
                StudentName: "",
                StudentLevel: ""

            }
        },
        methods:{
            logout() {
                localStorage.removeItem("email");
                window.location.href = "#/login"
            }

        },
        props: {
            tabs: Array,
            menuTitle: {
                type: String,
                default: "",
            },
       
            menuLogo: {
                type: String,
                default: require("@/assets/birb_logo.svg"),
            },
            menuIcon: {
                type: String,
                default: require("@/assets/owl_face_svg.svg"),
            }

        },
        components: {
            DropdownMenu,

        }

    }


</script>
<style scoped>

    .topbar {
        position: sticky;
        top: 0;
        width: 100%;
        height: 75px;
        color: white;
        padding: 1rem;
        background-color: #253F63;
        /* animation: 1s sinkIn ease-in; */

    }
    /* @keyframes sinkIn{
        0%{
            transform: translateY(-200%);
            opacity: 0;
        }
        100%{
            transform: translateY(0%);
            opacity: 1;
        }
    } */

    a:has(+a) {
        margin-right: 2rem;
    }

    img {
        margin-right: 1rem;
        background-color: white;
        border-width: 5px;
        border-radius: 9px;
        border-width: 4px;
        border-style: solid;
        height: 60px;
        width: auto;
    }

    .menuTitle {
        margin-bottom: 10px;
        position: relative;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    span {
        background-color: #aac1ce ;
        border-width: 4px;
        border-style: solid;
        border-radius: 9px;
        border-color: #aac1ce ;
        color: #253F63;
        
    }

</style>