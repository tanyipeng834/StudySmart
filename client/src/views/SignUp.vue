<template>
  <div>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Name" v-model="name" /></p>
    <p>
      <select v-model="grade" required>
        <option value='' disabled selected class="">Your school grade</option>
        <option value="Secondary 1">Secondary 1</option>
        <option value="Secondary 2">Secondary 2</option>
        <option value="Secondary 3">Secondary 3</option>
        <option value="Secondary 4">Secondary 4</option>
        <option value="Secondary 5">Secondary 5</option>
      </select>
    </p>
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

  import {
    auth,
    db
  } from "../main";

  const email = ref('')

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

            }});
          await setDoc(doc(db, "users", email.value, 'progressResults1','ignore'), {});
          await setDoc(doc(db, "users", email.value, 'progressResults2','ignore'), {});
          await setDoc(doc(db, "users", email.value, 'progressResults3','ignore'), {});
          await setDoc(doc(db, "users", email.value, 'progressResults4','ignore'), {});
          await setDoc(doc(db, "users", email.value, 'progressResults5','ignore'), {});

          await setDoc(doc(db,"users",email.value,'countDown','ignore'),{})
  
          // await setDoc(col, { 'ignore' :''});

          localStorage.setItem("email", email.value);

          window.location.href = '/#';

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

<style scoped>
  select:invalid {
    color: gray;
  }
</style>