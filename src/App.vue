<template>
  <div>
    <!-- <router-link to="/signup"><SignupPage /></router-link>
    <router-link to="/login"><LoginPage /></router-link> -->

    <TheNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
// import InfiniteScrolling from './components/InfiniteScrolling.vue';
// import SignupPage from './credentials/SignupPage.vue';
// import LoginPage from './credentials/LoginPage.vue';

export default {
  name: 'App',

  components: {
    TheNavbar,
    // InfiniteScrolling
    // SignupPage,
    // LoginPage,
  }
};
</script>

<!-- hsl(213, 44%, 95%) -->

<style>
  body {
    height: 100vh;
    background-color: hsl(213, 44%, 95%);
  }
</style>
