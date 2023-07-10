<template>
  <div id="InfinteScrolling">
    <h1>Random User</h1>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        users: [],
      };
    },
    methods: {
      getInitialUsers() {
        axios.get(`https://randomuser.me/api/?results=5`).then((response) => {
          this.users = response.data.results;
        });
      },
    },
    beforeMount() {
      this.getInitialUsers();
    },
  };
</script>

<style>
  .user {
    display: flex;
    background: #ccc;
    border-radius: 1em;
    margin: 1em auto;
  }

  .user-avatar {
    padding: 1em;
  }

  .user-avatar img {
    display: block;
    width: 100%;
    min-width: 64px;
    height: auto;
    border-radius: 50%;
  }

  .user-details {
    padding: 1em;
  }

  .user-name {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-weight: 900;
  }
</style>