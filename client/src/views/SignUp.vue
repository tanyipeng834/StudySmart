<template>
  <div>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Name" v-model="name" /></p>
    <p><input type="text" placeholder="School Grade" v-model="grade" /></p>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
  </div>
</template>
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
    deleteField
  } from "firebase/firestore";
  import {
    ref
  } from 'vue';
  import {
    getAuth,
    createUserWithEmailAndPassword
  } from "firebase/auth"


  const db = getFirestore();
  const email = ref('')
  const auth = getAuth()
  const password = ref('')
  const name = ref('')
  const grade = ref('')

  // const router = useRouter() // get a reference to our vue router
  const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value) // need .value because ref()
      .then(async (data) => {
        console.log('Successfully registered!');


        try {
          const docRef = await setDoc(doc(db, "users", email.value), {
            profile: {
              fullName: name.value,
              schoolGrade: grade.value
            },
            countDown: [],
            progresResults: [],



          });

          localStorage.setItem("email", email.value);
          localStorage.setItem("db", JSON.stringify(db));
          //           var retrievedObject = localStorage.getItem('testObject');

          // console.log('retrievedObject: ', JSON.parse(retrievedObject));
          window.location.href = '/';

        } catch (e) {
          console.error("Error adding document: ", e);
        }


      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }
</script>