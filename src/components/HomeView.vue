<template>
  <div class="home">
    <v-img
      class="rounded-img"
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="420"
      max-width="720"
      src='../assets/home.jpg'
      alt="Home"
    ></v-img>
    <br>
    <h1>Welcome to the Gallery</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: '../assets/home.jpg',
    }
  }
}
</script>

<style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }

  .rounded-img {
    border-radius: 10%
  }
</style>