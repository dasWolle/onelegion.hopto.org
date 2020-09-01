<template>
  <div id="app" class="h-screen w-screen overflow-auto">
    <Navbar></Navbar>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "@/components/Footer";
  import Header from "@/components/Header";
  import Navbar from "@/components/Navbar";

  export default {
    name: "app",
    components: {
      Footer,
      Header,
      Navbar,
    }
  };
</script>

<style lang="scss">
  @import "./scss/main";
</style>
