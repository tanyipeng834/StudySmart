<template>
  <div>
    <section class="vh-100" style="background-color: #eee">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <span @click="back">
                      <i class="fa-solid fa-arrow-left fa-2xl"></i>
                    </span>
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Create an Account
                    </p>

                    <form class="mx-1 mx-md-4">

                      <div class="d-flex flex-row align-items-center mb-4">

                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0 username">
                          <input type="text" v-model="name" class="form-control" placeholder="Your Username"
                            @change="checkExist" />
                          <p v-if="name.includes(' ')" class="text-danger small mt-1 mb-0 d-block form-validation">Your
                            username should
                            not include
                            any spaces</p>
                          <p v-if="unique== false" class="text-danger small mt-1 mb-0 d-block form-validation">This
                            username has been taken.</p>
                        </div>

                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>

                        <div class="form-outline flex-fill mb-0 email">
                          <input type="text" v-model="email" class="form-control" placeholder="Your Email" />
                          <p v-if="email!=''&&(!email.includes('@')||!email.includes('.'))"
                            class="text-danger small mt-1 mb-0 d-block form-validation">
                            Please enter a valid email</p>

                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-solid fa-lg fa-school me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">

                          <select v-model="grade" required class="form-control">
                            <option value="" disabled selected class="">
                              Please select your school grade
                            </option>
                            <option value="Secondary 1" selected>Secondary 1</option>
                            <option value="Secondary 2">Secondary 2</option>
                            <option value="Secondary 3">Secondary 3</option>
                            <option value="Secondary 4">Secondary 4</option>
                            <option value="Secondary 5">Secondary 5</option>
                          </select>

                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" class="form-control" v-model="password" placeholder="Password" />

                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" @click="register" class="btn btn-primary btn-lg">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="../assets/signup.jpg" class="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "back",
    data() {
      return {
        unique: true,
        name: '',
      }
    },

    methods: {
      back: () => {
        window.location.href = "#/login";
      },

    },
  };
</script>

<script setup>
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
  } from "firebase/firestore";
  import {
    ref
  } from "vue";
  import {
    getAuth,
    createUserWithEmailAndPassword
  } from "firebase/auth";

  import {
    auth,
    db
  } from "../main";

  const email = ref("");
  const password = ref("");
  const name = ref("");
  const grade = ref("");
  var unique = ref(true)

  // const router = useRouter() // get a reference to our vue router
  const checkExist = async () => {

    let username = name.value.toLowerCase()
    console.log(username)
    const ref = doc(db, 'username', username)
    let docSnapshot = await getDoc(ref)

    if (docSnapshot.exists()) {
      // return true;
      unique.value = false
      console.log(false)

    } else {
      // return false;
     unique.value  = true
      console.log(true)

    }

  }
  const register = () => {

    if (unique.value != false) {

    createUserWithEmailAndPassword(auth, email.value, password.value) // need .value because ref()
      .then(async (data) => {
        console.log("Successfully registered!");
        try {
          const docRef = await setDoc(doc(db, "users", email.value), {
            profile: {
              fullName: name.value,
              schoolGrade: grade.value,
              email: email.value,
            },
            LikedPost: [],
          });
          await setDoc(
            doc(db, "users", email.value, "progressResults1", "ignore"), {}
          );
          await setDoc(
            doc(db, "username", name.value), {}
          );
          await setDoc(
            doc(db, "users", email.value, "progressResults2", "ignore"), {}
          );
          await setDoc(
            doc(db, "users", email.value, "progressResults3", "ignore"), {}
          );
          await setDoc(
            doc(db, "users", email.value, "progressResults4", "ignore"), {}
          );
          await setDoc(
            doc(db, "users", email.value, "progressResults5", "ignore"), {}
          );

          await setDoc(doc(db, "users", email.value, "countDown", "ignore"), {});
          await setDoc(doc(db, "users", email.value, "timetable", "ignore"), {});
          await setDoc(doc(db, "posts", "ignore"), {});

          // await setDoc(col, { 'ignore' :''});

          localStorage.setItem("email", email.value);

          window.location.href = "/#";
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((error) => {
        console.log(error.code);
        // alert(error.message);
        asgar({
            title: `Error in creating an account.`,
            message: `Please check your inputs.`,
            // details: "You will not able to recover this action",

            right: "Ok",

          })
          .then(() => {
            console.log("ok");

          })

      });
    }
    else {
             asgar({
            title: `Error in creating an account.`,
            message: `Please check your inputs.`,
            // details: "You will not able to recover this action",

            right: "Ok",

          })
          .then(() => {
            console.log("ok");

          })
       }
    return {
unique
    }

  };
</script>

<style scoped>
  div {
    background-color: #d5e3ef;
  }

  select:invalid {
    color: gray;
  }

  .btn-primary {
    background-color: #253F63 !important;
  }

  img {
    height: 400px;
    width: auto;
  }

  .form-validation {
    position: absolute;
    font-size: smaller;
  }

  .username,
  .email {
    position: relative;
  }
</style>

