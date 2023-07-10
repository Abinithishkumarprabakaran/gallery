import Vue from 'vue';
import VueRouter from 'vue-router';
import SignupPage from '../credentials/SignupPage.vue';
import LoginPage from '../credentials/LoginPage.vue';
import HomeView from '../components/HomeView.vue';
// import PageNotFound from '../components/PageNotFoud.vue';

Vue.use(VueRouter);

const router = new VueRouter({
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
    // {
    //   path: '*',
    //   component: PageNotFound,
    // },
  ],
});

export default router;
