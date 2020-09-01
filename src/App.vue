<template>
  <div id="app" class="h-screen w-screen overflow-hidden">
    <Navbar></Navbar>
    <div class="h-screen w-screen overflow-auto flex flex-col justify-between">
      <div>
        <Header></Header>
        <div class="container mx-auto">
          <router-view />
        </div>
      </div>
      <Footer></Footer>
    </div>
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
