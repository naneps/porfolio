<template>
  <Navbar />
<div class="container m-auto">
    <router-view></router-view>
</div>
  
</template>
<style >
</style>

  <script >
import Home from "./pages/Home.vue";
import Navbar from "./components/Navbar.vue";
  
export default {
  components: {
    Home,
    Navbar
}
}
</script>