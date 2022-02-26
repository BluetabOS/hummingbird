import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/pages/Home.vue";
import Profile from "/src/pages/Profile.vue";
import Signin from "/src/pages/Signin.vue";
import Signup from "/src/pages/Signup.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});



const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(getAuth(), (user)=>{
            removeListener()
            resolve(user)
        }, reject)
    })
}

router.beforeEach(async(to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser) {
      next();
    } else {
      alert("You dont have permission");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
