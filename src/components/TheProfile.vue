<template>
  <div class="container">
    <h1>Welcome to the Profile</h1>
    <LogoutPage />
  </div>
</template>

<script>
import LogoutPage from '../credentials/LogoutPage.vue';

  export default {
    components: {
      LogoutPage,
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
  }
</style>