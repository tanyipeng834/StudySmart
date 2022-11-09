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

        <img v-if="menuIcon" :src="menuIcon" class="menuIcon" />
            <div class="d-flex flex-column align-items-center align-content-start">

                {{ StudentName }}

                <p class="small mb-0">{{StudentLevel}}</p>
            </div>
        </div>
        <!-- </div>

            </div> -->



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
        props: {
            tabs: Array,
            menuTitle: {
                type: String,
                default: "StudySmart",
            },
            menuLogo: {
                type: String,
                default: require("@/assets/birb_icon.png"),
            },
            menuIcon: {
                type: String,
                default: require("@/assets/owl_head.png"),
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
        height: 4em;
        color: white;
        padding: 1rem;
        background-color: #253F63;

    }

    a:has(+a) {
        margin-right: 2rem;
    }

    img,
    i {
        margin-right: 1rem;
        background-color: white;
        border-width: 5px;
        border-radius: 12%;
        border-width: 5px;
        border-style: solid;
        height: 46px;
        width: auto;

    }

    .menuTitle {
        margin: 0;
        position: relative;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    
</style>