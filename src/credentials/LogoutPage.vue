<template>
  <div>
    <v-btn
      rounded
      dark
      color="primary"
      @click.prevent="LogoutButton"
    >
      Logout
    </v-btn>
  </div>
</template>

<script>
  export default { 
    methods: {
      LogoutButton() {
        localStorage.clear();
        this.$router.push('login')
      }
    }
  }
</script>