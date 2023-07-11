import Vue from 'vue';
import VueRouter from 'vue-router';
import SignupPage from '../credentials/SignupPage.vue';
import LoginPage from '../credentials/LoginPage.vue';
import HomeView from '../components/HomeView.vue';
import TheProfile from '../components/TheProfile.vue';
import LoginCard from '../components/LoginCard.vue';
import SignupCard from '../components/SignupCard.vue';
// import PageNotFound from '../components/PageNotFoud.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',   // to remove the # hash from the link
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/signup',
      component: SignupPage,
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/profile/:id',
      component: TheProfile,
      meta: { requiresAuth: true }
    },
    {
      path: '/logincard',
      component: LoginCard,
    },
    {
      path: '/signupcard',
      component: SignupCard,
    },
  ],
});

router.beforeEach((to, from, next) => {

  if (to.meta.requiresAuth) {
    const isAuthenticated = !!localStorage.getItem('token')

    if (isAuthenticated) {
      next();
    }
    else {
      next('/login');
    }
  }
  else {
    next();
  }
})

export default router;
