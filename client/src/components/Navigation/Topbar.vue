<template>
<<<<<<< HEAD
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark topbar">
        <div class="container-fluid d-flex">
=======
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark topbar d-flex justify-content-between">
>>>>>>> 805543adbb8ba1ddb930e7bc57e150ff47fb6faf


<<<<<<< HEAD
                <div class="navbar-nav">
                    <div class="row">
                        <div class="col">
                            <div class="logo-details" style="margin: 6px 14px 0 14px">
                                <img
                                    v-if="menuLogo"
                                    :src="menuLogo"
                                    alt="menu-logo"
                                    class="menu-logo icon"
                                />
                                <i v-else class="bx icon" :class="menuIcon" />
                                
                            </div>
                        </div>

                        <div class="col">
                            
                                <div class="logo_name">
                                    {{ menuTitle }}
                                </div>
                        </div>
                        
                    </div>
                    
=======
        <!-- <div class="collapse navbar-collapse" id="navbarCollapse"> -->
>>>>>>> 805543adbb8ba1ddb930e7bc57e150ff47fb6faf


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
                default: require("@/assets/birb_icon.png"),
            },
            menuIcon: {
                type: String,
<<<<<<< HEAD
                default: require("@/assets/birb_icon.png"),
=======
                default: require("@/assets/owllogo.png"),
>>>>>>> 805543adbb8ba1ddb930e7bc57e150ff47fb6faf
            }

        },
        components: {
            DropdownMenu,

        }

    }
</script>
<style scoped>

<<<<<<< HEAD
.topbar{
    position: relative;
    height: 100%;
    color: white;
}

img {
    justify-content: center;
    background-color: white;
    border: 10px;
    width: 60%;
    height: auto;
    padding: 5px;
    border-radius: 10%;
}

.logo_name {
    justify-content: center;
    align-items: center;
}
=======
    .topbar {
        position: sticky;
        top: 0;
        width: 100%;
        height: 4em;
        color: white;
        padding: 1rem;

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
>>>>>>> 805543adbb8ba1ddb930e7bc57e150ff47fb6faf
</style>