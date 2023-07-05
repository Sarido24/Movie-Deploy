<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"

export default {
  components: {
    Navbar
  }

}

</script>

<template>






      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->

  <RouterView />
</template>

<style>

</style>
