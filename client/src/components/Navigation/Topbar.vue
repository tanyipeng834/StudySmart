<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark topbar d-flex justify-content-between">


        <!-- <div class="collapse navbar-collapse" id="navbarCollapse"> -->


        <div class="d-flex">


            <img v-if="menuLogo" :src="menuLogo" alt="menu-logo" class="menu-logo icon" />
            <i v-else class="bx icon" :class="menuIcon" />
            <div class="logo_name">
                {{ menuTitle }}
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

                <p class="small text-muted mb-0">{{StudentLevel}}</p>
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
                default: require("@/assets/logo.svg"),
            },
            menuIcon: {
                type: String,
                default: require("@/assets/owllogo.png"),
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
        animation:sinkIn 1.5s ease-in;

    }
    @keyframes sinkIn{
        0%{
            transform: translateY(-200%);
            opacity: 0;
        }
        100%{
            transform: translateY(0%);
            opacity: 1;
        }
    }

    a:has(+a) {
        margin-right: 2rem;
    }

    img,
    i {
        margin-right: 1rem;
    }

    .menuIcon {
        width: 14%;


    }
</style>