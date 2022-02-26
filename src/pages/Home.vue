<template>
  <h1 class="text-secondary text-2xl text-center pt-24">Inicio</h1>
  <p><input type="email" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errorMesage">{{ errorMesage }}</p>
  <p><button @click="register">Submit</button></p>
  <p>
    <button @click="signInWithGoogle">
      <i class="mdi mdi-google text-secondary text-lg"></i>Sign in with Google
    </button>
  </p>
</template>
<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");

const errorMessage = ref();

const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      router.push("/profile");
    })
    .catch((error) => {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage.value = "Invalid email";
          break;
        case "auth/user_not_found":
          errorMessage.value = "User not found";
          break;
        case "auth/wrong-password":
          errorMessage.value = "Wrong password";
          break;
      }
    });
};

const signInWithGoogle = ()=>{
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
  .then((result)=>{
    router.push('/profile')
  })
  .catch((error)=>{
    alert(error.message)
  })
}
</script>
