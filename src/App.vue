<template>
  <div class="flex flex-row w-full bg-secondary px-4 py-2 fixed shadow-lg">
    <img src="./assets/logo.png" class="w-12 mx-2" />
    <h1 class="text-2xl font-script text-primary mx-4 pr-8">HummingBird</h1>
    <router-link class="mx-4 text-primary text-lg font-sans link" to="/"
      >Inicio</router-link
    >
    <router-link class="mx-4 text-primary text-lg font-sans link" to="/profile"
      >Perfil</router-link
    >
    <router-link class="mx-4 text-primary text-lg font-sans link" to="/signin"
      >Registro</router-link
    >
    <router-link class="mx-4 text-primary text-lg font-sans link" to="/signup"
      >Ingresa</router-link
    >
    <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  </div>
  <router-view />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router"

const router = useRouter()
const isLoggedIn = ref(false);

let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
   router.push('/') 
  })
}
</script>
