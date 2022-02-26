import { createApp } from 'vue'
import App from './App.vue'
import './styles.scss'
import router from './router'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDZWNqku8gfRpTSe9x-bU48zpG4wh7mtfg",
  authDomain: "hummingbird-55e5e.firebaseapp.com",
  projectId: "hummingbird-55e5e",
  storageBucket: "hummingbird-55e5e.appspot.com",
  messagingSenderId: "487300710391",
  appId: "1:487300710391:web:afe796db31e242200bb8f2",
  measurementId: "G-4360KCZEFK"
};

// Initialize Firebase
initializeApp(firebaseConfig);



createApp(App).use(router).mount('#app')
