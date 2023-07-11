<template>
  <div class="container">
    <h1>Welcome to the Profile</h1>
    <p>{{ this.$route.params.id }}</p>
    <LogoutPage />
  </div>
</template>

<script>
import LogoutPage from '../credentials/LogoutPage.vue';
import axios from 'axios';

  export default {
    created() {
      this.retrieveData();
    },
    components: {
      LogoutPage,
    },
    methods: {
      retrieveData() {
        axios.get(`http://localhost:4000/users/profile/${this.$route.params.id}`)
          .then(response => {
            const data = response.data
            console.log(data)
            return data
          })
          .catch(error => {
            console.error(error);
          })
      }
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